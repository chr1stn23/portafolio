import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { SocialLink } from '../../../core/models/portfolio.model';
import { SOCIAL_LINKS } from '../../../core/data/portfolio.data';
import { Icon } from '../icon/icon';

/** Lista de redes sociales reutilizable (hero, contacto y footer). */
@Component({
  selector: 'app-social-links',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  template: `
    <ul class="social-links" [attr.aria-label]="label()">
      @for (link of links(); track link.label) {
        <li>
          <a
            [href]="link.url"
            target="_blank"
            rel="noopener noreferrer"
            [attr.aria-label]="link.label"
            [attr.title]="link.label"
          >
            <app-icon [name]="link.icon" [size]="18" />
          </a>
        </li>
      }
    </ul>
  `,
})
export class SocialLinks {
  readonly links = input<readonly SocialLink[]>(SOCIAL_LINKS);
  readonly label = input('Redes sociales');
}
