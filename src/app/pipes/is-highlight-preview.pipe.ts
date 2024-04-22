import { Pipe, PipeTransform } from '@angular/core';
import { HighlightPreviewItemInputModel } from '../components/home/models/highlight-preview-item-input.model';
import { HighlightSmallItemInputModel } from '../components/home/models/highlight-small-item-input.model';

@Pipe({
  name: 'isHighlightPreview'
})
export class IsHighlightPreviewPipe implements PipeTransform {

  transform(item: HighlightPreviewItemInputModel | HighlightSmallItemInputModel): item is HighlightPreviewItemInputModel {
    return (item as HighlightPreviewItemInputModel).cover !== undefined;
  }

}
