import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CERTIFICATIONS, EDUCATION, LANGUAGES, SECTIONS } from '../../core/data/portfolio.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { Icon } from '../../shared/ui/icon/icon';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';

@Component({
  selector: 'app-education',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective, Icon, SectionHeading],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  protected readonly education = EDUCATION;
  protected readonly certifications = CERTIFICATIONS;
  protected readonly languages = LANGUAGES;
  protected readonly section = SECTIONS.education;
}
