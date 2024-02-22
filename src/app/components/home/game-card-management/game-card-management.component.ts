import { Component, input } from '@angular/core';
import { GameCardDto } from '../dots/game-card-dto';
import Swiper from 'swiper';

@Component({
  selector: 'app-game-card-management',
  templateUrl: './game-card-management.component.html',
  styleUrl: './game-card-management.component.scss'
})
export class GameCardManagementComponent {
  //#region properties
  gameCardInputs = input.required<GameCardDto[]>();

  public swiper = new Swiper('.swiper', {
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  //#endregion
}
