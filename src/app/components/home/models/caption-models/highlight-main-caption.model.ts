import { HighlightButtonTypeEnumCaptionModel } from "./highlight-button-type-enum-caption.model";
import { WishlistCaptionModel } from "./wishlist-caption.model";

export interface HighlightMainCaptionModel {
    wishlistButtonCaption: WishlistCaptionModel;
    highlightButtonTypeCaption: HighlightButtonTypeEnumCaptionModel;
}