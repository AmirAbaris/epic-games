import { Component, input } from '@angular/core';
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
        background: 'transparent',
      })),
      transition('inactive => active', [
        animate('1s')
      ]),
      transition('active => inactive', [
        animate('7s', keyframes([
          style({ background: 'red', offset: 0 }),
          style({ background: 'transparent', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class SmallHighlightGameComponent {
  //#region properties
  gameInputs = input.required<SmallHighlightGameModel[]>();
  currentGameIndexInput = input.required<number>();
  //#endregion
}
