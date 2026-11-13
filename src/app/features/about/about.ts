import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE, SECTIONS, SKILLS, STATS } from '../../core/data/portfolio.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { Icon } from '../../shared/ui/icon/icon';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';
import { StatCounter } from '../../shared/ui/stat-counter/stat-counter';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective, Icon, SectionHeading, StatCounter],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly profile = PROFILE;
  protected readonly stats = STATS;
  protected readonly skills = SKILLS;
  protected readonly section = SECTIONS.about;
}
