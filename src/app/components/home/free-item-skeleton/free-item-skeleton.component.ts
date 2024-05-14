import { Component, input } from '@angular/core';

@Component({
  selector: 'app-free-item-skeleton',
  templateUrl: './free-item-skeleton.component.html',
  styleUrl: './free-item-skeleton.component.scss'
})
export class FreeItemSkeletonComponent {
  //#region Properties

  // because of different count for each usage in home main; we will get the count each time
  itemCount = input.required<number>();
  //#endregion
}
