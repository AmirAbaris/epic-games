import {GameSliderType} from "../enums/game-slider-type.enum";

export interface GameSliderItemInputModel {
  id: string;
  cover: string;
  name: string;
  discountPercent?: number;
  basePrice?: number;
  finalPrice?: number;
  isFree: boolean;
  type: GameSliderType;
}
