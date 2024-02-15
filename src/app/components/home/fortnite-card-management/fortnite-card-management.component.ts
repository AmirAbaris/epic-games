import { Component, input } from '@angular/core';
import { GameModel } from '../models/game.model';

@Component({
  selector: 'app-fortnite-card-management',
  templateUrl: './fortnite-card-management.component.html',
  styleUrl: './fortnite-card-management.component.scss'
})
export class FortniteCardManagementComponent {
  //#region properties
  gameInput = input.required<GameModel[]>();
  //#region 
}
