import { Component, input } from '@angular/core';
import { LargeHighlightGameModel } from '../models/large-highlight-game.model';

@Component({
  selector: 'app-large-highlight-game-mobile',
  templateUrl: './large-highlight-game-mobile.component.html',
  styleUrl: './large-highlight-game-mobile.component.scss'
})
export class LargeHighlightGameMobileComponent {
  //#region 
  gameInput = input.required<LargeHighlightGameModel>();
  addIconInput = input.required<string>();
  //#endregion
}
