import { Component, input } from '@angular/core';

@Component({
  selector: 'app-highlight-main-skeleton',
  templateUrl: './highlight-main-skeleton.component.html',
  styleUrl: './highlight-main-skeleton.component.scss'
})
export class HighlightMainSkeletonComponent {
  //#region Properties

  // because of different count for each usage in home main; we will get the count each time
  itemCount = input.required<number>();
  //#endregion
}
