# Portafolio — Christian Lara

Portafolio personal de desarrollador, construido con **Angular 22** (standalone components, signals y zoneless), sin dependencias de UI externas. Todo el contenido está en español y centralizado en un único archivo para que puedas personalizarlo sin tocar los componentes.

Sitio de una sola página con secciones de inicio, sobre mí, servicios, experiencia, proyectos, formación y contacto.

---

## Requisitos

- Node.js 22 o superior (probado con Node 26)
- npm 10 o superior
- Angular CLI (opcional, puedes usar `npm`/`npx`)

## Puesta en marcha

```bash
npm install
npm start        # servidor de desarrollo en http://localhost:4200
```

Otros comandos:

```bash
npm run build    # build de producción en dist/
npm test         # pruebas unitarias con Vitest + jsdom
```

---

## Personalización rápida

### 1. Tus datos

Abre **`src/app/core/data/portfolio.data.ts`**. Es el único archivo necesario para actualizar el contenido:

| Export             | Qué controla                                                        |
| ------------------ | ------------------------------------------------------------------- |
| `PROFILE`          | Nombre, rol, descripción, email, teléfono, ubicación, CV, foto, bio |
| `NAV_LINKS`        | Enlaces del menú (deben coincidir con los `id` de las secciones)    |
| `SOCIAL_LINKS`     | Redes sociales del header, contacto y footer                        |
| `SECTIONS`         | Título, subtítulo y texto destacado de cada sección                 |
| `STATS`            | Contadores animados (experiencia, proyectos, certificaciones)       |
| `SKILLS`           | Habilidades y nivel (0-100) para las barras animadas                |
| `SERVICES`         | Tarjetas de especialidades y tecnologías                            |
| `EXPERIENCE`       | Puestos de trabajo con empresa, fechas, stack y logros              |
| `PROJECTS`         | Proyectos y categorías del filtro                                   |
| `EDUCATION`        | Formación académica                                                 |
| `CERTIFICATIONS`   | Certificaciones y cursos                                            |
| `LANGUAGES`        | Idiomas y nivel                                                     |
| `CONTACT_CHANNELS` | Correo, teléfono y ubicación de la sección de contacto              |

Los tipos de cada estructura están en `src/app/core/models/portfolio.model.ts`; si agregas un campo nuevo, el compilador te avisará dónde actualizarlo.

### 2. Tu CV y tu foto

- **CV:** `public/cv.pdf` ya apunta a tu currículum; reemplázalo cuando lo actualices (se abre desde el botón «Descargar CV»).
- **Foto:** tu imagen está en `public/images/perfil.jpg` y `PROFILE.avatarUrl` ya apunta a ella. Si cambias de archivo, actualiza esa ruta. Si dejas el campo vacío se muestra un monograma con tus iniciales.

### 3. Agregar un proyecto

Añade un objeto al arreglo `PROJECTS`:

```ts
{
  id: 'mi-proyecto',            // único, se usa como key
  title: 'Mi Proyecto',
  category: 'Web',              // 'Web' | 'Backend' | 'Móvil' (o amplía ProjectCategory)
  description: 'Descripción breve del proyecto.',
  tags: ['Angular', 'Node.js'],
  icon: 'globe',                // nombre válido de IconName
  gradient: 'linear-gradient(135deg, #7c6cff 0%, #22d3ee 100%)',
  demoUrl: 'https://demo.com',
  links: [
    { label: 'Frontend', url: 'https://github.com/usuario/repo-web' },
    { label: 'Backend', url: 'https://github.com/usuario/repo-api' },
  ],
  // image: '/images/proyectos/mi-proyecto.jpg', // opcional, reemplaza el degradado
}
```

Si usas una categoría nueva, agrégala también a `PROJECT_CATEGORIES` y al tipo `ProjectCategory`.

### 4. Agregar experiencia, formación o certificaciones

- **Experiencia:** agrega un objeto a `EXPERIENCE` con `role`, `company`, `location`, `period`, `tags` y `bullets`. Se renderiza como línea de tiempo.
- **Formación:** agrega un objeto a `EDUCATION` con `degree`, `institution`, `location` y `period`.
- **Certificaciones:** agrega un objeto a `CERTIFICATIONS` con `title`, `issuer` y `year`.
- **Idiomas:** agrega un objeto a `LANGUAGES` con `name` y `level`.

### 5. Agregar un servicio

- **Servicios:** agrega un objeto a `SERVICES` con `icon`, `title`, `description` y `features`.

### 6. Iconos disponibles

Los iconos son SVG locales definidos en `src/app/shared/ui/icon/icon.ts` (sin librerías externas). Para usar uno nuevo:

