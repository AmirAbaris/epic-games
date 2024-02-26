import { Component, DestroyRef, EventEmitter, OnInit, Output, inject, input } from '@angular/core';
import { interval } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LargeHighlightGameCaptionModel } from '../models/caption-models/large-highlight-game-caption.model';
import { HighlightGamesDto } from '../dtos/highlight-games-dto';

@Component({
  selector: 'app-highlight-game-card',
  templateUrl: './highlight-game-card.component.html',
  styleUrl: './highlight-game-card.component.scss'
})
export class HighlightGameCardComponent implements OnInit {
  //#region inject functions
  private _destroyRef = inject(DestroyRef);
  //#endregion

  //#region properties
  gameInputs = input.required<HighlightGamesDto>();
  captionInputs = input.required<LargeHighlightGameCaptionModel>();

  @Output('playButton') playButtonEvent = new EventEmitter();
  @Output('addWishlistButton') AddToWishListButtonEvent = new EventEmitter();

  public largeHighlightIndex: number = 0;
  public isActive: boolean = true;
  //#endregion

  //#region lifecycle methods
  ngOnInit(): void {
    this._startSwitchingGames();
  }
  //#endregion

  //#region main logic methods
  private _startSwitchingGames(): void {
    interval(7000).pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
      this.largeHighlightIndex = (this.largeHighlightIndex + 1) % this.gameInputs().largeHighlightGames.length;

      this.isActive = !this.isActive;
    });
  }
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
