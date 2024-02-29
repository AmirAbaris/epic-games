import {Component, input} from '@angular/core';
import {GameListItemDto} from '../dtos/game-list-item-dto';

@Component({
  selector: 'app-game-list-management',
  templateUrl: './game-list-management.component.html',
  styleUrl: './game-list-management.component.scss'
})
export class GameListManagementComponent {
  //#region
  gameInput = input.required<GameListItemDto[]>();
  captionInput = input.required<string>();
  //#endregion
}
