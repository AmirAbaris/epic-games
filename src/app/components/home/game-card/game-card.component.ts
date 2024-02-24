import { AfterViewInit, Component, ElementRef, ViewChild, input } from '@angular/core';
import { GameCardModel } from '../models/game-card.model';
import { GameCardDto } from '../dots/game-card-dto';
import { SwiperOptions } from 'swiper/types';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss'
})
export class GameCardComponent {
  //#region properties
  gameCardInputs = input.required<GameCardDto>();
  //#endregion
}
