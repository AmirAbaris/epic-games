export interface GameCardDto {
    name: string;
    type: string;
    cover: string;
    discountPercent?: number;
    basePrice?: number;
    finalPrice?: number;
    isFree: boolean;
    isOnSale: boolean
}