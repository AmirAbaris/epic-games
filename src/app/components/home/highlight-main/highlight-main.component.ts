import { Component, DestroyRef, OnInit, inject, input } from '@angular/core';
import { HighlightMainInputModel } from '../types/highlight-main-input.type';
import { HighlightPreviewItemInputModel } from '../models/highlight-preview-item-input.model';
import { HighlightSmallItemInputModel } from '../models/highlight-small-item-input.model';
import { output } from "@angular/core";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subscription, filter, interval } from 'rxjs';
import { HighlightMainCaptionMode } from '../models/caption-models/highlight-main-caption.model';
import { toObservable } from '@angular/core/rxjs-interop';

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
  wishlistIds = input.required<string[]>();

  clickWishlistButtonEvent = output<string>();
  clickItemEvent = output<string>();

  public highlightPreviewData: HighlightPreviewItemInputModel[] = [];
  public highlightSmallData: HighlightSmallItemInputModel[] = [];
  public currentIndex = 0;
  private _intervalSubscription: Subscription | undefined;
  private readonly _CYCLE_INTERVAL = 5000;
  private _isLoading$ = toObservable(this.isLoading);
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
   * used isLoading which became observable typed because RxJS didn't detect any changes in our signal input!
   * and because our loading takes some time and then we'll have our content, we must wait until loading is done
   * 
   * and put our interval in a subscription typed variable to unsubscribe it when we wanna update the index
   */
  private _cycleItems(): void {
    this._isLoading$.pipe(
      takeUntilDestroyed(this._destroyRef),
      filter((isLoading: boolean) => !isLoading) // should be false to apply the interval
    ).subscribe(() => {
      this._intervalSubscription = interval(this._CYCLE_INTERVAL).subscribe(() => {
        this.currentIndex = (this.currentIndex + 1) % this.data().length;
      })
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
   * note that it's a method for better readability in handler methods!
   * @param index 
   */
  private _updateGlobalIndex(index: number): void {
    this.currentIndex = index;
  }

  private _emitClickEvent(id: string): void {
    this.clickItemEvent.emit(id);
  }

  private _resetInterval(): void {
    if (!this._intervalSubscription) return;

    this._intervalSubscription.unsubscribe();
    this._cycleItems();
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
