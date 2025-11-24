import {
  Directive,
  ElementRef,
  Renderer2,
  Input,
  HostListener,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[appProductHighlight]',
  standalone: true
})
export class ProductHighlightDirective implements OnInit {
  @Input('appProductHighlight') product: any;

  private isOutOfStock = false;
  private originalBoxShadow = '';
  private originalTransform = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (!this.product) return;
    if (this.product.discount && this.product.discount > 0) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'border',
        '2px solid gold'
      );
    }
    if (this.product.stock === 0) {
      this.isOutOfStock = true;
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '0.5');
      this.renderer.setStyle(this.el.nativeElement, 'pointerEvents', 'none');
    }

    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.3s ease');
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.isOutOfStock) return;
    this.renderer.setStyle(
      this.el.nativeElement,
      'boxShadow',
      '0 6px 18px rgba(0,0,0,0.2)'
    );
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.03)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.isOutOfStock) return;
    this.renderer.setStyle(this.el.nativeElement, 'boxShadow', this.originalBoxShadow);
    this.renderer.setStyle(this.el.nativeElement, 'transform', this.originalTransform);
  }
}
