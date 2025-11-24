import { ElementRef, Renderer2 } from '@angular/core';
import { HighlightCardDirectiveDirective } from './highlight-card.directive.directive';

describe('HighlightCardDirectiveDirective', () => {
  let elRefMock: ElementRef;
  let rendererMock: Renderer2;

  beforeEach(() => {
    elRefMock = { nativeElement: document.createElement('div') } as ElementRef;

    rendererMock = {
      setStyle: jasmine.createSpy('setStyle')
      // Add other methods if needed
    } as any;
  });

  it('should create an instance', () => {
    const directive = new HighlightCardDirectiveDirective(elRefMock, rendererMock);
    expect(directive).toBeTruthy();
  });
});
