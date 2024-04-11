import { HomeCardInputModel } from "./home-card-input.model";
import { PriceLabelModel } from "./price-label.model";

export interface HomeCardGameInputModel {
    discountPercent?: number;
    basePrice?: number;
    finalPrice?: number;
    cardData: HomeCardInputModel;
}