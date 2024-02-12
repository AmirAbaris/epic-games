import { Component, EventEmitter, Output, input } from '@angular/core';
import { GameModel } from '../models/game.model';
import { HomeCaptionModel } from '../models/caption-models/home-captions.model';


@Component({
  selector: 'app-large-highlight-game',
  templateUrl: './large-highlight-game.component.html',
  styleUrl: './large-highlight-game.component.scss'
})
export class LargeHighlightGameComponent {
  //#region properties
  gameInputs = input.required<GameModel[]>();
  currentGameIndexInput = input.required<number>();
  captionInput = input.required<HomeCaptionModel | undefined>();

  @Output('playButton') playButtonEvent = new EventEmitter();
  @Output('addWishlist') AddToWishListButtonEvent = new EventEmitter();
  //#endregion
}
