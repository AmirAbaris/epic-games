import { Injectable } from '@angular/core';
import { GameModel } from '../components/home/models/game.model';
import { Observable, of } from 'rxjs';
import { GameCardModel } from '../components/home/models/game-card.model';

@Injectable()
export class MockGameService {
  //#region constructor
  constructor() {
    this.games = [
      { id: '1', logo: 'Game 1 Logo', mainCover: '../assets/game-covers/egs-banishers-ghosts-of-new-eden-carousel-desktop-v2-1920x1080-0c6045d584ca.jpg', thumbnailCover: '../assets/game-covers/egs-banishers-ghosts-of-new-eden-carousel-thumb-1200x1600-3385133d6cd1.jpg', name: 'Game 1', bio: 'Game 1 bio' },
      { id: '2', logo: 'Game 2 Logo', mainCover: '../assets/game-covers/egs-homeworld-3-demo-launch-carousel-desktop-v2-1920x1080-90a09688b19a.jpg', thumbnailCover: '../assets/game-covers/egs-homeworld-3-demo-launch-carousel-thumb-1200x1600-2cc5dff938bb.jpg', name: 'Game 2', bio: 'Game 2 bio' },
      { id: '3', logo: 'Game 3 Logo', mainCover: '../assets/game-covers/egs-honkai-star-rail-version-2-0-carousel-desktop-2560x1440-d3b790cf05dd.jpg', thumbnailCover: '../assets/game-covers/egs-outriders-complete-edition-carousel-thumb-1200x1600-9ca95962e046.jpg', name: 'Game 3', bio: 'Game 3 bio' },
      { id: '4', logo: 'Game 4 Logo', mainCover: '../assets/game-covers/egs-outriders-complete-edition-carousel-desktop-1920x1080-e598b9d81542.jpg', thumbnailCover: '../assets/game-covers/egs-skull-and-bones-premium-edition-carousel-thumb-1200x1600-1d17da4c3b5d.jpg', name: 'Game 4', bio: 'Game 4 bio' },
      { id: '5', logo: 'Game 5 Logo', mainCover: '../assets/game-covers/egs-skull-and-bones-premium-edition-carousel-desktop-1248x702-55c5f85430bf.jpg', thumbnailCover: '../assets/game-covers/en-honkai-star-rail-version-2-0-carousel-thumb-1200x1600-442b2b27643b.jpg', name: 'Game 5', bio: 'Game 5 bio' }
    ];

    this.gameCards = [
      {
        id: '11',
        type: 'action',
        name: 'Red Dead Redemption 2',
        discountPercent: 20,
        basePrice: 60,
        finalPrice: 48,
        isFree: false,
        cover: '../assets/game-covers/outbreak-epidemic-viral-terror-qpcx5.jpg' // Example cover image filename
      },
      {
        id: '12',
        type: 'adventure',
        name: 'The Last of Us Part II',
        discountPercent: 15,
        basePrice: 50,
        finalPrice: 42.50,
        isFree: false,
        cover: '../assets/game-covers/outbreak-epidemic-viral-terror-qpcx5.jpg' // Example cover image filename
      },
      {
        id: '13',
        type: 'action',
        name: 'Red Dead Redemption 2',
        discountPercent: 20,
        basePrice: 60,
        finalPrice: 48,
        isFree: false,
        cover: '../assets/game-covers/outbreak-epidemic-viral-terror-qpcx5.jpg' // Example cover image filename
      },
      {
        id: '14',
        type: 'action',
        name: 'Red Dead Redemption 2',
        discountPercent: 20,
        basePrice: 60,
        finalPrice: 48,
        isFree: false,
        cover: '../assets/game-covers/outbreak-epidemic-viral-terror-qpcx5.jpg' // Example cover image filename
      },
      {
        id: '15',
        type: 'action',
        name: 'Red Dead Redemption 2',
        discountPercent: 20,
        basePrice: 60,
        finalPrice: 48,
        isFree: false,
        cover: '../assets/game-covers/outbreak-epidemic-viral-terror-qpcx5.jpg' // Example cover image filename
      },
      {
        id: '16',
        type: 'action',
        name: 'Red Dead Redemption 2',
        discountPercent: 20,
        basePrice: 60,
        finalPrice: 48,
        isFree: false,
        cover: '../assets/game-covers/outbreak-epidemic-viral-terror-qpcx5.jpg' // Example cover image filename
      },
      {
        id: '17',
        type: 'action',
        name: 'Red Dead Redemption 2',
        discountPercent: 20,
        basePrice: 60,
        finalPrice: 48,
        isFree: false,
        cover: '../assets/game-covers/outbreak-epidemic-viral-terror-qpcx5.jpg' // Example cover image filename
      }
    ];
  }
  //#endregion

  //#region properties
  private games: GameModel[] | undefined;
  private gameCards: GameCardModel[] | undefined;
  //#endregion

  //#region handler methods
  public getGames(): Observable<GameModel[]> {
    return of(this.games || []);
  }

  public getGameCards(): Observable<GameCardModel[]> {
    return of(this.gameCards || []);
  }
  //#endregion
}
