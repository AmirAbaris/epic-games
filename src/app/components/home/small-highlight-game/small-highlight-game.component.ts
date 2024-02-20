import { Component, EventEmitter, Output, computed, effect, input } from '@angular/core';
import { SmallHighlightGameModel } from '../models/small-highlight-game.model';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-small-highlight-game',
  templateUrl: './small-highlight-game.component.html',
  styleUrl: './small-highlight-game.component.scss',
  animations: [
    trigger('cardAnimation', [
      state('inactive', style({
        background: 'transparent'
      })),
      state('active', style({
        background: 'linear-gradient(to right, darkGray 0%, darkGray 50%, transparent 50%, transparent 100%)',
        backgroundSize: '200% 100%'
      })),
      transition('inactive => active', [
        animate('1s')
      ]),
      transition('active => inactive', [
        animate('0.5s', keyframes([
          style({ backgroundPosition: '0% 0%', offset: 0 }), // Start with background on the left
          style({ backgroundPosition: '100% 0%', offset: 1 })
        ]))
      ])
    ])
  ]
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
