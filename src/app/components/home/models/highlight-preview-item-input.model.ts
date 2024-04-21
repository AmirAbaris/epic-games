import { HighlightButtonEnum } from "../enums/highlight-button.enum";

export interface HighlightPreviewItemInputModel {
    id: string;
    cover: string;
    logo: string
    description: string
    price?: number;
    hasWishlist: boolean;
    highlightButtonType: HighlightButtonEnum;
}