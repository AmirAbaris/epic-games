import { Component, input } from '@angular/core';
import { FortniteCardDto } from '../dots/fortnite-card-dto';
import { FortniteCardManagementCaptionModel } from '../models/caption-models/fortnite-management-caption.model';

@Component({
  selector: 'app-fortnite-card-management',
  templateUrl: './fortnite-card-management.component.html',
  styleUrl: './fortnite-card-management.component.scss'
})
export class FortniteCardManagementComponent {
  //#region properties
  gameInput = input.required<FortniteCardDto[]>();
  captionInput = input.required<FortniteCardManagementCaptionModel>();
  //#region 
}
