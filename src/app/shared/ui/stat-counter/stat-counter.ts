import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  inject,
  input,
  signal,
} from '@angular/core';
import { prefersReducedMotion } from '../../../core/utils/motion';

/**
 * Contador animado que se activa al entrar en pantalla.
 * Uso: `<app-stat-counter [value]="30" suffix="+" />`
 */
@Component({
  selector: 'app-stat-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<span class="stat-counter__value">{{ formatted() }}</span
    ><span class="stat-counter__suffix">{{ suffix() }}</span>`,
  styles: `
    :host {
      display: inline-flex;
      align-items: baseline;
      font-family: var(--font-display);
      font-weight: 700;
      line-height: 1;
      color: var(--text);
      font-variant-numeric: tabular-nums;
    }

    :host .stat-counter__value {
      font-size: inherit;
    }

    :host .stat-counter__suffix {
      color: var(--primary);
    }
  `,
})
export class StatCounter implements OnInit, OnDestroy {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;
  private frame?: number;

  readonly value = input.required<number>();
  readonly suffix = input('');
  readonly duration = input(1600);

  protected readonly display = signal(0);

  ngOnInit(): void {
    const element = this.host.nativeElement;

    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      this.display.set(this.value());
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          this.animate();
          this.observer?.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.frame) {
      cancelAnimationFrame(this.frame);
    }
  }

  protected formatted(): string {
    return new Intl.NumberFormat('es-ES').format(this.display());
  }

  private animate(): void {
    const start = performance.now();
    const target = this.value();
    const duration = Math.max(this.duration(), 200);

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      this.display.set(Math.round(target * eased));

      if (progress < 1) {
        this.frame = requestAnimationFrame(step);
      }
    };

    this.frame = requestAnimationFrame(step);
  }
}
