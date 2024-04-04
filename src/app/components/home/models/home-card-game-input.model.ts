import { HomeCardInputModel } from "./home-card-input.model";
import { PriceLabelModel } from "./price-label.model";

export interface HomeCardGameInputModel {
    priceData: PriceLabelModel;
    cardData: HomeCardInputModel;
}