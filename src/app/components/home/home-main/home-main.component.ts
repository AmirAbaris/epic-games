import { Component, OnInit, inject } from '@angular/core';
import { GameModel } from '../models/game.model';
import { MockGameService } from '../../../services/mock-game.service';
import { interval, startWith } from 'rxjs';
import { HomeCaptionModel } from '../models/caption-models/home-captions.model';
import { TranslateService } from '@ngx-translate/core';
import { GameCardModel } from '../models/game-card.model';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.scss'
})
export class HomeMainComponent implements OnInit {
  //#region inject functions
  private mockGameService = inject(MockGameService);
  private translateService = inject(TranslateService);
  //#endregion

  //#region properties
  public games: GameModel[] | undefined;
  public gameCards: GameCardModel[] | undefined;
  public currentGameIndex: number = 0;
  public homeCaptions: HomeCaptionModel = {
    largeHighlightGameCaption: {
      buyButton: '',
      AddToWishlistButton: ''
    }
  };

  private readonly captionPaths = {
    'largeHighlightGame': 'home.LargeHighlightGame'
  }
  //#endregion

  //#region lifecycle methods
  ngOnInit(): void {
    this.getGames();
    this.getGameCards();
    this.getCaptions();
  }
  //#endregion

  //#region main logic methods
  public getGames(): void {
    this.mockGameService.getGames().subscribe({
      next: (games) => {
        this.games = games;

        this.startSwitchingGameCovers();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  public getGameCards(): void {
    this.mockGameService.getGameCards().subscribe({
      next: (games) => {
        this.gameCards = games;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  private getCaptions(): void {
    this.translateService.get(this.captionPaths.largeHighlightGame).subscribe({
      next: (caption) => {
        this.homeCaptions.largeHighlightGameCaption = caption;

        console.log(caption.buyButton);
      }
    });
  }

  private startSwitchingGameCovers(): void {
    interval(7000).pipe(startWith(0)).subscribe(() => {
      if (this.games) {
        this.currentGameIndex = (this.currentGameIndex + 1) % this.games.length;
      }
    });
  }
  //#endregion
}
