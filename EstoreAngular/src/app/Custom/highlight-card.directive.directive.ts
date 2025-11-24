import {
  Directive,
  ElementRef,
  Renderer2,
  Input,
  HostListener,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[appHighlightCardDirective]',
  standalone: true
})
export class HighlightCardDirectiveDirective implements OnInit {

  // status input (optional)
  @Input() dim = false;       // example: dim disabled cards
  @Input() highlight = false; // example: highlight border on start

  private originalShadow = '';
  private originalTransform = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // save original values
    this.originalShadow = this.el.nativeElement.style.boxShadow;
    this.originalTransform = this.el.nativeElement.style.transform;

    // smooth animation
    this.renderer.setStyle(
      this.el.nativeElement,
      'transition',
      'all 0.3s ease'
    );

    // apply highlight border
    if (this.highlight) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'border',
        '2px solid #007bff'
      );
    }

    // apply dim effect
    if (this.dim) {
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '0.6');
      this.renderer.setStyle(this.el.nativeElement, 'pointerEvents', 'none');
    }
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.dim) return;
    this.renderer.setStyle(
      this.el.nativeElement,
      'boxShadow',
      '0 6px 18px rgba(0,0,0,0.2)'
    );
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.03)');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.dim) return;
    this.renderer.setStyle(this.el.nativeElement, 'boxShadow', this.originalShadow);
    this.renderer.setStyle(this.el.nativeElement, 'transform', this.originalTransform);
  }
}
