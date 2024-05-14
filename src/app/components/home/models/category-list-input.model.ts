import { CategoryEnum } from '../enums/category.enum';
import { CategoryItemInputModel } from "./category-item-input.model";

export interface CategoryListInputModel {
  categoryItem: CategoryItemInputModel[];
  title: string;
  categoryType: CategoryEnum;
}
