import { Component, input } from '@angular/core';
import { FreeGameItemInputModel } from "../models/free-game-item-input.model";
import { FreeGameItemCaptionModel } from "../models/caption-models/free-game-item-caption.model";
import { output } from "@angular/core";

@Component({
  selector: 'app-free-game-item',
  templateUrl: './free-game-item.component.html',
  styleUrl: './free-game-item.component.scss'
})
export class FreeGameItemComponent {
  //region Properties
  data = input.required<FreeGameItemInputModel>();
  caption = input.required<FreeGameItemCaptionModel>();

  clickEvent = output<string>();

  //endregion

  //region Handler methods
  public onClickEventHandler(gameId: string): void {
    this.clickEvent.emit(gameId);
  }

  //endregion
}
