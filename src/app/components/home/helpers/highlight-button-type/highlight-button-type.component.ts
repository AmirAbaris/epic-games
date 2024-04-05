import { Component, EventEmitter, Output, input } from '@angular/core';
import { HighlightButtonEnum } from '../../enums/highlight-button.enum';
import { HighlightButtonTypeEnumCaptionModel } from '../../models/caption-models/highlight-button-type-caption.model';

@Component({
  selector: 'app-highlight-button-type',
  templateUrl: './highlight-button-type.component.html',
  styleUrl: './highlight-button-type.component.scss'
})
export class HighlightButtonTypeComponent {
  //#region Properties
  buttonTypeEnumInput = input.required<HighlightButtonEnum>();
  caption = input.required<HighlightButtonTypeEnumCaptionModel>();
  public buttonTypeEnum: typeof HighlightButtonEnum = HighlightButtonEnum;

  @Output() clickItemButtonEvent = new EventEmitter<void>();
  //#endregion

  //#region Handler methods
  public onClickItemButtonEventHandler(): void {
    this.clickItemButtonEvent.emit();
    console.log('clicked');
  }
  //#endregion
}
