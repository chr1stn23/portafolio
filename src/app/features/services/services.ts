import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SECTIONS, SERVICES } from '../../core/data/portfolio.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { Icon } from '../../shared/ui/icon/icon';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';

@Component({
  selector: 'app-services',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective, Icon, SectionHeading],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  protected readonly services = SERVICES;
  protected readonly section = SECTIONS.services;
}
