import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EXPERIENCE, SECTIONS } from '../../core/data/portfolio.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { Icon } from '../../shared/ui/icon/icon';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';

@Component({
  selector: 'app-experience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective, Icon, SectionHeading],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  protected readonly experience = EXPERIENCE;
  protected readonly section = SECTIONS.experience;
}
