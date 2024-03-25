import { Component, EventEmitter, Output, input } from '@angular/core';
import { FreeGameListInputModel } from '../models/free-game-list-input.model';
import { FreeGameItemCaptionModel } from '../models/caption-models/free-game-item-caption.model';
import { FreeGameListCaptionModel } from '../models/caption-models/free-game-list-caption.model';

@Component({
  selector: 'app-free-game-list',
  templateUrl: './free-game-list.component.html',
  styleUrl: './free-game-list.component.scss'
})
export class FreeGameListComponent {
  //#region Properties
  data = input.required<FreeGameListInputModel>();
  isLoading = input.required<boolean>();
  caption = input.required<FreeGameListCaptionModel>();
  gameItemCaption = input.required<FreeGameItemCaptionModel>();

  @Output('itemClicked') clickEvent = new EventEmitter<string>();
  @Output('viewMoreClicked') viewMoreClickEvent = new EventEmitter();
  //#endregion

  //#region Handler methods
  public onClickEventHandler(gameId: string): void {
    this.clickEvent.emit(gameId);
  }

  public onViewMoreClickEventHandler(): void {
    this.viewMoreClickEvent.emit();
  }
  //#endregion
}
