import { Injectable } from '@angular/core';
import { GameModel } from '../components/home/models/game.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockGameService {
  //#region constructor
  constructor() {
    this.games = [
      { id: '1', logo: 'Game 1 Logo', mainCover: '../assets/game-covers/egs-banishers-ghosts-of-new-eden-carousel-desktop-v2-1920x1080-0c6045d584ca.jpg', thumbnailCover: '', cardCover: '', name: 'Game 1', bio: 'Game 1' },
      { id: '2', logo: 'Game 2 Logo', mainCover: '../assets/game-covers/egs-homeworld-3-demo-launch-carousel-desktop-v2-1920x1080-90a09688b19a.jpg', thumbnailCover: '', cardCover: '', name: 'Game 2', bio: 'Game 2' },
      { id: '3', logo: 'Game 3 Logo', mainCover: '../assets/game-covers/egs-honkai-star-rail-version-2-0-carousel-desktop-2560x1440-d3b790cf05dd.jpg', thumbnailCover: '', cardCover: '', name: 'Game 3', bio: 'Game 3' },
      { id: '4', logo: 'Game 4 Logo', mainCover: '../assets/game-covers/egs-outriders-complete-edition-carousel-desktop-1920x1080-e598b9d81542.jpg', thumbnailCover: '', cardCover: '', name: 'Game 4', bio: 'Game 4' },
      { id: '5', logo: 'Game 5 Logo', mainCover: '../assets/game-covers/egs-skull-and-bones-premium-edition-carousel-desktop-1248x702-55c5f85430bf.jpg', thumbnailCover: '', cardCover: '', name: 'Game 5', bio: 'Game 5' }
    ]
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
