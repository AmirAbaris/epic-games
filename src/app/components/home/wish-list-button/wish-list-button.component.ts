import {Component, EventEmitter, inject, Output} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-wish-list-button',
  templateUrl: './wish-list-button.component.html',
  styleUrl: './wish-list-button.component.scss'
})
export class WishListButtonComponent {
  //region Properties
  @Output() clickButtonEvent = new EventEmitter<string>();
  //endregion
  //region Inject functions
  private _translateService = inject(TranslateService);
  public tooltipMessage: string = this._translateService.instant('home.WishListButton.addTitle');
  //endregion

  //region Handler methods
  public onClickButtonEventHandler(): void {
    this.clickButtonEvent.emit();
  }

  //endregion
}
