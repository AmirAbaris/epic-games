import { ElementRef, Injectable, inject } from '@angular/core';
import { GameRepository } from '../repositories/game.repository';
import { Observable, distinctUntilChanged, map, mergeMap } from 'rxjs';
import { GameDto } from '../components/home/dtos/game.dto';

@Injectable()
export class GameService {
  //#region Properties
  private _gameRepository = inject(GameRepository);
  //#endregion

  //#region Main logic methods
  public getHighlightItems(): Observable<GameDto[]> {
    return this._gameRepository.getHighlightItems();
  }

  public getSliderItems(): Observable<GameDto[]> {
    return this._gameRepository.getSliderItems();
  }

  public getHomeActionItems(): Observable<GameDto[]> {
    return this._gameRepository.geHomeActionItems();
  }

  public getFreeItems(): Observable<GameDto[]> {
    return this._gameRepository.getFreeItems();
  }

  public getFortniteItems(): Observable<GameDto[]> {
    return this._gameRepository.getFortniteItems();
  }

  public getNewReleaseItems(): Observable<GameDto[]> {
    return this._gameRepository.getNewReleaseItems();
  }

  public getTopPlayerItems(): Observable<GameDto[]> {
    return this._gameRepository.getTopPlayerItems();
  }

  public getComingSoonItems(): Observable<GameDto[]> {
    return this._gameRepository.getComingSoonItems();
  }

  public getTrendingItems(): Observable<GameDto[]> {
    return this._gameRepository.getTrendingItems();
  }

  public getMostPopularItems(): Observable<GameDto[]> {
    return this._gameRepository.getMostPopularItems();
  }

  public getRecentlyUploadedItems(): Observable<GameDto[]> {
    return this._gameRepository.getRecentlyUploadedItems();
  }
  //#endregion
}
