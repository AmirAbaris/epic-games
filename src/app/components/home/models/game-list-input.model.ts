import {GameCategoryEnum} from "../enums/category-types.enum";
import {CategoryItemDataModel} from "./category-item-data.model";

export interface GameListInputModel {
  categoryItemData: CategoryItemDataModel[];
  title: string;
  categoryType: GameCategoryEnum;
}
