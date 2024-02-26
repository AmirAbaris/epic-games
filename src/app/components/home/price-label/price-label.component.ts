import { Component, input } from '@angular/core';
import { PriceLabelModel } from '../models/price-label.model';

@Component({
  selector: 'app-price-label',
  templateUrl: './price-label.component.html',
  styleUrl: './price-label.component.scss'
})
export class PriceLabelComponent {
  //#region properties
  priceLabelInput = input.required<PriceLabelModel>();
  //#endregion
}
