import {Component, input} from '@angular/core';
import {GameListItemDto} from '../dtos/game-list-item-dto';
import {GameItemCaptionModel} from "../models/caption-models/game-item-caption.model";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss'
})
export class GameListComponent {
  //#region properties
  gameInput = input.required<GameListItemDto>();
  captionInput = input.required<GameItemCaptionModel>();
  //#endregion
}
