import { freeGameCardManagementCaptionModel } from "./free-game-card-management-caption.model";
import { FreeGameCardCaptionModel } from "./free-game-card-caption.model";

export interface FreeCardCaptionsModel {
    freeGameCardManagementCaption: freeGameCardManagementCaptionModel;
    freeGameCardCaption: FreeGameCardCaptionModel;
}