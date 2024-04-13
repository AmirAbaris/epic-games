import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-color-tone',
  templateUrl: './image-color-tone.component.html',
  styleUrl: './image-color-tone.component.scss'
})
export class ImageColorToneComponent implements AfterViewInit {
  //#region Properties
  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement> | undefined;
  public isImageColorToneLight: boolean | undefined;
  //#endregion

  //#region Lifecycle methods
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loadImageAndAnalyzeColor('../../assets/game-covers/highlight-preview-item-cover/egg.jpg');
    }, 100);
  }
  //#endregion

  //#region Main logic methods
  public async loadImageAndAnalyzeColor(url: string): Promise<void> {
    const image = await this._loadImage(url);
    if (!this.canvas) {
      console.error('Canvas element is not available.');
      return;
    }
    const canvas = this.canvas.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Canvas context is not available.');
      return;
    }
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const colorTone = this._analyzeImageData(imageData.data);
    this.isImageColorToneLight = colorTone === 'light';
    console.log('Overall color tone:', colorTone);
  }

  private _loadImage(url: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = url;
    });
  }

  private _analyzeImageData(imageData: Uint8ClampedArray): string {
    // Analyze the pixel data to determine the overall color tone
    // You can implement your own algorithm here
    // For simplicity, let's just return 'light', 'medium', or 'dark' based on average brightness
    const brightness = this._calculateAverageBrightness(imageData);
    if (brightness < 100) {
      return 'dark';
    } else if (brightness < 200) {
      return 'medium';
    } else {
      return 'light';
    }
  }

  private _calculateAverageBrightness(imageData: Uint8ClampedArray): number {
    // Calculate the average brightness of the image
    let sum = 0;
    for (let i = 0; i < imageData.length; i += 4) {
      // Assuming imageData is in RGBA format, and we're only interested in the R, G, and B channels
      sum += (imageData[i] + imageData[i + 1] + imageData[i + 2]) / 3;
    }
    return sum / (imageData.length / 4);
  }
  //#endregion
}
