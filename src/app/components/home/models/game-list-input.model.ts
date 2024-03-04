import {CategoryItemDataModel} from "./category-item-data.model";
import {CategoryType} from "../enums/category-type.enum";

export interface GameListInputModel {
  categoryItemData: CategoryItemDataModel[];
  title: string[];
  categoryType: CategoryType;
}
