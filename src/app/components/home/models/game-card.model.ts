export interface GameCardModel {
    id: string;
    type: string;
    name: string;
    discountPercent: number;
    basePrice: number;
    finalPrice: number;
    isFree: boolean;
    cover: string;
}