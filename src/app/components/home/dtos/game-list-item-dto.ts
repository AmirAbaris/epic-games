export interface GameListItemDto {
  id: string;
  thumbnailCover: string;
  name: string;
  discountPercent: number;
  basePrice: number;
  finalPrice: number;
  isFree: boolean;
  publishDate?: Date;
  isPublished: boolean;
}
