import { Component, input } from '@angular/core';
import { SmallHighlightGameModel } from '../models/small-highlight-game.model';
import { animate, state, style, transition, trigger } from '@angular/animations';

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
        background: 'red'
      })),
      transition('inactive => active', [
        animate('1s')
      ]),
      transition('active => inactive', [
        animate('0.5s')
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
