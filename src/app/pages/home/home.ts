import { ChangeDetectionStrategy, Component } from '@angular/core';
import { About } from '../../features/about/about';
import { Contact } from '../../features/contact/contact';
import { Education } from '../../features/education/education';
import { Experience } from '../../features/experience/experience';
import { Hero } from '../../features/hero/hero';
import { Projects } from '../../features/projects/projects';
import { Services } from '../../features/services/services';

/**
 * Página principal (one page).
 * Cada sección es independiente y se puede reordenar o eliminar sin afectar al resto.
 */
@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Hero, About, Services, Experience, Projects, Education, Contact],
  template: `
    <app-hero />
    <app-about />
    <app-services />
    <app-experience />
    <app-projects />
    <app-education />
    <app-contact />
  `,
})
export class Home {}
