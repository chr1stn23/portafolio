import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import { PROFILE, STATS } from '../../core/data/portfolio.data';
import { prefersReducedMotion } from '../../core/utils/motion';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { Icon } from '../../shared/ui/icon/icon';
import { SocialLinks } from '../../shared/ui/social-links/social-links';
import { StatCounter } from '../../shared/ui/stat-counter/stat-counter';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective, Icon, SocialLinks, StatCounter],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  private readonly destroyRef = inject(DestroyRef);

  protected readonly profile = PROFILE;
  protected readonly heroStats = STATS.slice(0, 2);
  protected readonly typedRole = signal('');

  private roleIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private timer?: ReturnType<typeof setTimeout>;

  constructor() {
    this.destroyRef.onDestroy(() => clearTimeout(this.timer));

    afterNextRender(() => {
      if (prefersReducedMotion()) {
        this.typedRole.set(this.profile.heroRoles[0] ?? '');
        return;
      }

      this.typeNext();
    });
  }

  private typeNext(): void {
    const roles = this.profile.heroRoles;
    const role = roles[this.roleIndex];

    if (!role) {
      return;
    }

    if (this.deleting) {
      this.charIndex = Math.max(0, this.charIndex - 1);
      this.typedRole.set(role.slice(0, this.charIndex));

      if (this.charIndex === 0) {
        this.deleting = false;
        this.roleIndex = (this.roleIndex + 1) % roles.length;
        this.timer = setTimeout(() => this.typeNext(), 320);
      } else {
        this.timer = setTimeout(() => this.typeNext(), 38);
      }
      return;
    }

    this.charIndex = Math.min(role.length, this.charIndex + 1);
    this.typedRole.set(role.slice(0, this.charIndex));

    if (this.charIndex === role.length) {
      this.deleting = true;
      this.timer = setTimeout(() => this.typeNext(), 1900);
    } else {
      this.timer = setTimeout(() => this.typeNext(), 68);
    }
  }
}
