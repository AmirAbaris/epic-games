import {CategoryItemInputModel} from "./category-item-input.model";
import {CategoryType} from "../enums/category-type.enum";

export interface CategoryManagementInputModel {
  categoryItem: CategoryItemInputModel[];
  title: string;
  categoryType: CategoryType;
}
