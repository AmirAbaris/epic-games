import {CategoryType} from '../enums/category-type.enum';
import {CategoryItemInputModel} from "./category-item-input.model";

export interface CategoryListInputModel {
  categoryItem: CategoryItemInputModel[];
  title: string;
  categoryType: CategoryType;
}
