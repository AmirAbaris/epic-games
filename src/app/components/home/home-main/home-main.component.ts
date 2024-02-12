import { Component, OnInit, inject } from '@angular/core';
import { GameModel } from '../models/game.model';
import { MockGameService } from '../../../services/mock-game.service';

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
  //#endregion

  //#region lifecycle methods
  ngOnInit(): void {
    this.getGames();
  }
  //#endregion

  //#region logic methods
  public getGames(): void {
    this.mockGameService.getGames().subscribe({
      next: (games) => {
        this.games = games;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  //#endregion
}
