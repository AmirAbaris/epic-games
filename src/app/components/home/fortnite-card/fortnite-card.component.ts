import { Component, input } from '@angular/core';
import { GameModel } from '../models/game.model';

@Component({
  selector: 'app-fortnite-card',
  templateUrl: './fortnite-card.component.html',
  styleUrl: './fortnite-card.component.scss'
})
export class FortniteCardComponent {
  //#region properties
  gameInput = input.required<GameModel[]>();
  //#region 
}
