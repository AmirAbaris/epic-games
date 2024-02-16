export interface GameModel {
    id?: string;
    logo?: string;
    mainCover?: string;
    mainMobileCover?: string;
    thumbnailCover?: string;
    cardCover?: string;
    name: string;
    type: string;
    bio?: string;
    discountPercent?: number;
    basePrice?: number;
    finalPrice?: number;
    isFree?: boolean;
    fromFreeDate?: Date;
    toFreeDate?: Date;
    isPublished?: boolean;
    isFortnite: boolean;
    categoryType?: string;
}

// TODO: create a ne model for each