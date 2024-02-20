import { Component, DestroyRef, EventEmitter, Output, inject, input } from '@angular/core';
import { LargeHighlightGameCaptionModel } from '../models/caption-models/large-highlight-game-caption.model';
import { LargeHighlightGameModel } from '../models/large-highlight-game.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval, startWith } from 'rxjs';

@Component({
  selector: 'app-large-highlight-game',
  templateUrl: './large-highlight-game.component.html',
  styleUrl: './large-highlight-game.component.scss'
})
export class LargeHighlightGameComponent {
  //#region inject functions
  private _destroyRef = inject(DestroyRef);
  //#endregion

  //#region properties
  gameInputs = input.required<LargeHighlightGameModel[]>();
  currentGameIndexInput = input.required<number>();
  captionInput = input.required<LargeHighlightGameCaptionModel>();
  addIconInput = input.required<string>();

  @Output('playButton') playButtonEvent = new EventEmitter();
  @Output('addWishlistButton') AddToWishListButtonEvent = new EventEmitter();
  //#endregion

  //#region main logic methods
  // private _startSwitchingGames(): void {
  //   interval(7000).pipe(startWith(0)).pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
  //     this._currentIndex = (this._currentIndex + 1) % this.gameInputs.length;
  //   });
  // }
  //#endregion

  //#region handler methods
  public onPlayButtonEvent(): void {
    this.playButtonEvent.emit();
  }

  public onAddToWishlistButtonEvent(): void {
    this.playButtonEvent.emit();
  }
  //#endregion
}
