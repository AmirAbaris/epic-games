import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { GameModel } from '../models/game.model';
import { interval, startWith } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { GameService } from '../../../services/game.service';
import { HomeMainCaptionModel } from '../models/caption-models/home-main-captions.model';
import { LargeHighlightGameModel } from '../models/large-highlight-game.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SmallHighlightGameModel } from '../models/small-highlight-game.model';
import { HighlightGamesModel } from '../models/highlight-games-model';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.scss'
})
export class HomeMainComponent implements OnInit {
  //#region inject functions
  private gameService = inject(GameService);
  private translateService = inject(TranslateService);
  private destroyRef = inject(DestroyRef);
  //#endregion

  //#region properties
  public games: GameModel[] | undefined;
  public highlightGamesModel: HighlightGamesModel = {
    largeHighlightGames: [],
    smallHighlightGames: []
  }
  public currentGameIndex: number = 0;
  public homeCaptions: HomeMainCaptionModel = {
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
    this.getCaptions();
  }
  //#endregion

  //#region main logic methods
  public getGames(): void {
    this.gameService.getGames().subscribe({
      next: (games) => {
        this.games = games;

        this.startSwitchingGames();

        this.convertGameModelToLargeHighlightGameMode();
        this.convertGameModelSmallHighlightGameMode();
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

  private startSwitchingGames(): void {
    interval(7000).pipe(startWith(0)).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      if (this.games) {
        this.currentGameIndex = (this.currentGameIndex + 1) % this.games.length;
      }
    });
  }
  //#endregion

  //#region helper methods
  private convertGameModelToLargeHighlightGameMode(): void {
    if (this.games) {
      this.games.forEach((game) => {
        // check if the required properties are not undefined
        if (game.mainCover && game.logo && game.name && game.bio && game.mainMobileCover) {
          const largeHighlightGame: LargeHighlightGameModel = {
            cover: game.mainCover,
            mobileCover: game.mainMobileCover,
            logo: game.logo,
            name: game.name,
            bio: game.bio
          }

          if (this.highlightGamesModel?.largeHighlightGames) {
            this.highlightGamesModel.largeHighlightGames.push(largeHighlightGame);
          }
        }
      });
    }
  }

  private convertGameModelSmallHighlightGameMode(): void {
    if (this.games) {
      this.games.forEach((game) => {
        // check if the required properties are not undefined
        if (game.thumbnailCover && game.name) {
          const smallHighlightGame: SmallHighlightGameModel = {
            name: game.name,
            thumbnailCover: game.thumbnailCover
          }

          if (this.highlightGamesModel?.smallHighlightGames) {
            this.highlightGamesModel.smallHighlightGames.push(smallHighlightGame);
          }
        }
      });
    }
  }
  //#endregion
}
