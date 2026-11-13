import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { PROJECTS, PROJECT_CATEGORIES, SECTIONS } from '../../core/data/portfolio.data';
import type { Project, ProjectCategory } from '../../core/models/portfolio.model';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { Icon } from '../../shared/ui/icon/icon';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';

type Filter = ProjectCategory | 'Todos';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective, Icon, SectionHeading],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  protected readonly projects = PROJECTS;
  protected readonly categories = PROJECT_CATEGORIES;
  protected readonly section = SECTIONS.projects;
  protected readonly activeCategory = signal<Filter>('Todos');

  protected readonly filtered = computed<Project[]>(() => {
    const category = this.activeCategory();
    return category === 'Todos'
      ? this.projects
      : this.projects.filter((project) => project.category === category);
  });

  protected countFor(category: Filter): number {
    return category === 'Todos'
      ? this.projects.length
      : this.projects.filter((project) => project.category === category).length;
  }

  protected setCategory(category: Filter): void {
    this.activeCategory.set(category);
  }
}
