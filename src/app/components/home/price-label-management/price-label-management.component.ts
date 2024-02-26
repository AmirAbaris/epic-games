import { Component, input } from '@angular/core';
import { PriceLabelModel } from '../models/price-label.model';

@Component({
  selector: 'app-price-label-management',
  templateUrl: './price-label-management.component.html',
  styleUrl: './price-label-management.component.scss'
})
export class PriceLabelManagementComponent {
  //#region properties
  priceLabelInput = input.required<PriceLabelModel>();
  //#endregion
}
