import { HomeCardActionInputModel } from "./home-card-action-input.model";
import { HomeCardGameInputModel } from "./home-card-game-input.model";

export interface CardListInputModel {
    homeCardActionData: HomeCardActionInputModel[];
    homeCardGameData: HomeCardGameInputModel[];
}