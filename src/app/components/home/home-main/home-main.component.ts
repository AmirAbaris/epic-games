import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { GameModel } from '../models/game.model';
import { MockGameService } from '../../../services/mock-game.service';
import { interval, startWith } from 'rxjs';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.scss'
})
export class HomeMainComponent implements OnInit {
  //#region inject functions
  private mockGameService = inject(MockGameService);
  //#endregion

  //#region properties
  public games: GameModel[] | undefined;
  public currentGameIndex: number = 0;
  //#endregion

  //#region lifecycle methods
  ngOnInit(): void {
    this.getGames();
  }
  //#endregion

  //#region main logic methods
  public getGames(): void {
    this.mockGameService.getGames().subscribe({
      next: (games) => {
        this.games = games;

        this._startSwitchingGameCovers();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  private _startSwitchingGameCovers(): void {
    interval(1000).pipe(startWith(0)).subscribe(() => {
      if (this.games) {
        this.currentGameIndex = (this.currentGameIndex + 1) % this.games.length;
      }
    });
  }
  //#endregion
}
