import { Component, input } from '@angular/core';

@Component({
  selector: 'app-home-image',
  templateUrl: './home-image.component.html',
  styleUrl: './home-image.component.scss'
})
export class HomeImageComponent {
  //#region properties
  imageUrlInput = input.required<string>();
  //#endregion
}
