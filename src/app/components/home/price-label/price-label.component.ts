import {Component, input, OnInit} from '@angular/core';
import {PriceLabelModel} from '../models/price-label.model';
import {SizeEnum} from "../enums/size.enum";

@Component({
  selector: 'app-price-label',
  templateUrl: './price-label.component.html',
  styleUrl: './price-label.component.scss'
})
export class PriceLabelComponent implements OnInit{
  //region Properties
  priceLabelInput = input.required<PriceLabelModel>();
  sizeInput = input.required<SizeEnum>();
  //endregion

  //region Lifecycle methods
ngOnInit() {
  this.getSizeClass();
}
  //endregion

  //region Main logic methods
  public getSizeClass(): string {
    // return size for tailwind based on SizeEnum
    switch (this.sizeInput()) {
      case SizeEnum.Small:
        return 'text-sm';

      case SizeEnum.Medium:
        return  'text-md';

      case SizeEnum.Big:
        return 'text-lg';

      default:
        return 'text-md';
    }
  }
  //endregion
}
