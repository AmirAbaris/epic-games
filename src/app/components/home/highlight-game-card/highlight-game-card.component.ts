import { Component, EventEmitter, Output, input } from '@angular/core';
import { HomeMainCaptionModel } from '../models/caption-models/home-main-captions.model';
import { HighlightGamesModel } from '../models/highlight-games-model';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-highlight-game-card',
  templateUrl: './highlight-game-card.component.html',
  styleUrl: './highlight-game-card.component.scss',
  animations: [
    trigger('cardAnimation', [
      state('inactive', style({
        background: 'transparent'
      })),
      state('active', style({
        background: 'linear-gradient(to right, darkGray 0%, darkGray 50%, transparent 50%, transparent 100%)',
        backgroundSize: '200% 100%'
      })),
      transition('inactive => active', [
        animate('1s')
      ]),
      transition('active => inactive', [
        animate('0.5s', keyframes([
          style({ backgroundPosition: '0% 0%', offset: 0 }), // Start with background on the left
          style({ backgroundPosition: '100% 0%', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class HighlightGameCardComponent {
  //#region properties
  gameInputs = input.required<HighlightGamesModel>();
  captionInputs = input.required<HomeMainCaptionModel>();

  @Output('playButton') playButtonEvent = new EventEmitter();
  @Output('addWishlistButton') AddToWishListButtonEvent = new EventEmitter();
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
