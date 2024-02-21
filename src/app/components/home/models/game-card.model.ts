export interface GameCardModel {
    name: string;
    type: string;
    discountPercent?: number;
    basePrice?: number;
    finalPrice?: number;
    isFree: boolean;
    cover: string;
}