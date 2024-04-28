import { Component, DestroyRef, OnInit, inject, input, model } from '@angular/core';
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
  wishlistListIds = model.required<string[]>();

  clickWishlistButtonEvent = output<string>();
  clickItemEvent = output<string>();

  public highlightPreviewData: HighlightPreviewItemInputModel[] = [];
  public highlightSmallData: HighlightSmallItemInputModel[] = [];
  public currentIndex = 0;
  private readonly _CYCLE_INTERVAL = 5000;
  //#endregion

  //#region Lifecycle methods
  ngOnInit(): void {
    this._setInitData();
    this._cycleItems();
  }
  //#endregion

  //#region Handler methods
  /**
   * checks if the id is in our array, if there is, it will remove the input id value, because if user clicks for second time, it should be removed from array
   * and if input id was not in our array, it will add that value and then emits the data
   * @param id 
   */
  public onClickWishlistButtonEventHandler(id: string): void {
    if (this.wishlistListIds().includes(id)) {
      this._removeIdFromWishlistIds(id);

    } else {
      this._addIdToWishlistIds(id);

      this.clickWishlistButtonEvent.emit(id);
    }
  }

  public onClickItemEventHandler(id: string, index?: number): void {
    this.clickItemEvent.emit(id);

    // index param is nullable because we used this method on another component which does not require index parameter!
    // and if we have the index, it will update its value!
    if (index !== undefined) {
      this._updateGlobalIndexHandler(index);
    }
  }
  //#endregion

  //#region Main logic methods
  /**
   * changes the index value to change index of our array (changed the item every n second)
   */
  private _cycleItems(): void {
    interval(this._CYCLE_INTERVAL).pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
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
   * note that it's a method for better readability in handler methods!
   * @param index 
   */
  private _updateGlobalIndexHandler(index: number): void {
    this.currentIndex = index;
  }

  private _removeIdFromWishlistIds(id: string): void {
    // check if we even have id in our list, if we didn't have the id, it will not continue! (extra layer of protection)
    if (!this.wishlistListIds().includes(id)) return;

    this.wishlistListIds.update((item) => item.filter((arrayId) => arrayId !== id));
  }

  private _addIdToWishlistIds(id: string): void {
    // check if we have id in our array, if we have it, it will stop the method! (extra layer of protection)
    if (this.wishlistListIds().includes(id)) return;

    this.wishlistListIds.update((item) => [...item, id]);
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
