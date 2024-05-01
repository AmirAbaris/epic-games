import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { GameDto } from '../components/home/dtos/game.dto';

@Injectable()
export class GameRepository {
  //#region Properties
  private _http = inject(HttpClient);

  private _url = environment.apiUrl;
  //#endregion

  //#region Main logic methods
  public getHighlightItems(): Observable<GameDto[]> {
    return this._http.get<GameDto[]>(`${this._url}/highlight-data`);
  }

  public getSliderItems(): Observable<GameDto[]> {
    return this._http.get<GameDto[]>(`${this._url}/slider-data`);
  }

  public geHomeActionItems(): Observable<GameDto[]> {
    return this._http.get<GameDto[]>(`${this._url}/home-action-data`);
  }

  public getFreeItems(): Observable<GameDto[]> {
    return this._http.get<GameDto[]>(`${this._url}/free-item-data`);
  }

  public getFortniteItems(): Observable<GameDto[]> {
    return this._http.get<GameDto[]>(`${this._url}/fortnite-data`);
  }

  public getNewReleaseItems(): Observable<GameDto[]> {
    return this._http.get<GameDto[]>(`${this._url}/new-release-data`);
  }

  public getTopPlayerItems(): Observable<GameDto[]> {
    return this._http.get<GameDto[]>(`${this._url}/top-player-data`);
  }

  public getComingSoonItems(): Observable<GameDto[]> {
    return this._http.get<GameDto[]>(`${this._url}/coming-soon-data`);
  }

  public getTrendingItems(): Observable<GameDto[]> {
    return this._http.get<GameDto[]>(`${this._url}/trending-items-data`);
  }

  public getMostPopularItems(): Observable<GameDto[]> {
    return this._http.get<GameDto[]>(`${this._url}/most-popular-items-data`);
  }

  public getRecentlyUploadedItems(): Observable<GameDto[]> {
    return this._http.get<GameDto[]>(`${this._url}/recently-uploaded-items-data`);
  }
  //#endregion
}
