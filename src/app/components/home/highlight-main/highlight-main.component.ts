import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, input } from '@angular/core';
import { HighlightMainInputModel } from '../models/highlight-main-input.model';
import { HighlightPreviewItemInputModel } from '../models/highlight-preview-item-input.model';
import { HighlightSmallItemInputModel } from '../models/highlight-small-item-input.model';
import { output } from "@angular/core";
import { Subscription, interval } from 'rxjs';
import { HighlightMainCaptionModel } from '../models/caption-models/highlight-main-caption.model';

@Component({
  selector: 'app-highlight-main',
  templateUrl: './highlight-main.component.html',
  styleUrl: './highlight-main.component.scss'
})
export class HighlightMainComponent implements OnInit, OnDestroy, OnChanges {
  //#region Properties
  data = input.required<HighlightMainInputModel[]>();
  isWishlistProcessing = input.required<boolean>();
  caption = input.required<HighlightMainCaptionModel>();
  wishlistIds = input.required<string[]>();

  clickWishlistButtonEvent = output<string>();
  clickItemEvent = output<string>();

  public highlightPreviewData: HighlightPreviewItemInputModel[] = [];
  public highlightSmallData: HighlightSmallItemInputModel[] = [];
  public currentIndex = 0;
  private _intervalSubscription: Subscription | undefined;
  private readonly _CYCLE_INTERVAL = 5000;
  //#endregion

  //#region Lifecycle methods
  ngOnInit(): void {
    this._setInitData();
  }

  ngOnDestroy(): void {
    this._clearInterval();
  }

  /**
   * we check to get the dynamic value of the isLoading to handle it in our logics!
   * @param changes 
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isLoading']) {
      this._resetInterval();
    }
  }
  //#endregion

  //#region Handler methods
  public onClickWishlistButtonEventHandler(id: string): void {
    this.clickWishlistButtonEvent.emit(id);
  }

  public onClickPreviewItemEventHandler(id: string): void {
    this._emitClickEvent(id);
  }

  public onClickSmallItemEventHandler(id: string, index: number): void {
    this._emitClickEvent(id);
    this._updateGlobalIndex(index);
    this._resetInterval();
  }
  //#endregion

  //#region Main logic methods
  /**
   * changes the index value to change index of our array (changed the item every n second)
   * @returns void
   */
  private _cycleItems(): void {
    this._intervalSubscription = interval(this._CYCLE_INTERVAL).subscribe(() => {
      this.currentIndex = (this.currentIndex + 1) % this.data().length;
    });
  }

  private _setInitData(): void {
    this.data().forEach((item: HighlightMainInputModel) => {
      this.highlightPreviewData.push(this._convertHighlightMainInputModelToHighlightPreviewItemInputModel(item));
      this.highlightSmallData.push(this._convertHighlightMainInputModelToHighlightSmallItemInputModel(item));
    });
  }

  /**
   * when user clicks on the small item, the index will replace preview item index
   * two components shows the same index and items (syncs 2 component index)
   * note that this became a method for better readability in handler methods!
   * @param index 
   */
  private _updateGlobalIndex(index: number): void {
    this.currentIndex = index;
  }

  private _emitClickEvent(id: string): void {
    this.clickItemEvent.emit(id);
  }

  private _resetInterval(): void {
    this._clearInterval();
    this._cycleItems();
  }

  private _clearInterval(): void {
    if (!this._intervalSubscription) return;

    this._intervalSubscription.unsubscribe();
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
