import { Component, input } from '@angular/core';
import { CardListInputModel } from '../home/models/card-list-input.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {
  //#region Properties
  data = input.required<CardListInputModel>();
  isLoading = input.required<boolean>();
  //#endregion
}
