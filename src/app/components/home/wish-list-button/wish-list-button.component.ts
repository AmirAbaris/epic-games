import { Component, EventEmitter, Output, inject } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { output } from "@angular/core";

@Component({
  selector: 'app-wish-list-button',
  templateUrl: './wish-list-button.component.html',
  styleUrl: './wish-list-button.component.scss'
})
export class WishListButtonComponent {
  //#region Properties
  private _translateService = inject(TranslateService);

  //#endregion
    clickButtonEvent = output<void>();

  public tooltipMessage: string = this._translateService.instant('home.WishListButton.addTitle');
  //#endregion

  //#region Handler methods
  public onClickButtonEventHandler(event: MouseEvent): void {
    // to just call this method if there was another click event for the parent
    // it will not let both methods to be called when clicked on the wishlist button, just calls this one!
    event.stopPropagation();

    this.clickButtonEvent.emit();
  }
  //#endregion
;
}