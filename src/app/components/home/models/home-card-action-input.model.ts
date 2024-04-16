import { HomeCardInputModel } from "./home-card-input.model";

export interface HomeCardActionInputModel {
    actionName: string;
    cardData: HomeCardInputModel;
    clickCardFn: () => void;
}