import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateLine'
})
export class TruncateLinePipe implements PipeTransform {

  transform(text: string | undefined): string | undefined {
    if (!text) return;

    if (text.length > 210) {
      return text.slice(0, 200) + '...';
    }

    return text;
  }
}
