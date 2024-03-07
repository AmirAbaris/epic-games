import {CategoryItemModel} from './category-item.model';
import {CategoryType} from '../enums/category-type.enum';

export interface CategoryListInputModel {
  categoryItem: CategoryItemModel[];
  title: string;
  categoryType: CategoryType;
}
