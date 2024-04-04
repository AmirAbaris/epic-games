import { Component, input } from '@angular/core';
import { HighlightSmallItemInputModel } from '../models/highlight-small-item-input.model';

@Component({
  selector: 'app-highlight-small-item',
  templateUrl: './highlight-small-item.component.html',
  styleUrl: './highlight-small-item.component.scss'
})
export class HighlightSmallItemComponent {
  //#region Properties
  data = input.required<HighlightSmallItemInputModel>();
  isLoading = input.required<boolean>();
  //#endregion
}
