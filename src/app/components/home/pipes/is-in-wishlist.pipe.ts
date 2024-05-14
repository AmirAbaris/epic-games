import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isInWishlist'
})
export class IsInWishlistPipe implements PipeTransform {

  transform(wishlistIds: string[], id: string): boolean {
    return !!wishlistIds.includes(id);
  }

}
