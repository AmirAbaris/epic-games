export interface GameListItemModel {
  id: string;
  thumbnailCover: string;
  name: string;
  discountPercent: number;
  basePrice: number;
  finalPrice: number;
  isFree: boolean;
  publishDate?: Date;
  isPublished: boolean;
  isFeatured: boolean;
}
