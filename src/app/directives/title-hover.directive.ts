import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[titleHoverDir]'
})
export class TitleHoverDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('mouseover') onMouseOver(): void {
    this.renderer.addClass(this.el.nativeElement.querySelector('.icon-display'), 'hovered');
  }

  @HostListener('mouseout') onMouseOut(): void {
    this.renderer.removeClass(this.el.nativeElement.querySelector('.icon-display'), 'hovered');
  }
}
