import { Component, EventEmitter, OnInit, Output, input } from '@angular/core';
import { WishListButtonCaptionModel } from '../models/caption-models/wishlist-button-caption.model';
import { HighlightButtonTypeEnumCaptionModel } from '../models/caption-models/highlight-button-type-enum-caption.model';
import { HighlightMainInputModel } from '../types/highlight-main-input.type';
import { HighlightPreviewItemInputModel } from '../models/highlight-preview-item-input.model';
import { HighlightSmallItemInputModel } from '../models/highlight-small-item-input.model';

@Component({
  selector: 'app-highlight-main',
  templateUrl: './highlight-main.component.html',
  styleUrl: './highlight-main.component.scss'
})
export class HighlightMainComponent implements OnInit {
  //#region Properties
  data = input.required<HighlightMainInputModel[]>();
  isLoading = input.required<boolean>();
  isActive = input.required<boolean>();
  isInWishlist = input.required<boolean>();
  isWishlistProcessing = input.required<boolean>();
  wishlistButtonCaption = input.required<WishListButtonCaptionModel>();
  highlightButtonTypeCaption = input.required<HighlightButtonTypeEnumCaptionModel>();

  public highlightPreviewData: HighlightPreviewItemInputModel[] = [];
  public highlightSmallData: HighlightSmallItemInputModel[] = [];
  currentIndex = 0;
  interval: any;

  @Output() clickWishlistButtonEvent = new EventEmitter<string>();
  @Output() clickItemEvent = new EventEmitter<string>();
  //#endregion

  ngOnInit(): void {
    this.data().forEach(item => {
      this.highlightPreviewData.push({
        id: item.id,
        cover: item.cover,
        logo: item.logo,
        description: item.description,
        price: item.price,
        highlightButtonType: item.highlightButtonType
      });

      this.highlightSmallData.push({
        cover: item.smallCover,
        name: item.name
      });
    });
  }

  updateData(): void {
    const currentItem = this.data()[this.currentIndex];
    this.highlightPreviewData = [{
      id: currentItem.id,
      cover: currentItem.cover,
      logo: currentItem.logo,
      description: currentItem.description,
      price: currentItem.price,
      highlightButtonType: currentItem.highlightButtonType
    }];
  }

  //#region Handler methods
  public onClickWishlistButtonEventHandler(id: string): void {
    // TODO: maybe add guard!?
    this.clickWishlistButtonEvent.emit(id);
  }

  public onClickItemEventHandler(id: string): void {
    this.clickItemEvent.emit(id);
  }
  //#endregion
}
