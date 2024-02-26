export interface GameCardDto {
    id: string;
    name: string;
    type: string;
    cover: string;
    discountPercent?: number;
    basePrice?: number;
    finalPrice?: number;
    isFree: boolean;
}