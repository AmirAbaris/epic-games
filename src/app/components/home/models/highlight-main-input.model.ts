import { HighlightPreviewItemInputModel } from "./highlight-preview-item-input.model";
import { HighlightSmallItemInputModel } from "./highlight-small-item-input.model";

export interface HighlightMainInputModel {
    highlightPreviewInputData: HighlightPreviewItemInputModel[];
    highlightSmallInputData: HighlightSmallItemInputModel[];
}

// TODO fix interface
export type HighlightMainInputType = Array<HighlightPreviewItemInputModel & HighlightSmallItemInputModel>;