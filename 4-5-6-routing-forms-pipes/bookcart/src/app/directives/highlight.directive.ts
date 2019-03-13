import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @Input('highlight') color: string;

  constructor(private el: ElementRef) {
    
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color = this.color || 'yellow';
  }

  @HostListener('mouseleave') onMouseleave() {
    this.el.nativeElement.style.color = null;
  }

}
