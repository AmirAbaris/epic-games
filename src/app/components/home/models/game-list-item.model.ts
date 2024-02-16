export interface GameListItemModel {
    id?: string;
    cardCover?: string;
    name: string;
    discountPercent?: number;
    basePrice?: number;
    finalPrice?: number;
    isFree?: boolean;
    isFortnite: boolean;
    categoryType?: string;
}