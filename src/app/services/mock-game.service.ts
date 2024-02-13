import { Injectable } from '@angular/core';
import { GameModel } from '../components/home/models/game.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class MockGameService {
  //#region constructor
  constructor() {
    this.games = [
      {
        id: '11',
        logo: 'Game 1 Logo',
        mainCover: '../assets/game-covers/egs-banishers-ghosts-of-new-eden-carousel-desktop-v2-1920x1080-0c6045d584ca.jpg',
        thumbnailCover: '../assets/game-covers/egs-banishers-ghosts-of-new-eden-carousel-thumb-1200x1600-3385133d6cd1.jpg',
        cardCover: '../assets/game-covers/outbreak-epidemic-viral-terror-qpcx5.jpg',
        type: 'action',
        name: 'Game 1',
        bio: 'Game 1 bio',
        discountPercent: 20,
        basePrice: 60,
        finalPrice: 48,
        isFree: false,
        fromFreeDate: new Date(),
        toFreeDate: new Date(),
        isPublished: true
      },
      {
        id: '12',
        logo: 'Game x Logo',
        mainCover: '../assets/game-covers/egs-banishers-ghosts-of-new-eden-carousel-desktop-v2-1920x1080-0c6045d584ca.jpg',
        thumbnailCover: '../assets/game-covers/egs-banishers-ghosts-of-new-eden-carousel-thumb-1200x1600-3385133d6cd1.jpg',
        cardCover: '../assets/game-covers/outbreak-epidemic-viral-terror-qpcx5.jpg',
        type: 'action',
        name: 'Game x',
        bio: 'Game x bio',
        discountPercent: 20,
        basePrice: 60,
        finalPrice: 48,
        isFree: true,
        fromFreeDate: new Date(),
        toFreeDate: new Date(),
        isPublished: true
      },
      {
        id: '12',
        logo: 'Game 2 Logo',
        mainCover: '../assets/game-covers/egs-homeworld-3-demo-launch-carousel-desktop-v2-1920x1080-90a09688b19a.jpg',
        thumbnailCover: '../assets/game-covers/egs-homeworld-3-demo-launch-carousel-thumb-1200x1600-2cc5dff938bb.jpg',
        cardCover: '../assets/game-covers/outbreak-epidemic-viral-terror-qpcx5.jpg',
        type: 'adventure',
        name: 'Game 2',
        bio: 'Game 2 bio',
        discountPercent: 15,
        basePrice: 50,
        finalPrice: 42.50,
        isFree: false,
        fromFreeDate: new Date(),
        toFreeDate: new Date(),
        isPublished: true
      },
      {
        id: '13',
        logo: 'Game 3 Logo',
        mainCover: '../assets/game-covers/egs-honkai-star-rail-version-2-0-carousel-desktop-2560x1440-d3b790cf05dd.jpg',
        thumbnailCover: '../assets/game-covers/egs-outriders-complete-edition-carousel-thumb-1200x1600-9ca95962e046.jpg',
        cardCover: '../assets/game-covers/outbreak-epidemic-viral-terror-qpcx5.jpg',
        type: 'puzzle',
        name: 'Game 3',
        bio: 'Game 3 bio',
        discountPercent: 10,
        basePrice: 45,
        finalPrice: 40.50,
        isFree: false,
        fromFreeDate: new Date(),
        toFreeDate: new Date(),
        isPublished: true
      }
    ];
  }
  //#endregion

  //#region properties
  private games: GameModel[] | undefined;
  //#endregion

  //#region handler methods
  public getGames(): Observable<GameModel[]> {
    return of(this.games || []);
  }
  //#endregion
}
