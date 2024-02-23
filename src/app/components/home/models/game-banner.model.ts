export interface GameBannerModel {
    cover: string;
    name?: string;
    bio: string;
    isFree?: boolean;
    price?: number;
    isAGame: boolean;
    playable?: boolean;
    isFeatured: boolean;
}