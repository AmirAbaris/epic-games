import { Component, EventEmitter, Output, input } from '@angular/core';
import { HighlightPreviewItemInputModel } from '../models/highlight-preview-item-input.model';
import { HighlightButtonEnum } from '../enums/highlight-button.enum';
import { HighlightButtonTypeEnumCaptionModel } from '../models/caption-models/highlight-button-type-caption.model';
import { HighlightPreviewItemCaptionModel } from '../models/caption-models/highlight-preview-item-caption.model';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-highlight-preview-item',
  templateUrl: './highlight-preview-item.component.html',
  styleUrl: './highlight-preview-item.component.scss',
  animations: [
    trigger('spin-icon', [
      state('add-rotation', style({
        transform: 'rotate(-360deg)',
      })),
      state('remove-rotation', style({
        transform: 'rotate(360deg)',
      })),
      transition('* => add-rotation', [animate('1000ms')]),
      transition('* => remove-rotation', [animate('1000ms')]),
    ])
  ]
})
export class HighlightPreviewItemComponent {
  //#region Properties
  data = input.required<HighlightPreviewItemInputModel>();
  isLoading = input.required<boolean>();
  caption = input.required<HighlightPreviewItemCaptionModel>();
  highlightButtonTypeCaptionData = input.required<HighlightButtonTypeEnumCaptionModel>();
  public buttonTypeEnum: typeof HighlightButtonEnum = HighlightButtonEnum;

  @Output() clickWishlistButtonEvent = new EventEmitter<string>();
  @Output() clickItemEvent = new EventEmitter<void>();
  //#endregion

  //#region Handler methods
  public onClickItemEvent(): void {
    this.clickItemEvent.emit();
  }
  //#endregion
}
