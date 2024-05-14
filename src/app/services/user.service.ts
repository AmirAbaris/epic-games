import { Injectable, signal } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable()
export class UserService {
  //#region Properties
  private _wishlistIds = signal<string[]>([]);
  //#endregion

  //#region Main logic methods
  public addIdToWishlistIds(id: string): Observable<string[]> {
    this._wishlistIds.update((ids) => [...ids, id]);

    return of(this._wishlistIds()).pipe(delay(2000));
  }

  public removeIdFromWishlistIds(inputId: string): Observable<string[]> {
    this._wishlistIds.update((ids) => ids.filter((id) => id !== inputId));

    return of(this._wishlistIds()).pipe(delay(2000));
  }

  public getWishlistIds(): Observable<string[]> {
    return of(this._wishlistIds());
  }
  //#endregion
}
