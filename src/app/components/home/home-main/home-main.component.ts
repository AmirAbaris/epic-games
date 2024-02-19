import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GameService } from '../../../services/game.service';
import { HomeMainCaptionModel } from '../models/caption-models/home-main-captions.model';
import { HighlightGamesModel } from '../models/highlight-games-model';
import { GameListItemModel } from '../models/game-list-item.model';
import { GameCardModel } from '../models/game-card.model';
import { FreeGameCardModel } from '../models/free-game-card.model';
import { FortniteCardModel } from '../models/fortnite-card.model';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.scss'
})
export class HomeMainComponent implements OnInit {
  //#region inject functions
  private _gameService = inject(GameService);
  private _translateService = inject(TranslateService);
  private _destroyRef = inject(DestroyRef);
  //#endregion

  //#region properties
  // public gameListItem!: GameListItemModel;
  // public freeGameCard!: FreeGameCardModel;
  // public fortniteCard!: FortniteCardModel;
  public highlightGames: HighlightGamesModel | undefined;
  // public gameCard!: GameCardModel;

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
  }

  private readonly captionPaths = {
    'largeHighlightGame': 'home.LargeHighlightGame',
    'freeGameCardManagement': 'home.FreeGameCardManagement',
    'freeGameCard': 'home.FreeGameCard'
  }
  //#endregion

  //#region lifecycle methods
  ngOnInit(): void {
    this._getHighlightGames();
    this._getCaptions();
  }
  //#endregion

  //#region main logic methods
  private _getHighlightGames(): void {
    this._gameService.getHighlightGames().subscribe((highlightGames) => {
      this.highlightGames = highlightGames;
    });
  }

  private _getCaptions(): void {
    this._translateService.get(this.captionPaths.largeHighlightGame).subscribe((caption) => {
      this.homeCaptions.largeHighlightGameCaption = caption;
    });

    // this._translateService.get(this.captionPaths.freeGameCardManagement).subscribe({
    //   next: (caption) => {
    //     this.homeCaptions.freeCardCaptions.freeGameCardManagementCaption = caption;
    //   }
    // });

    // this._translateService.get(this.captionPaths.freeGameCard).subscribe({
    //   next: (caption) => {
    //     this.homeCaptions.freeCardCaptions.freeGameCardCaption = caption;
    //   }
    // });
  }

  // private startSwitchingGames(): void {
  //   interval(7000).pipe(startWith(0)).pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
  //     if (this.highlightGames) {
  //       this.currentGameIndex = (this.currentGameIndex + 1) % this.highlightGames.largeHighlightGames.length;
  //     }
  //   });
  // }
  //#endregion
}
