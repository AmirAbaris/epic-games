import { GameCategoryEnum } from "../enums/category-types.enum";

export interface GameListItemModel {
    thumbnailCover: string;
    name: string;
    discountPercent?: number;
    basePrice?: number;
    finalPrice?: number;
    isFree: boolean;
    categoryType: string;
    isFeatured: boolean;
}