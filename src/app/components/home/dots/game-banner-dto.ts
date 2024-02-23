export interface GameBannerDto {
    cover: string;
    name?: string;
    bio: string;
    isFree?: boolean;
    price?: number;
    isAGame: boolean;
    playable?: boolean;
}