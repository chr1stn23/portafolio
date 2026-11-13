import { TestBed } from '@angular/core/testing';
import { Home } from './home';

describe('Home', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
    }).compileComponents();
  });

  it('should render every main section', async () => {
    const fixture = TestBed.createComponent(Home);
    await fixture.whenStable();

    const element = fixture.nativeElement as HTMLElement;
    const sections = [
      'inicio',
      'sobre-mi',
      'servicios',
      'experiencia',
      'proyectos',
      'formacion',
      'contacto',
    ];

    for (const id of sections) {
      expect(element.querySelector(`#${id}`), `Falta la sección #${id}`).toBeTruthy();
    }
  });
});
