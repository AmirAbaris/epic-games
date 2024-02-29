import {Component, EventEmitter, input, OnInit, Output} from '@angular/core';
import {GameListItemDto} from '../dtos/game-list-item-dto';
import {interval, take} from "rxjs";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-game-item-list',
  templateUrl: './game-item-list.component.html',
  styleUrl: './game-item-list.component.scss',
  animations: [
    trigger('fadeInOut', [
      state('loading', style({
        opacity: 1
      })),
      state('loaded', style({
        opacity: 0
      })),
      transition('loading => loaded', [
        animate('0.3s')
      ]),
      transition('loaded => loading', [
        animate('0.3s')
      ])
    ])
  ]
})
export class GameItemListComponent implements OnInit {
  //#region properties
  gameInput = input.required<GameListItemDto>();

  @Output() clickWishlistButtonEvent = new EventEmitter<string>();
  @Output() clickItemEvent = new EventEmitter<string>();

  public showWishlist: boolean = false;

  // mocked loading
  public isLoading: boolean = true;
  //#endregion

  //region Lifecycle methods
  ngOnInit() {
    // mock loading until main logic refactor
    interval(5000).pipe(take(1)).subscribe(() => {
      this.isLoading = !this.isLoading;
    })
  }

  //endregion

  //region Handler methods
  onClickWishlistButton(gameId: string) {
    this.clickWishlistButtonEvent.emit(gameId);

    console.log(gameId);
  }

  onClickItem(gameId: string) {
    this.clickItemEvent.emit(gameId);

    console.log(gameId);
  }

  //endregion
}
