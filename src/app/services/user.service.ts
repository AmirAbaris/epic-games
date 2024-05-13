import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable()
export class UserService {
  //#region Main logic methods
  public addIdToWishlistIds(wishlistIds: string[], id: string): Observable<string[]> {
    return of([...wishlistIds, id]).pipe(delay(2000));
  }

  public removeIdFromWishlistIds(wishlistIds: string[], id: string): Observable<string[]> {
    return of(wishlistIds.filter((arrayId) => arrayId !== id)).pipe(delay(2000));
  }
  //#endregion
}
