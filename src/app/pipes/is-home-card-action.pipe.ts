import { Pipe, PipeTransform } from '@angular/core';
import { HomeCardActionInputModel } from '../components/home/models/home-card-action-input.model';
import { HomeCardGameInputModel } from '../components/home/models/home-card-game-input.model';

@Pipe({
  name: 'isHomeCardAction'
})
export class IsHomeCardActionPipe implements PipeTransform {
  transform(item: HomeCardActionInputModel | HomeCardGameInputModel): item is HomeCardActionInputModel {
    return (item as HomeCardActionInputModel).actionName !== undefined;
  }
}
