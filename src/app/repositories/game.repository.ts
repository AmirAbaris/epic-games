import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { GameDto } from '../dtos/game.dto';

@Injectable()
export class GameRepository {
  //#region Properties
  private _http = inject(HttpClient);

  private _url = environment.apiUrl;
  //#endregion

  //#region Main logic methods
  public getHighlightItems(): Observable<GameDto[]> {
    return this._http.get<GameDto[]>(`${this._url}/highlight-data`).pipe(delay(1000));
  }

  public getSliderItems(): Observable<GameDto[]> {
    return this._http.get<GameDto[]>(`${this._url}/slider-data`).pipe(delay(1000));
  }

  public geHomeActionItems(): Observable<GameDto[]> {
    return this._http.get<GameDto[]>(`${this._url}/home-action-data`).pipe(delay(1000));
  }

  public getFreeItems(): Observable<GameDto[]> {
    return this._http.get<GameDto[]>(`${this._url}/free-item-data`).pipe(delay(1000));
  }

  public getFortniteItems(): Observable<GameDto[]> {
    return this._http.get<GameDto[]>(`${this._url}/fortnite-data`).pipe(delay(1000));
  }

  public getNewReleaseItems(): Observable<GameDto[]> {
    return this._http.get<GameDto[]>(`${this._url}/new-release-data`).pipe(delay(1000));
  }

  public getTopPlayerItems(): Observable<GameDto[]> {
    return this._http.get<GameDto[]>(`${this._url}/top-player-data`).pipe(delay(1000));
  }

  public getComingSoonItems(): Observable<GameDto[]> {
    return this._http.get<GameDto[]>(`${this._url}/coming-soon-data`).pipe(delay(1000));
  }

  public getTrendingItems(): Observable<GameDto[]> {
    return this._http.get<GameDto[]>(`${this._url}/trending-items-data`).pipe(delay(1000));
  }

  public getMostPopularItems(): Observable<GameDto[]> {
    return this._http.get<GameDto[]>(`${this._url}/most-popular-items-data`).pipe(delay(1000));
  }

  public getRecentlyUploadedItems(): Observable<GameDto[]> {
    return this._http.get<GameDto[]>(`${this._url}/recently-uploaded-items-data`).pipe(delay(1000));
  }
  //#endregion
}
