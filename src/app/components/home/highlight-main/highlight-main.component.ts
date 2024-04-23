import { Component, DestroyRef, OnInit, inject, input, model } from '@angular/core';
import { WishListButtonCaptionModel } from '../models/caption-models/wishlist-button-caption.model';
import { HighlightButtonTypeEnumCaptionModel } from '../models/caption-models/highlight-button-type-enum-caption.model';
import { HighlightMainInputModel } from '../types/highlight-main-input.type';
import { HighlightPreviewItemInputModel } from '../models/highlight-preview-item-input.model';
import { HighlightSmallItemInputModel } from '../models/highlight-small-item-input.model';
import { output } from "@angular/core";
import { interval } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-highlight-main',
  templateUrl: './highlight-main.component.html',
  styleUrl: './highlight-main.component.scss'
})
export class HighlightMainComponent implements OnInit {
  //#region Properties
  private _destroyRef = inject(DestroyRef);

  data = input.required<HighlightMainInputModel>();
  isLoading = input.required<boolean>();
  isActive = input.required<boolean>();
  isInWishlist = input.required<boolean>();
  isWishlistProcessing = input.required<boolean>();
  wishlistButtonCaption = input.required<WishListButtonCaptionModel>();
  highlightButtonTypeCaption = input.required<HighlightButtonTypeEnumCaptionModel>();

  clickWishlistButtonEvent = output<string>();
  clickItemEvent = output<string>();

  public highlightPreviewData: HighlightPreviewItemInputModel[] = [];
  public highlightSmallData: HighlightSmallItemInputModel[] = [];
  public currentIndex = 0;
  private _previewItemLength = 0;
  //#endregion

  //#region Lifecycle methods
  ngOnInit(): void {
    this._previewItemLength = this.data().highlightPreviewItem.length;

    this._cyclePreviewItems();
  }
  //#endregion

  //#region Handler methods
  public onClickWishlistButtonEventHandler(id: string): void {
    this.clickWishlistButtonEvent.emit(id);
  }

  public onClickItemEventHandler(id: string): void {
    this.clickItemEvent.emit(id);
  }

  public updateGlobalIndex(index: number): void {
    // checks if length of the preview data is not null
    if (index > this._previewItemLength) return;

    this.currentIndex = index;
  }
  //#endregion

  //#region Main logic methods
  private _cyclePreviewItems(): void {
    interval(2000).pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
      this.currentIndex = (this.currentIndex + 1) % this._previewItemLength;
    });
  }
  //#endregion
}
