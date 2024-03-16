import {Component, EventEmitter, input, Output} from '@angular/core';
import {FreeGameItemInputModel} from "../models/free-game-item-input.model";

@Component({
  selector: 'app-free-game-item',
  templateUrl: './free-game-item.component.html',
  styleUrl: './free-game-item.component.scss'
})
export class FreeGameItemComponent {
  data = input.required<FreeGameItemInputModel>();
  isLoading = input.required<boolean>();

  @Output() clickEvent = new EventEmitter();

  public onClickEventHandler(): void {
    this.clickEvent.emit();
  }
}
