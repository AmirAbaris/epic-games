export interface GameModel {
    id: string;
    logo?: string;
    mainCover?: string;
    thumbnailCover?: string;
    cardCover?: string;
    name: string;
    type: string;
    bio: string;
    discountPercent: number;
    basePrice: number;
    finalPrice: number;
    isFree: boolean;
}