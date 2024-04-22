import { HighlightButtonEnum } from "../enums/highlight-button.enum";
import { HighlightPreviewItemInputModel } from "../models/highlight-preview-item-input.model";
import { HighlightSmallItemInputModel } from "../models/highlight-small-item-input.model";

export type HighlightMainInputType = Array<HighlightPreviewItemInputModel | HighlightSmallItemInputModel>;

export interface HighlightMainInputModel {
    id: string;
    cover: string;
    logo: string
    description: string
    price?: number;
    highlightButtonType: HighlightButtonEnum;
    smallCover: string;
    name: string;
}
