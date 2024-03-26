export interface HomeCardInputModel {
    id: string; // can't be nullable!
    cover: string;
    description?: string;
    name: string;
    hasWishlist: boolean;
    height: number;
}