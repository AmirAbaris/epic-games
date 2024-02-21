import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GameService } from '../../../services/game.service';
import { HighlightGamesModel } from '../models/highlight-games-model';
import { GameListItemModel } from '../models/game-list-item.model';
import { GameCardModel } from '../models/game-card.model';
import { FreeGameCardModel } from '../models/free-game-card.model';
import { FortniteCardModel } from '../models/fortnite-card.model';
import { FreeCardCaptionsModel } from '../models/caption-models/free-card-captions.model';
import { LargeHighlightGameCaptionModel } from '../models/caption-models/large-highlight-game-caption.model';
import { HighlightGamesDto } from '../dtos/highlight-games-dto-model';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.scss'
})
export class HomeMainComponent implements OnInit {
  //#region inject functions
  private _gameService = inject(GameService);
  private _translateService = inject(TranslateService);
  //#endregion

  //#region properties
  // public gameListItem!: GameListItemModel;
  // public freeGameCard!: FreeGameCardModel;
  // public fortniteCard!: FortniteCardModel;
  // public gameCard!: GameCardModel;
  public highlightGames: HighlightGamesModel | undefined;
  public highlightGamesDto: HighlightGamesDto | undefined;

  public largeHighlightGameCaption: LargeHighlightGameCaptionModel | undefined;
  public freeCardCaptions: FreeCardCaptionsModel | undefined;

  private readonly _captionPaths = {
    'largeHighlightGame': 'home.LargeHighlightGame',
    'freeGameCardManagement': 'home.FreeGameCardManagement',
    'freeGameCard': 'home.FreeGameCard'
  }
  //#endregion

  //#region lifecycle methods
  ngOnInit(): void {
    this._getGames();
    this._getCaptions();
  }
  //#endregion

  //#region main logic methods
  private _getGames(): void {
    this._gameService.getHighlightGamesDto().subscribe((highlightGamesDto: HighlightGamesDto) => {
      this.highlightGamesDto = highlightGamesDto;

      this._convertHighlightGamesDtoToHighlightGamesModel(this.highlightGamesDto);
    });
  }

  private _getCaptions(): void {
    this._translateService.get(this._captionPaths.largeHighlightGame).subscribe((caption) => {
      this.largeHighlightGameCaption = caption;
    });
  }
  //#endregion

  //#region helper methods
  private _convertHighlightGamesDtoToHighlightGamesModel(highlightGamesDto: HighlightGamesDto): void {
    const highlightGamesModel: HighlightGamesModel = {
      smallHighlightGames: highlightGamesDto.smallHighlightGames,
      largeHighlightGames: highlightGamesDto.largeHighlightGames
    }

    this.highlightGames = highlightGamesModel;
  }
  //#endregion
}
