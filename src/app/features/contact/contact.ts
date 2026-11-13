import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTACT_CHANNELS, PROFILE, SECTIONS } from '../../core/data/portfolio.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { Icon } from '../../shared/ui/icon/icon';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';
import { SocialLinks } from '../../shared/ui/social-links/social-links';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, RevealDirective, SectionHeading, SocialLinks],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  protected readonly profile = PROFILE;
  protected readonly channels = CONTACT_CHANNELS;
  protected readonly section = SECTIONS.contact;
}
