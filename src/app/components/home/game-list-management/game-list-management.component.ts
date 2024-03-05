import {Component, EventEmitter, input, Output} from '@angular/core';
import {GameListItemDto} from "../dtos/game-list-item-dto";
import {CategoryType} from "../enums/category-type.enum";
import {GameListInputModel} from "../models/game-list-input.model";

@Component({
  selector: 'app-game-list-management',
  templateUrl: './game-list-management.component.html',
  styleUrl: './game-list-management.component.scss'
})
export class GameListManagementComponent {
  //region Properties
  gameItemInput = input.required<GameListItemDto[]>();

  @Output() clickGameEvent = new EventEmitter<string>();
  @Output() clickWishlistEvent = new EventEmitter<string>();
  @Output() clickViewMoreButtonEvent = new EventEmitter<CategoryType>();
  
  public childInput: GameListInputModel = {
    categoryItemData: [
      {
        id: '16',
        thumbnailCover: "../assets/game-covers/game-list/l15.jpeg",
        name: "Game 16",
        discountPercent: 0,
        basePrice: 29.99,
        finalPrice: 29.99,
        isFree: false,
        isPublished: false,
      },
      {
        id: '16',
        thumbnailCover: "../assets/game-covers/game-list/l15.jpeg",
        name: "Game 16",
        discountPercent: 0,
        basePrice: 29.99,
        finalPrice: 29.99,
        isFree: false,
        publishDate: new Date(),
        isPublished: false,
      },
      {
        id: '16',
        thumbnailCover: "../assets/game-covers/game-list/l15.jpeg",
        name: "Game 16",
        discountPercent: 0,
        basePrice: 29.99,
        finalPrice: 29.99,
        isFree: false,
        isPublished: false,
      },
      {
        id: '16',
        thumbnailCover: "../assets/game-covers/game-list/l15.jpeg",
        name: "Game 16",
        discountPercent: 0,
        basePrice: 29.99,
        finalPrice: 29.99,
        isFree: false,
        isPublished: false,
      },
      {
        id: '16',
        thumbnailCover: "../assets/game-covers/game-list/l15.jpeg",
        name: "Game 16",
        discountPercent: 0,
        basePrice: 29.99,
        finalPrice: 29.99,
        isFree: false,
        isPublished: false,
      }

    ],
    title: ['Top Sellers', 'Most Played', 'Top Upcoming Wishlisted'],
    categoryType: Object.values(CategoryType)
  }

  //endregion

  //region Handler methods
  public onClickGameEventHandler(gameId: string): void {
    this.clickGameEvent.emit(gameId);
  }

  public onClickWishlistEventHandler(gameId: string): void {
    this.clickWishlistEvent.emit(gameId);
  }

  public onClickViewMoreButtonEventHandler(categoryType: CategoryType): void {
    this.clickViewMoreButtonEvent.emit(categoryType);
  }

  //endregion
}