1. Agrega su `path`/contenido al registro `ICONS`.
2. Su nombre se añadirá automáticamente al tipo `IconName`.
3. Úsalo con `<app-icon name="mi-icono" />` o en los datos (`icon: 'mi-icono'`).

---

## Contacto

La sección de contacto no usa formulario: muestra los canales definidos en `CONTACT_CHANNELS` (`src/app/core/data/portfolio.data.ts`), un botón `mailto:` con tu correo y otro para descargar el CV. Para cambiar el correo, el teléfono o la ubicación, edita esos tres objetos; los enlaces se generan automáticamente a partir de `PROFILE`.

---

## Temas (claro / oscuro)

- El tema oscuro es el predeterminado; el selector del header alterna y guarda la preferencia en `localStorage` con la clave `portfolio-theme`.
- El tema se aplica con `data-theme="light"` en `<html>`; el script en `src/index.html` lo establece antes de pintar para evitar el destello inicial.
- Los colores, tipografías, sombras y radios están como variables CSS en **`src/styles.css`** (bloque `:root` y `[data-theme='light']`). Cambia ahí los tokens para reestilizar todo el sitio.

## Estructura del proyecto

```text
src/
├─ app/
│  ├─ core/                  # Lógica y datos sin dependencia de la vista
│  │  ├─ data/               # portfolio.data.ts  ← edita tu contenido aquí
│  │  ├─ models/             # Interfaces y tipos del contenido
│  │  ├─ services/           # ThemeService (tema + persistencia)
│  │  └─ utils/              # Utilidades (prefers-reduced-motion)
│  ├─ shared/                # Reutilizable en toda la app
│  │  ├─ directives/         # RevealDirective (animación al hacer scroll)
│  │  └─ ui/                 # Icon, SectionHeading, SocialLinks, StatCounter, BackToTop
│  ├─ layout/                # Header y Footer (shell de la página)
│  ├─ features/               # Una carpeta por sección
│  │  ├─ hero/ about/ services/ experience/ projects/ education/ contact/
│  ├─ pages/home/            # Composición de todas las secciones
│  ├─ app.ts / app.html      # Shell: header + router-outlet + footer
│  └─ app.routes.ts          # Ruta lazy hacia Home
├─ styles.css                # Tokens de diseño, temas y estilos base
└─ index.html                # Metadatos, fuentes y script de tema
```

Principios:

- **Contenido separado de la presentación:** los componentes leen de `core/data`.
- **Componentes standalone** con `ChangeDetectionStrategy.OnPush` e `input()`/`signal()`.
- **Control de flujo moderno** (`@if`, `@for`) en las plantillas.
- **Accesibilidad:** enlace de salto, roles y etiquetas ARIA, foco visible y respeto por `prefers-reduced-motion`.

---

## Despliegue

El build genera archivos estáticos en `dist/Portafolio/browser`.

### GitHub Pages (automático)

El repositorio incluye el workflow **`.github/workflows/deploy.yml`**, que compila y publica en cada push a `main`.

1. Crea el repositorio en GitHub (por ejemplo `Portafolio`) y sube la rama `main`.
2. En GitHub ve a **Settings → Pages → Build and deployment** y elige **Source: GitHub Actions**.
3. Haz push a `main` (o ejecuta el workflow manualmente desde **Actions**).
4. El sitio quedará en `https://<tu-usuario>.github.io/<nombre-del-repo>/`.

El workflow calcula el `baseHref` automáticamente: usa `/<nombre-del-repo>/` para project pages y `/` si el repositorio se llama `<usuario>.github.io`. También puedes compilarlo a mano:

```bash
npm run build -- --base-href /Portafolio/
```

Notas:

- El repositorio debe ser **público** para usar Pages en cuentas gratuitas.
- La foto y el CV usan rutas relativas (`images/perfil.jpg`, `cv.pdf`) para funcionar dentro del subdirectorio del proyecto.
- La navegación del sitio usa anclas (`#seccion`), así que no necesita fallback de SPA. Si más adelante agregas rutas reales, añade un `404.html` que redirija a `index.html`.

### Otros hostings

- **Netlify / Vercel:** build `npm run build`, carpeta de salida `dist/Portafolio/browser`.
- **Servidor propio:** sirve la carpeta con fallback de SPA hacia `index.html` para que funcionen las rutas del router.

Antes de publicar, actualiza en `src/index.html` el título, la descripción y las etiquetas Open Graph cuando tengas dominio propio. En `portfolio.data.ts`, revisa los enlaces de los proyectos (`links`) y las URLs de tus redes sociales.
