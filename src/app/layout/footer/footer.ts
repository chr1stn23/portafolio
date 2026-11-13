import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FOOTER_LINKS, PROFILE } from '../../core/data/portfolio.data';
import { Icon } from '../../shared/ui/icon/icon';
import { SocialLinks } from '../../shared/ui/social-links/social-links';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, SocialLinks],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  protected readonly profile = PROFILE;
  protected readonly navigation = FOOTER_LINKS.navigation;
  protected readonly services = FOOTER_LINKS.services;
  protected readonly year = new Date().getFullYear();
}
