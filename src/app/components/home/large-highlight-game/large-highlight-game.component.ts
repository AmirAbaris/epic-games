import { Component, input } from '@angular/core';
import { GameModel } from '../models/game.model';

@Component({
  selector: 'app-large-highlight-game',
  templateUrl: './large-highlight-game.component.html',
  styleUrl: './large-highlight-game.component.scss'
})
export class LargeHighlightGameComponent {
  games = input.required<GameModel[]>();
}
