import { Component, OnInit, input } from '@angular/core';
import { GameModel } from '../models/game.model';
import { SmallHighlightGameModel } from '../models/small-highlight-game.model';

@Component({
  selector: 'app-small-highlight-game',
  templateUrl: './small-highlight-game.component.html',
  styleUrl: './small-highlight-game.component.scss'
})
export class SmallHighlightGameComponent implements OnInit {
  //#region properties
  gameInputs = input.required<GameModel[]>();
  games: SmallHighlightGameModel[] = [];
  //#endregion

  //#region lifecycle
  ngOnInit(): void {
    this.convertGameModelToHighlightGameModel(this.gameInputs());
  }
  //#endregion
  //#region helper methods
  private convertGameModelToHighlightGameModel(games: GameModel[]): void {
    games.forEach(game => {
      const smallHighlightGame: SmallHighlightGameModel = {
        thumbnailCover: game.thumbnailCover,
        name: game.name
      }

      this.games.push(smallHighlightGame);
    });
  }
  //#endregion
}
