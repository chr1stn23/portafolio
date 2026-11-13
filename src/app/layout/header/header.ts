import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import { NAV_LINKS, PROFILE } from '../../core/data/portfolio.data';
import { ThemeService } from '../../core/services/theme.service';
import { Icon } from '../../shared/ui/icon/icon';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private readonly destroyRef = inject(DestroyRef);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  protected readonly theme = inject(ThemeService);

  protected readonly profile = PROFILE;
  protected readonly navLinks = NAV_LINKS;

  protected readonly menuOpen = signal(false);
  protected readonly activeFragment = signal(NAV_LINKS[0]?.fragment ?? 'inicio');
  protected readonly scrolled = signal(false);
  protected readonly progress = signal(0);

  constructor() {
    afterNextRender(() => {
      const onScroll = () => this.updateOnScroll();
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll);
      this.destroyRef.onDestroy(() => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
      });
    });
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected onEscape(): void {
    this.menuOpen.set(false);
  }

  private updateOnScroll(): void {
    const scrollY = window.scrollY;
    this.scrolled.set(scrollY > 16);

    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    this.progress.set(scrollable > 0 ? Math.min((scrollY / scrollable) * 100, 100) : 0);

    const probe = scrollY + window.innerHeight * 0.32;
    let current = this.navLinks[0]?.fragment ?? 'inicio';

    for (const link of this.navLinks) {
      const section = document.getElementById(link.fragment);
      if (!section) {
        continue;
      }
      if (section.getBoundingClientRect().top + scrollY <= probe) {
        current = link.fragment;
      }
    }

    this.activeFragment.set(current);
  }
}
