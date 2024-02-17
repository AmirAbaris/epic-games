import { Component, input } from '@angular/core';
import { FortniteCardModel } from '../models/fortnite-card.model';

@Component({
  selector: 'app-fortnite-card',
  templateUrl: './fortnite-card.component.html',
  styleUrl: './fortnite-card.component.scss'
})
export class FortniteCardComponent {
  //#region properties
  gameInput = input.required<FortniteCardModel[]>();
  //#region 
}
