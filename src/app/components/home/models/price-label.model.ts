import { SizeEnum } from "../enums/size.enum";

export interface PriceLabelModel {
    discountPercent?: number;
    basePrice?: number;
    finalPrice?: number;
    size: SizeEnum
}