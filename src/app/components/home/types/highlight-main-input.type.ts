import { HighlightPreviewItemInputModel } from "../models/highlight-preview-item-input.model";
import { HighlightSmallItemInputModel } from "../models/highlight-small-item-input.model";

// export type HighlightMainInputType = Array<HighlightPreviewItemInputModel | HighlightSmallItemInputModel>;

export interface HighlightMainInputModel {
    highlightPreviewItem: HighlightPreviewItemInputModel[];
    highlightSmallItem: HighlightSmallItemInputModel[];
}
