import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-list-skeleton',
  templateUrl: './card-list-skeleton.component.html',
  styleUrl: './card-list-skeleton.component.scss'
})
export class CardListSkeletonComponent {
  //#region Properties

  // because of different count for each usage in home main; we will get the count each time
  itemCount = input.required<number>();
  //#endregion
}
