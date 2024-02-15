import { Injectable } from '@angular/core';
import { GameModel } from '../components/home/models/game.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class GameService {
  //#region properties
  public games: GameModel[] | undefined;
  //#endregion

  //#region handler methods
  public getGames(): Observable<GameModel[]> {
    return of(games || []);
  }
  //#endregion
}

const games = [
  {
    id: '11',
    logo: '../assets/game-covers/egs-banishers-ghosts-of-new-eden-carousel-logo-white-1920x1080-9536b5c98218.png',
    mainCover: '../assets/game-covers/egs-banishers-ghosts-of-new-eden-carousel-desktop-v2-1920x1080-0c6045d584ca.jpg',
    mainMobileCover: '../assets/game-covers/egs-banishers-ghosts-of-new-eden-carousel-mobile-1200x1600-fd082fee0233.jpg',
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
    isPublished: true,
    isFortnite: false
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
    isPublished: true,
    isFortnite: false
  },
  {
    id: '12',
    logo: '../assets/game-covers/egs-outriders-complete-edition-carousel-logo-v2-350x84-eb6380d39f5b.png',
    mainCover: '../assets/game-covers/egs-homeworld-3-demo-launch-carousel-desktop-v2-1920x1080-90a09688b19a.jpg',
    mainMobileCover: '../assets/game-covers/egs-banishers-ghosts-of-new-eden-carousel-mobile-1200x1600-fd082fee0233.jpg',
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
    isPublished: true,
    isFortnite: false
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
    isPublished: true,
    isFortnite: false
  },

  // fortnite card data
  {
    name: 'lego fortnite',
    mainCover: '../assets/game-covers/FNJN_01_EGS_Launcher_Blade_2560x1440_2560x1440-9b2da247e66cc11c447d59784923efbd.jpeg',
    type: 'EXPERIENCE',
    isFree: true,
    isFortnite: true
  },
  {
    name: 'fortnite battle royale',
    mainCover: '../assets/game-covers/28BR_C5S1_EGS_Launcher_Blade_2560x1440_2560x1440-e598d8d28d63a6deafe2b14a2e42cd01.jpeg',
    type: 'EXPERIENCE',
    isFree: true,
    isFortnite: true
  },
  {
    name: 'fortnite festival',
    mainCover: '../assets/game-covers/FNSP_01_EGS_Launcher_Blade_2560x1440_2560x1440-966445d9d0e9b389b765a8d3da6badb6.jpeg',
    type: 'EXPERIENCE',
    isFree: true,
    isFortnite: true
  }
];

// TODO: make repo api and filter data init (not convertor) more like filter
// TODO: make a document for time assumption
// TODO fix dates for jura tasks
