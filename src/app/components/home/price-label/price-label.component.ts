import {Component, input, OnInit} from '@angular/core';
import {PriceLabelModel} from '../models/price-label.model';
import {SizeEnum} from "../enums/size.enum";

@Component({
  selector: 'app-price-label',
  templateUrl: './price-label.component.html',
  styleUrl: './price-label.component.scss'
})
export class PriceLabelComponent implements OnInit {
  //region Properties
  priceLabelInput = input.required<PriceLabelModel>();
  sizeInput = input.required<SizeEnum>();

  public textSize: string | undefined;
  //endregion

  //region Lifecycle methods
  ngOnInit(): void {
    this._setTextSize();
  }

  //endregion

  //region Main logic methods
  private _setTextSize(): void {
    // return size for tailwind based on SizeEnum
    switch (this.sizeInput()) {
      case SizeEnum.SMALL:
        this.textSize = 'text-sm';
        return;

      case SizeEnum.MEDIUM:
        this.textSize = 'text-md';
        return;

      case SizeEnum.BIG:
        this.textSize = 'text-lg';
        return;

      default:
        this.textSize = 'text-md';
    }
  }

  //endregion
}
