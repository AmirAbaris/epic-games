export interface GameCardModel {
    id: string;
    name: string;
    type: string;
    cover: string;
    discountPercent?: number;
    basePrice?: number;
    finalPrice?: number;
    isFree: boolean;
    isOnSale: boolean;
}