import { ElementRef, Renderer2 } from '@angular/core';
import { ProductHighlightDirective } from './product-highlight.directive';

describe('ProductHighlightDirective', () => {
  let elementRef: ElementRef;
  let renderer: Renderer2;

  beforeEach(() => {
    elementRef = new ElementRef(document.createElement('div'));
    renderer = jasmine.createSpyObj<Renderer2>('Renderer2', [
      'setStyle'
    ]);
  });

  it('should create an instance', () => {
    const directive = new ProductHighlightDirective(elementRef, renderer);
    expect(directive).toBeTruthy();
  });
});

