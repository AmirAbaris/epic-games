import { FreeCardCaptionsModel } from "./free-card-captions.model";
import { LargeHighlightGameCaptionModel } from "./large-highlight-game-caption.model";

export interface HomeMainCaptionModel {
    largeHighlightGameCaption: LargeHighlightGameCaptionModel;
    freeCardCaptions: FreeCardCaptionsModel;
}