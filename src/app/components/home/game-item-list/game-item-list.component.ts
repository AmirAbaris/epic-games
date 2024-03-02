import {Component, EventEmitter, input, OnInit, Output} from '@angular/core';
import {GameListItemDto} from '../dtos/game-list-item-dto';
import {interval, take} from "rxjs";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {GameItemCaptionModel} from "../models/caption-models/game-item-caption.model";
import {PriceLabelModel} from "../models/price-label.model";
import {SizeEnum} from "../enums/size.enum";

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
  //#region Properties
  gameInput = input.required<GameListItemDto>();
  captionInput = input.required<GameItemCaptionModel>();

  @Output() clickWishlistButtonEvent = new EventEmitter<string>();
  @Output() clickItemEvent = new EventEmitter<string>();

  public isLoading: boolean = true;
  public priceLabelData: PriceLabelModel | undefined;
  protected readonly SizeEnum = SizeEnum;
  //endregion

  //region Lifecycle methods
  ngOnInit(): void {
    // mock loading until main logic refactor
    interval(5000).pipe(take(1)).subscribe(() => {
      this.isLoading = !this.isLoading;

      this.priceLabelData = this._convertGameListItemDtoToPriceLabelModel(this.gameInput());

      console.log(this.priceLabelData);
    });
  }

  //endregion

  //region Handler methods
  public onClickWishlistButtonHandler(gameId: string): void {
    this.clickWishlistButtonEvent.emit(gameId);

    console.log(gameId);
  }

  public onClickItemHandler(gameId: string): void {
    this.clickItemEvent.emit(gameId);
  }

  //region Helper methods
  private _convertGameListItemDtoToPriceLabelModel(gameData: GameListItemDto): PriceLabelModel {
    return {
      discountPercent: gameData.discountPercent,
      basePrice: gameData.basePrice,
      finalPrice: gameData.finalPrice
    }
  }
}
