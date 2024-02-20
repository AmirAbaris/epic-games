import { Component, EventEmitter, Output, computed, effect, input } from '@angular/core';
import { SmallHighlightGameModel } from '../models/small-highlight-game.model';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-small-highlight-game',
  templateUrl: './small-highlight-game.component.html',
  styleUrl: './small-highlight-game.component.scss'
})
export class SmallHighlightGameComponent {
  //#region properties
  gameImageInput = input<string>();
  gameNameInput = input<string>();
  currentGameIndexInput = input.required<number>();

  @Output() targetGameIndex = new EventEmitter<number>();
  //#endregion

  //#region handler methods
  public selectGameIndex(index: number): void {
    this.targetGameIndex.emit(index);
  }
  //#endregion
}
