import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateLine'
})
export class TruncateLinePipe implements PipeTransform {

  transform(text: string, maxTextLength: number): string {
    if (text.length < maxTextLength)
      return text;

    return text.slice(0, maxTextLength) + '...';
  }
}
