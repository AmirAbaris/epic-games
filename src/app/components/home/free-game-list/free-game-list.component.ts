import { Component, input } from '@angular/core';
import { FreeGameListInputModel } from '../models/free-game-list-input.model';
import { FreeGameItemCaptionModel } from '../models/caption-models/free-game-item-caption.model';
import { FreeGameListCaptionModel } from '../models/caption-models/free-game-list-caption.model';
import { output } from "@angular/core";
import { CategoryEnum } from '../enums/category.enum';

@Component({
  selector: 'app-free-game-list',
  templateUrl: './free-game-list.component.html',
  styleUrl: './free-game-list.component.scss'
})
export class FreeGameListComponent {
  //#region Properties
  data = input.required<FreeGameListInputModel>();
  caption = input.required<FreeGameListCaptionModel>();
  gameItemCaption = input.required<FreeGameItemCaptionModel>();

  clickEvent = output<string>();
  viewMoreClickEvent = output<CategoryEnum>();
  //#endregion

  //#region Handler methods
  public onClickEventHandler(gameId: string): void {
    this.clickEvent.emit(gameId);
  }

  /**
   * emits the enum of CategoryEnum to route if needed in home main
   */
  public onClickViewMoreEventHandler(): void {
    this.viewMoreClickEvent.emit(CategoryEnum.MORE_FREE_ITEMS);
  }
  //#endregion
}
