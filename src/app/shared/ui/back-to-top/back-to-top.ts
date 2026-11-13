import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import { Icon } from '../icon/icon';

/** Botón flotante para volver arriba, visible tras hacer scroll. */
@Component({
  selector: 'app-back-to-top',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  template: `
    <button
      type="button"
      class="back-to-top"
      [class.back-to-top--visible]="visible()"
      aria-label="Volver arriba"
      title="Volver arriba"
      (click)="scrollToTop()"
    >
      <app-icon name="chevron-up" [size]="20" />
    </button>
  `,
  styles: `
    .back-to-top {
      position: fixed;
      right: 1.25rem;
      bottom: 1.25rem;
      z-index: 60;
      display: grid;
      place-items: center;
      width: 2.9rem;
      height: 2.9rem;
      border-radius: 50%;
      border: 1px solid var(--border-strong);
      background: var(--surface-strong);
      color: var(--text);
      backdrop-filter: blur(14px);
      cursor: pointer;
      opacity: 0;
      pointer-events: none;
      transform: translateY(12px);
      transition:
        opacity 0.25s ease,
        transform 0.25s ease,
        background 0.2s ease;
    }

    .back-to-top:hover {
      background: var(--primary);
      color: #06080f;
    }

    .back-to-top--visible {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
    }

    @media (max-width: 640px) {
      .back-to-top {
        right: 0.9rem;
        bottom: 0.9rem;
      }
    }
  `,
})
export class BackToTop {
  private readonly destroyRef = inject(DestroyRef);
  protected readonly visible = signal(false);

  constructor() {
    afterNextRender(() => {
      const onScroll = () => this.visible.set(window.scrollY > 600);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
      this.destroyRef.onDestroy(() => window.removeEventListener('scroll', onScroll));
    });
  }

  protected scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
