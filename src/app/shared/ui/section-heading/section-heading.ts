import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Encabezado reutilizable para todas las secciones. */
@Component({
  selector: 'app-section-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="section-heading"
      [class.section-heading--center]="center()"
      [class.section-heading--compact]="compact()"
    >
      <span class="eyebrow">{{ eyebrow() }}</span>
      <h2 class="section-title" [attr.id]="headingId() || null">
        {{ title() }}
        @if (highlight()) {
          <span class="highlight-text">{{ highlight() }}</span>
        }
      </h2>
      @if (subtitle()) {
        <p class="section-subtitle">{{ subtitle() }}</p>
      }
    </div>
  `,
})
export class SectionHeading {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly highlight = input('');
  readonly subtitle = input('');
  readonly center = input(true);
  /** Reduce el espacio inferior cuando el encabezado va dentro de una tarjeta o columna. */
  readonly compact = input(false);
  /** Id del título para enlazarlo con `aria-labelledby` de la sección. */
  readonly headingId = input('');
}
