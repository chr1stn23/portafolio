import {
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  inject,
  input,
  numberAttribute,
} from '@angular/core';
import { prefersReducedMotion } from '../../core/utils/motion';

/**
 * Añade una animación de entrada cuando el elemento aparece en pantalla.
 *
 * Uso:
 *   <div appReveal>...</div>
 *   <div appReveal [delay]="150">...</div>
 *
 * Respeta `prefers-reduced-motion`.
 */
@Directive({
  selector: '[appReveal]',
  host: { class: 'reveal' },
})
export class RevealDirective implements OnInit, OnDestroy {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  /** Retraso de la animación en milisegundos. */
  readonly delay = input(0, { transform: numberAttribute });

  ngOnInit(): void {
    const element = this.host.nativeElement;

    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      element.classList.add('reveal--visible');
      return;
    }

    if (this.delay() > 0) {
      element.style.setProperty('--reveal-delay', `${this.delay()}ms`);
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          element.classList.add('reveal--visible');
          this.observer?.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
