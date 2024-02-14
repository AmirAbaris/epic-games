import { Component, OnInit, input } from '@angular/core';
import { GameModel } from '../models/game.model';
import { SmallHighlightGameModel } from '../models/small-highlight-game.model';

@Component({
  selector: 'app-small-highlight-game',
  templateUrl: './small-highlight-game.component.html',
  styleUrl: './small-highlight-game.component.scss'
})
export class SmallHighlightGameComponent {
  //#region properties
  gameInputs = input.required<SmallHighlightGameModel[]>();
  //#endregion
}
