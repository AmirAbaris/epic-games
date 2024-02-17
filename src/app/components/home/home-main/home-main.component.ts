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
import { GameListItemModel } from '../models/game-list-item.model';
import { GameCardModel } from '../models/game-card.model';
import { FreeGameCardModel } from '../models/free-game-card.model';

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
  public games: GameModel[] = [];
  public gameListItem: GameListItemModel[] = [];
  public freeGameCard: FreeGameCardModel[] = [];
  public highlightGamesModel: HighlightGamesModel = {
    largeHighlightGames: [],
    smallHighlightGames: []
  }
  public gameCard: GameCardModel[] = [];
  public currentGameIndex: number = 0;
  public homeCaptions: HomeMainCaptionModel = {
    largeHighlightGameCaption: {
      buyButton: '',
      AddToWishlistButton: ''
    },
    freeCardCaptions: {
      freeGameCardManagementCaption: {
        freeGamesTitle: '',
        viewMoreTitle: ''
      },
      freeGameCardCaption: {
        freeNowTitle: '',
        comingSoonTitle: ''
      }
    }
  };

  private readonly captionPaths = {
    'largeHighlightGame': 'home.LargeHighlightGame',
    'freeGameCardManagement': 'home.FreeGameCardManagement',
    'freeGameCard': 'home.FreeGameCard'
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

        this.callModelConvertors();
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
      }
    });

    this.translateService.get(this.captionPaths.freeGameCardManagement).subscribe({
      next: (caption) => {
        this.homeCaptions.freeCardCaptions.freeGameCardManagementCaption = caption;
      }
    });

    this.translateService.get(this.captionPaths.freeGameCard).subscribe({
      next: (caption) => {
        this.homeCaptions.freeCardCaptions.freeGameCardCaption = caption;
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

  private convertGameModelTFreeGameCardModel(): void {
    if (this.games) {
      this.games.forEach((game) => {
        const games: FreeGameCardModel = {
          name: game.name,
          type: game.type,
          isFree: game.isFree,
          cover: game.cardCover,
          isFortnite: game.isFortnite,
          isPublished: game.isPublished
        }

        if (this.freeGameCard) {
          this.freeGameCard.push(games);
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

  private convertGameModelToGameListItemModel(): void {
    if (this.games) {
      this.games.forEach((game) => {
        // check if the required properties are not undefined
        const gameItem: GameListItemModel = {
          thumbnailCover: game.thumbnailCover,
          name: game.name,
          discountPercent: game.discountPercent,
          basePrice: game.basePrice,
          finalPrice: game.finalPrice,
          isFree: game.isFree,
          isFortnite: game.isFortnite,
          categoryType: game.categoryType
        }

        if (this.gameListItem) {
          this.gameListItem.push(gameItem);
        }
      });
    }
  }
  private convertGameModelToGameCardModel(): void {
    if (this.games) {
      this.games.forEach((game) => {
        const games: GameCardModel = {
          name: game.name,
          type: game.type,
          discountPercent: game.discountPercent,
          basePrice: game.basePrice,
          finalPrice: game.finalPrice,
          isFree: game.isFree,
          cover: game.cardCover,
          isFortnite: game.isFortnite
        }

        if (this.gameCard) {
          this.gameCard.push(games);
        }
      });
    }
  }

  private callModelConvertors(): void {
    this.convertGameModelToLargeHighlightGameMode();
    this.convertGameModelSmallHighlightGameMode();
    this.convertGameModelToGameCardModel();
    this.convertGameModelTFreeGameCardModel();
    this.convertGameModelToGameListItemModel();
  }
  //#endregion
}
