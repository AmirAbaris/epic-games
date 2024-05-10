import { HighlightButtonEnum } from "../enums/highlight-button.enum";

export interface HighlightMainInputModel {
    id: string;
    name: string;
    minimalCover: string;
    largeCover: string;
    logo: string
    description: string;
    price?: number;
    highlightButtonType: HighlightButtonEnum;
}
