import { Component, EventEmitter, Output, inject } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-wish-list-button',
  templateUrl: './wish-list-button.component.html',
  styleUrl: './wish-list-button.component.scss'
})
export class WishListButtonComponent {
  //#region Properties
  private _translateService = inject(TranslateService);

  @Output() clickButtonEvent = new EventEmitter<void>();

  public tooltipMessage: string = this._translateService.instant('home.WishListButton.addTitle');
  //#endregion

  //#region Handler methods
  public onClickButtonEventHandler(): void {
    this.clickButtonEvent.emit();
    console.log(this.tooltipMessage);
  }
  //#endregion
}