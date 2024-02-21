import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss'
})
export class ImageComponent {
  //#region properties
  imageUrlInput = input<string>();
  imageWight = input<number>(200);
  imageHight = input<number>(200);
  //#endregion
}
