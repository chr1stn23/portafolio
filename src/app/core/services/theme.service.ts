import { DOCUMENT } from '@angular/common';
import { Injectable, computed, effect, inject, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'portfolio-theme';

/**
 * Gestiona el tema claro/oscuro.
 * - Persiste la elección en localStorage.
 * - Aplica `data-theme` en <html> para que el CSS reaccione.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly themeState = signal<Theme>(this.readInitialTheme());

  readonly theme = this.themeState.asReadonly();
  readonly isDark = computed(() => this.themeState() === 'dark');

  constructor() {
    effect(() => {
      const theme = this.themeState();
      this.document.documentElement.dataset['theme'] = theme;
      try {
        localStorage.setItem(STORAGE_KEY, theme);
      } catch {
        // El almacenamiento puede estar deshabilitado; el tema sigue funcionando.
      }
    });
  }

  toggle(): void {
    this.themeState.update((current) => (current === 'dark' ? 'light' : 'dark'));
  }

  private readInitialTheme(): Theme {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'dark' || stored === 'light') {
        return stored;
      }
    } catch {
      // Ignoramos errores de acceso a localStorage.
    }

    const prefersLight = this.document.defaultView?.matchMedia?.(
      '(prefers-color-scheme: light)',
    ).matches;

    return prefersLight ? 'light' : 'dark';
  }
}
