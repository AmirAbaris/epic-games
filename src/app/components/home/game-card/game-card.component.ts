import { AfterViewInit, Component, input } from '@angular/core';
import { GameCardModel } from '../models/game-card.model';
import Swiper from 'swiper';
import { GameModel } from '../models/game.model';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss'
})
export class GameCardComponent implements AfterViewInit {
  //#region properties
  gameCardInputs = input.required<GameModel[]>();
  //#endregion

  //#region lifecycle methods
  ngAfterViewInit(): void {
    new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
  //#endregion
}
