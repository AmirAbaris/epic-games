import { HighlightButtonTypeEnumCaptionModel } from "./highlight-button-type-enum-caption.model";
import { WishListButtonCaptionModel } from "./wishlist-button-caption.model";

export interface HighlightMainCaptionModel {
    wishlistButtonCaption: WishListButtonCaptionModel;
    highlightButtonTypeCaption: HighlightButtonTypeEnumCaptionModel;
}