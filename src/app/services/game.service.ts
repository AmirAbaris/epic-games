import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HighlightGamesModel } from '../components/home/models/highlight-games-model';

@Injectable()
export class GameService {
  //#region handler methods
  public getHighlightGames(): Observable<HighlightGamesModel> {
    return of(highlightGames);
  }
  //#endregion
}

const highlightGames = {
  largeHighlightGames: [
    {
      cover: 'large_cover1.jpg',
      mobileCover: 'mobile_cover1.jpg',
      logo: 'logo1.jpg',
      name: 'Game 1',
      bio: 'Game 1 description'
    },
    {
      cover: 'large_cover2.jpg',
      mobileCover: 'mobile_cover2.jpg',
      logo: 'logo2.jpg',
      name: 'Game 2',
      bio: 'Game 2 description'
    }
  ],
  smallHighlightGames: [
    {
      thumbnailCover: 'thumbnail_cover1.jpg',
      name: 'Game 1'
    },
    {
      thumbnailCover: 'thumbnail_cover2.jpg',
      name: 'Game 2'
    }
  ]
}
