import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HighlightGamesModel } from '../components/home/models/highlight-games-model';
import { HighlightGamesDto } from '../components/home/dots/highlight-games-dto';
import { GameCardModel } from '../components/home/models/game-card.model';

@Injectable()
export class GameService {
  //#region handler methods
  public getHighlightGames(): Observable<HighlightGamesModel> {
    return of(highlightGames);
  }

  public getGameCards(): Observable<GameCardModel[]> {
    return of(gameCards);
  }
  //#endregion
}

const highlightGames: HighlightGamesModel = {
  largeHighlightGames: [
    {
      id: '1',
      cover: '../assets/game-covers/desktop-covers/egs-banishers-ghosts-of-new-eden-carousel-desktop-v2-1920x1080-0c6045d584ca (1).jpg',
      mobileCover: '../assets/game-covers/mobile-covers/egs-banishers-ghosts-of-new-eden-carousel-mobile-1200x1600-fd082fee0233 (1).jpg',
      logo: '../assets/game-covers/logo-covers/egs-banishers-ghosts-of-new-eden-carousel-logo-white-1920x1080-9536b5c98218 (1).png',
      name: 'Game 1',
      bio: 'Game 1 description'
    },
    {
      id: '2',
      cover: '../assets/game-covers/desktop-covers/egs-homewrold-3-carousel-desktop-1920x1080-0ba8d22503a4.jpg',
      mobileCover: '../assets/game-covers/mobile-covers/egs-homeworld-3-mobile-1200x1600-1200x1600-42b6431374b4.jpg',
      logo: '../assets/game-covers/logo-covers/egs-homeworld-3-logo-3840x2160-f528e2d9421b.png',
      name: 'Game 2',
      bio: 'Game 2 description'
    },
    {
      id: '3',
      cover: '../assets/game-covers/desktop-covers/egs-honkai-star-rail-version-2-0-carousel-desktop-2560x1440-d3b790cf05dd (1).jpg',
      mobileCover: '../assets/game-covers/mobile-covers/egs-honkai-star-rail-2-0-carousel-mobile-1200x1600-ee37c00c78c8 (1).jpg',
      logo: '../assets/game-covers/logo-covers/egs-honkai-star-rail-1-3-carousel-logo-en-1340x660-a99349a7bcf4 (1).png',
      name: 'Game 3',
      bio: 'Game 3 description'
    },
    {
      id: '4',
      cover: '../assets/game-covers/desktop-covers/egs-prince-of-persia-lost-crown-carousel-desktop-1920x1080-c7ae57efc8ab.jpg',
      mobileCover: '../assets/game-covers/mobile-covers/egs-prince-of-persia-lost-crown-carousel-mobile-1200x1600-5f2c91a478d4 (1).jpg',
      logo: '../assets/game-covers/logo-covers/egs-prince-of-persia-lost-crown-carousel-logo-252x80-c3b63b9442da (1).png',
      name: 'Game 4',
      bio: 'Game 4 description'
    },
    {
      id: '5',
      cover: '../assets/game-covers/desktop-covers/egs-skull-and-bones-carousel-desktop-1248x702-8814fa009b18.jpg',
      mobileCover: '../assets/game-covers/mobile-covers/egs-skull-and-bones-carousel-mobile-1200x1600-f2dd7eca8325.jpg',
      logo: '../assets/game-covers/logo-covers/egs-skull-and-bones-carousel-logo-350x100-3f35fb158981.png',
      name: 'Game 5',
      bio: 'Game 5 description'
    }
  ],
  smallHighlightGames: [
    {
      id: '1',
      thumbnailCover: '../assets/game-covers/thumbnail-covers/egs-banishers-ghosts-of-new-eden-carousel-thumb-1200x1600-3385133d6cd1 (1).jpg',
      name: 'Game 1'
    },
    {
      id: '2',
      thumbnailCover: '../assets/game-covers/thumbnail-covers/egs-homeworld-3-epic-thumb-1200x1600-1200x1600-ac4f7a4b136c.jpg',
      name: 'Game 2'
    },
    {
      id: '3',
      thumbnailCover: '../assets/game-covers/thumbnail-covers/egs-prince-of-persia-lost-crown-carousel-thumb-1200x1600-f1da6429caec.jpg',
      name: 'Game 3'
    },
    {
      id: '4',
      thumbnailCover: '../assets/game-covers/thumbnail-covers/en-honkai-star-rail-version-2-0-carousel-thumb-1200x1600-442b2b27643b (1).jpg',
      name: 'Game 4'
    },
    {
      id: '5',
      thumbnailCover: '../assets/game-covers/thumbnail-covers/egs-skull-and-bones-carousel-thumb-1200x1600-eb9d60ded5a8.jpg',
      name: 'Game 5'
    }
  ],
  isFeatured: false
}

const gameCards: GameCardModel[] = [
  {
    name: 'game 1',
    type: 'RPG',
    cover: '../assets/game-covers/game-card-covers/1.jpeg',
    isFree: true,
    isOnSale: false
  },
  {
    name: 'game 2',
    type: 'FPS',
    cover: '../assets/game-covers/game-card-covers/2.jpeg',
    basePrice: 29.99,
    finalPrice: 14.99,
    isFree: false,
    isOnSale: true
  },
  {
    name: 'game 3',
    type: 'Adventure',
    cover: '../assets/game-covers/game-card-covers/33.jpg',
    basePrice: 39.99,
    finalPrice: 39.99,
    isFree: false,
    isOnSale: false
  },
  {
    name: 'game 4',
    type: 'Simulation',
    cover: '../assets/game-covers/game-card-covers/4.jpeg',
    basePrice: 49.99,
    finalPrice: 49.99,
    isFree: false,
    isOnSale: false
  },
  {
    name: 'game 5',
    type: 'Puzzle',
    cover: '../assets/game-covers/game-card-covers/5.jpeg',
    discountPercent: 25,
    basePrice: 9.99,
    finalPrice: 7.49,
    isFree: false,
    isOnSale: true
  }
]
