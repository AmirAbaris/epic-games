import { Component, input } from '@angular/core';
import { FortniteCardModel } from '../models/fortnite-card.model';

@Component({
  selector: 'app-fortnite-card-management',
  templateUrl: './fortnite-card-management.component.html',
  styleUrl: './fortnite-card-management.component.scss'
})
export class FortniteCardManagementComponent {
  //#region properties
  gameInput = input.required<FortniteCardModel[]>();
  //#region 
}
