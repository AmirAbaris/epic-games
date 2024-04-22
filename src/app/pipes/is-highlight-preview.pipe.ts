import { Pipe, PipeTransform } from '@angular/core';
import { HighlightPreviewItemInputModel } from '../components/home/models/highlight-preview-item-input.model';

@Pipe({
  name: 'isHighlightPreview'
})
export class IsHighlightPreviewPipe implements PipeTransform {
  transform(item: unknown): item is HighlightPreviewItemInputModel {
    return (item as HighlightPreviewItemInputModel).cover !== undefined;
  }
}
