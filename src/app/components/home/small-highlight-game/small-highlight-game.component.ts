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
        background: 'linear-gradient(to right, darkGray 0%, darkGray 50%, transparent 50%, transparent 100%)',
        backgroundSize: '200% 100%',
        animation: 'progress 7s linear infinite'
      })),
      transition('inactive => active', [
        animate('1s')
      ]),
      transition('active => inactive', [
        animate('0.5s')
      ])
    ]),
    trigger('progress', [
      animate('7s', keyframes([
        style({ backgroundPosition: '0% 0%', offset: 0 }),
        style({ backgroundPosition: '25% 0%', offset: 0.25 }),
        style({ backgroundPosition: '50% 0%', offset: 0.5 }),
        style({ backgroundPosition: '75% 0%', offset: 0.75 }),
        style({ backgroundPosition: '100% 0%', offset: 1 })
      ]))
    ])
  ]
})
export class SmallHighlightGameComponent {
  //#region properties
  gameInputs = input.required<SmallHighlightGameModel[]>();
  currentGameIndexInput = input.required<number>();
  //#endregion
}
