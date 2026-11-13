import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

interface IconPath {
  d: string;
  /** Los iconos de marca se pintan con relleno en lugar de trazo. */
  filled?: boolean;
}

interface IconDefinition {
  viewBox: string;
  strokeWidth?: number;
  paths: IconPath[];
}

/**
 * Registro central de iconos.
 * Para añadir uno nuevo copia el `d` de cualquier SVG (Lucide, Heroicons, Simple Icons)
 * y agrégalo aquí. El nombre queda tipado automáticamente en `IconName`.
 */
export const ICONS = {
  code: {
    viewBox: '0 0 24 24',
    paths: [{ d: 'm16 18 6-6-6-6M8 6l-6 6 6 6' }],
  },
  palette: {
    viewBox: '0 0 24 24',
    paths: [
      {
        d: 'M12 22a10 10 0 1 1 10-10c0 2-1.5 3-3 3h-2a2 2 0 0 0-2 2 2 2 0 0 0 .5 1.5A2.5 2.5 0 0 1 12 22Z',
      },
      { d: 'M7 12h.01M9 8h.01M14 7h.01M17 10h.01' },
    ],
  },
  server: {
    viewBox: '0 0 24 24',
    paths: [{ d: 'M3 4h18v6H3zM3 14h18v6H3z' }, { d: 'M7 7h.01M7 17h.01' }],
  },
  smartphone: {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z' },
      { d: 'M11 18h2' },
    ],
  },
  cloud: {
    viewBox: '0 0 24 24',
    paths: [{ d: 'M17.5 19H7a5 5 0 1 1 1.1-9.9A6 6 0 0 1 19.5 12a3.5 3.5 0 0 1-2 7Z' }],
  },
  zap: {
    viewBox: '0 0 24 24',
    paths: [{ d: 'M13 2 4 14h7l-1 8 9-12h-7l1-8Z' }],
  },
  menu: {
    viewBox: '0 0 24 24',
    paths: [{ d: 'M4 6h16M4 12h16M4 18h16' }],
  },
  close: {
    viewBox: '0 0 24 24',
    paths: [{ d: 'M6 6l12 12M18 6 6 18' }],
  },
  'chevron-up': {
    viewBox: '0 0 24 24',
    paths: [{ d: 'm6 15 6-6 6 6' }],
  },
  'arrow-right': {
    viewBox: '0 0 24 24',
    paths: [{ d: 'M5 12h14M13 6l6 6-6 6' }],
  },
  'arrow-up-right': {
    viewBox: '0 0 24 24',
    paths: [{ d: 'M7 17 17 7M8 7h9v9' }],
  },
  download: {
    viewBox: '0 0 24 24',
    paths: [{ d: 'M12 3v12M7 11l5 5 5-5M4 20h16' }],
  },
  check: {
    viewBox: '0 0 24 24',
    paths: [{ d: 'm5 13 4 4L19 7' }],
  },
  mail: {
    viewBox: '0 0 24 24',
    paths: [{ d: 'M3 5h18v14H3z' }, { d: 'm3 7 9 6 9-6' }],
  },
  phone: {
    viewBox: '0 0 24 24',
    paths: [
      {
        d: 'M6 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v3a2 2 0 0 1-2 2A17 17 0 0 1 4 5a2 2 0 0 1 2-2Z',
      },
    ],
  },
  'map-pin': {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z' },
      { d: 'M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z' },
    ],
  },
  github: {
    viewBox: '0 0 24 24',
    paths: [
      {
        filled: true,
        d: 'M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.55v-2.14c-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .3.21.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z',
      },
    ],
  },
  linkedin: {
    viewBox: '0 0 24 24',
    paths: [
      {
        filled: true,
        d: 'M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z',
      },
    ],
  },
  x: {
    viewBox: '0 0 24 24',
    paths: [
      {
        filled: true,
        d: 'M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z',
      },
    ],
  },
  instagram: {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z' },
      { d: 'M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z' },
      { d: 'M17.5 6.5h.01' },
    ],
  },
  'arrow-down': {
    viewBox: '0 0 24 24',
    paths: [{ d: 'M12 5v14M6 13l6 6 6-6' }],
  },
  sparkles: {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'm12 3 1.9 4.1L18 9l-4.1 1.9L12 15l-1.9-4.1L6 9l4.1-1.9L12 3Z' },
      { d: 'M19 15l.8 1.7 1.7.8-1.7.8L19 20l-.8-1.7-1.7-.8 1.7-.8L19 15Z' },
    ],
  },
  briefcase: {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'M4 7h16v13H4z' },
      { d: 'M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2' },
      { d: 'M4 12h16' },
    ],
  },
  users: {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' },
      { d: 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z' },
      { d: 'M22 21v-2a4 4 0 0 0-3-3.87' },
      { d: 'M16 3.13a4 4 0 0 1 0 7.75' },
    ],
  },
  award: {
    viewBox: '0 0 24 24',
    paths: [{ d: 'M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z' }, { d: 'm8.2 13.9-1.2 7 5-3 5 3-1.2-7' }],
  },
  calendar: {
    viewBox: '0 0 24 24',
    paths: [{ d: 'M4 5h16v16H4z' }, { d: 'M8 3v4M16 3v4M4 10h16' }],
  },
  quote: {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'M10 11H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v8a4 4 0 0 1-4 4' },
      { d: 'M20 11h-4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v8a4 4 0 0 1-4 4' },
    ],
  },
  star: {
    viewBox: '0 0 24 24',
    paths: [
      {
        filled: true,
        d: 'm12 2 3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2Z',
      },
    ],
  },
  send: {
    viewBox: '0 0 24 24',
    paths: [{ d: 'm22 2-7 20-4-9-9-4Z' }, { d: 'M22 2 11 13' }],
  },
  sun: {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z' },
      {
        d: 'M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4',
      },
    ],
  },
  moon: {
    viewBox: '0 0 24 24',
    paths: [{ d: 'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z' }],
  },
  layers: {
    viewBox: '0 0 24 24',
    paths: [{ d: 'm12 3 9 5-9 5-9-5 9-5Z' }, { d: 'm3 13 9 5 9-5' }],
  },
  database: {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'M12 8c4.4 0 8-1.3 8-3s-3.6-3-8-3-8 1.3-8 3 3.6 3 8 3Z' },
      { d: 'M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5' },
      { d: 'M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3' },
    ],
  },
  rocket: {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2a2.1 2.1 0 0 0-3-3Z' },
      { d: 'M9 15 5 11c3-8 9-9 14-9 0 5-1 11-9 14Z' },
      { d: 'M15 9h.01' },
    ],
  },
  globe: {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z' },
      { d: 'M3 12h18' },
      {
        d: 'M12 3c2.5 2.5 4 5.7 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.7-4-9s1.5-6.5 4-9Z',
      },
    ],
  },
  'external-link': {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'M14 4h6v6M20 4 10 14' },
      { d: 'M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4' },
    ],
  },
  'graduation-cap': {
    viewBox: '0 0 24 24',
    paths: [
      {
        d: 'M21.42 10.92a1 1 0 0 0-.02-1.84L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.83l8.57 3.91a2 2 0 0 0 1.66 0z',
      },
      { d: 'M22 10v6' },
      { d: 'M6 12.5V16a6 3 0 0 0 12 0v-3.5' },
    ],
  },
  coffee: {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'M10 2v2M14 2v2M6 2v2' },
      {
        d: 'M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1',
      },
    ],
  },
  'shield-check': {
    viewBox: '0 0 24 24',
    paths: [
      {
        d: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z',
      },
      { d: 'm9 12 2 2 4-4' },
    ],
  },
} satisfies Record<string, IconDefinition>;

export type IconName = keyof typeof ICONS;

/**
 * Icono SVG accesible y ligero, sin dependencias externas.
 * Uso: `<app-icon name="github" [size]="20" />`
 */
@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      [attr.width]="size()"
      [attr.height]="size()"
      [attr.viewBox]="icon().viewBox"
      fill="none"
      stroke="currentColor"
      [attr.stroke-width]="icon().strokeWidth ?? 1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      @for (path of icon().paths; track $index) {
        <path
          [attr.d]="path.d"
          [attr.fill]="path.filled ? 'currentColor' : 'none'"
          [attr.stroke]="path.filled ? 'none' : 'currentColor'"
        />
      }
    </svg>
  `,
  styles: `
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      line-height: 0;
    }
  `,
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly size = input(20);

  protected readonly icon = computed<IconDefinition>(() => ICONS[this.name()]);
}
