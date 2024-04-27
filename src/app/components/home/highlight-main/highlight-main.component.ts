import { Component, DestroyRef, OnInit, inject, input } from '@angular/core';
import { HighlightMainInputModel } from '../types/highlight-main-input.type';
import { HighlightPreviewItemInputModel } from '../models/highlight-preview-item-input.model';
import { HighlightSmallItemInputModel } from '../models/highlight-small-item-input.model';
import { output } from "@angular/core";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';
import { HighlightMainCaptionMode } from '../models/caption-models/highlight-main-caption.model';

@Component({
  selector: 'app-highlight-main',
  templateUrl: './highlight-main.component.html',
  styleUrl: './highlight-main.component.scss'
})
export class HighlightMainComponent implements OnInit {
  //#region Properties
  private _destroyRef = inject(DestroyRef);

  data = input.required<HighlightMainInputModel[]>();
  isLoading = input.required<boolean>();
  isWishlistProcessing = input.required<boolean>();
  caption = input.required<HighlightMainCaptionMode>();
  wishlistListIds = input.required<string[]>();

  clickWishlistButtonEvent = output<string>();
  clickItemEvent = output<string>();

  public highlightPreviewData: HighlightPreviewItemInputModel[] = [];
  public highlightSmallData: HighlightSmallItemInputModel[] = [];
  public currentIndex = 0;
  private readonly _cycleInterval = 5000;
  //#endregion

  //#region Lifecycle methods
  ngOnInit(): void {
    this._setInitData();
    this._cycleItems();
  }
  //#endregion

  //#region Handler methods
  public onClickWishlistButtonEventHandler(id: string): void {
    this.clickWishlistButtonEvent.emit(id);
  }

  public onClickItemEventHandler(id: string, index?: number): void {
    this.clickItemEvent.emit(id);

    if (index !== undefined) {
      this._updateGlobalIndexHandler(index);
    }
  }
  //#endregion

  //#region Main logic methods
  private _cycleItems(): void {
    interval(this._cycleInterval).pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
      this.currentIndex = (this.currentIndex + 1) % this.data().length;
    });
  }

  private _setInitData(): void {
    this.data().forEach(item => {
      this.highlightPreviewData.push(this._convertHighlightMainInputModelToHighlightPreviewItemInputModel(item));
      this.highlightSmallData.push(this._convertHighlightMainInputModelToHighlightSmallItemInputModel(item));
    });
  }

  /**
   * when user clicks on the small item, the index will replace preview item index
   * two components shows the same index and items (syncs 2 component index)
   * @param index 
   */
  private _updateGlobalIndexHandler(index: number): void {
    this.currentIndex = index;
  }
  //#endregion

  //#region Helper methods
  private _convertHighlightMainInputModelToHighlightPreviewItemInputModel(item: HighlightMainInputModel): HighlightPreviewItemInputModel {
    return {
      id: item.id,
      cover: item.largeCover,
      logo: item.logo,
      description: item.description,
      price: item.price,
      highlightButtonType: item.highlightButtonType
    };
  }

  private _convertHighlightMainInputModelToHighlightSmallItemInputModel(item: HighlightMainInputModel): HighlightSmallItemInputModel {
    return {
      cover: item.minimalCover,
      name: item.name
    }
  }
  //#endregion
}
