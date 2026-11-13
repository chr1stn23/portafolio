import type {
  Certification,
  ContactChannel,
  EducationItem,
  ExperienceItem,
  Language,
  NavLink,
  Profile,
  Project,
  ProjectCategory,
  SectionCopy,
  Service,
  Skill,
  SocialLink,
  Stat,
} from '../models/portfolio.model';

/* ============================================================================
 * CONTENIDO DEL PORTAFOLIO
 * ----------------------------------------------------------------------------
 * Este es el ÚNICO archivo que necesitas tocar para actualizar tus datos.
 * Los textos están en español y toda la app se alimenta de aquí.
 * ========================================================================== */

/** Datos personales y textos principales. */
export const PROFILE: Profile = {
  name: 'Christian Lara',
  logo: 'CL',
  role: 'Ingeniero de Sistemas & Desarrollador Full-Stack',
  availability: 'Disponible para oportunidades Full-Stack',
  heroRoles: [
    'Desarrollador Full-Stack',
    'Ingeniero de Sistemas',
    'Angular · Spring Boot · Node.js',
  ],
  heroDescription:
    'Ingeniero de Sistemas con experiencia construyendo aplicaciones web full-stack. Trabajo con Angular, Spring Boot y Node.js, cuidando la calidad, la accesibilidad y la entrega continua.',
  heroStack: ['Angular', 'TypeScript', 'Spring Boot', 'Node.js', 'PostgreSQL', 'Docker'],
  email: 'lvchristian20@gmail.com',
  phone: '+51 934 180 722',
  location: 'Lima, Perú',
  /** Coloca tu CV en public/cv.pdf (ruta relativa para funcionar en subdirectorios). */
  cvUrl: 'cv.pdf',
  /** Tu foto está en public/images/perfil.jpg */
  avatarUrl: 'images/perfil.jpg',
  bio: [
    'Ingeniero de Sistemas con 13 meses de experiencia profesional como desarrollador web full-stack (Node.js, Express y React), además de proyectos propios con Angular y Spring Boot.',
    'He construido una plataforma de mesa de ayuda probada de extremo a extremo con Playwright, accesible según WCAG AA y con CI/CD, y microservicios con Kafka y Keycloak. Me enfoco en el código limpio, la arquitectura mantenible y el trabajo en equipo con Scrum.',
  ],
  highlights: [
    'APIs REST modulares y escalables',
    'Frontend Angular con signals',
    'Accesibilidad WCAG AA y testing E2E',
    'CI/CD con GitHub Actions y Docker',
  ],
  footerTagline:
    'Desarrollador Full-Stack enfocado en aplicaciones web accesibles, mantenibles y bien probadas.',
};

/** Enlaces del menú (los fragmentos deben coincidir con los `id` de cada sección). */
export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio', fragment: 'inicio' },
  { label: 'Sobre mí', fragment: 'sobre-mi' },
  { label: 'Servicios', fragment: 'servicios' },
  { label: 'Experiencia', fragment: 'experiencia' },
  { label: 'Proyectos', fragment: 'proyectos' },
  { label: 'Formación', fragment: 'formacion' },
  { label: 'Contacto', fragment: 'contacto' },
];

/** Redes sociales. Cambia las URLs por las tuyas. */
export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', icon: 'github', url: 'https://github.com/chr1stn23' },
  {
    label: 'LinkedIn',
    icon: 'linkedin',
    url: 'https://www.linkedin.com/in/christian-lara-vega',
  },
];

/** Encabezados de cada sección. */
export const SECTIONS = {
  about: {
    eyebrow: 'Sobre mí',
    title: 'Conoce más',
    highlight: 'sobre mí',
    subtitle:
      'Ingeniero de Sistemas y desarrollador Full-Stack con foco en calidad, accesibilidad y arquitectura mantenible',
  },
  services: {
    eyebrow: 'Especialidades',
    title: 'Áreas de',
    highlight: 'especialización',
    subtitle:
      'Tecnologías y prácticas con las que puedo aportar valor a tu equipo desde el primer día',
  },
  experience: {
    eyebrow: 'Trayectoria',
    title: 'Experiencia',
    highlight: 'profesional',
    subtitle: 'Empresas y proyectos donde he desarrollado soluciones web de principio a fin',
  },
  projects: {
    eyebrow: 'Portafolio',
    title: 'Proyectos',
    highlight: 'destacados',
    subtitle:
      'Proyectos web y móviles donde aplico Angular, Spring Boot, Node.js y Dart con buenas prácticas de ingeniería',
  },
  education: {
    eyebrow: 'Formación',
    title: 'Estudios y',
    highlight: 'certificaciones',
    subtitle:
      'Base académica en Ingeniería de Sistemas y formación continua en desarrollo y arquitectura de software',
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Trabajemos',
    highlight: 'juntos',
    subtitle:
      '¿Buscas un desarrollador Full-Stack para tu equipo? Conversemos sobre cómo puedo aportar',
  },
} satisfies Record<string, SectionCopy>;

/** Métricas principales. */
export const STATS: Stat[] = [
  { value: 13, suffix: '', label: 'Meses de experiencia', icon: 'calendar' },
  { value: 3, suffix: '', label: 'Proyectos publicados', icon: 'layers' },
  { value: 5, suffix: '', label: 'Certificaciones', icon: 'award' },
  { value: 97, suffix: '%', label: 'Cobertura frontend', icon: 'shield-check' },
];

/** Habilidades con nivel de dominio (0-100). */
export const SKILLS: Skill[] = [
  { name: 'Angular & TypeScript', level: 90 },
  { name: 'Node.js & Express', level: 86 },
  { name: 'Java & Spring Boot', level: 82 },
  { name: 'PostgreSQL & MySQL', level: 84 },
  { name: 'Docker & CI/CD', level: 78 },
  { name: 'Testing & accesibilidad', level: 80 },
];

/** Servicios o áreas de especialización. */
export const SERVICES: Service[] = [
  {
    icon: 'layers',
    title: 'Desarrollo Full-Stack',
    description:
      'Aplicaciones completas de punta a punta: interfaz, API, base de datos y despliegue, con una arquitectura clara y mantenible.',
    features: ['SPA con Angular', 'APIs REST', 'Integración frontend-backend'],
  },
  {
    icon: 'code',
    title: 'Frontend con Angular',
    description:
      'Interfaces modernas y reactivas con Angular 22, signals y formularios tipados, cuidadas al detalle y totalmente responsivas.',
    features: ['Angular 22 y signals', 'Signal Forms', 'HTML, CSS y SCSS'],
  },
  {
    icon: 'server',
    title: 'Backend con Node.js',
    description:
      'APIs REST modulares con Node.js y Express, integradas con bases de datos relacionales y pensadas para crecer.',
    features: ['Express.js', 'PostgreSQL y MySQL', 'Autenticación y seguridad'],
  },
  {
    icon: 'coffee',
    title: 'Java & Spring Boot',
    description:
      'Servicios robustos con Spring Boot 4 y Spring Security, aplicando arquitectura hexagonal, DDD y buenas prácticas.',
    features: ['Spring Boot 4', 'Spring Security', 'Arquitectura hexagonal y DDD'],
  },
  {
    icon: 'shield-check',
    title: 'Calidad y accesibilidad',
    description:
      'Pruebas automatizadas y revisiones de accesibilidad para entregar software confiable, inclusivo y fácil de mantener.',
    features: ['Vitest y Playwright', 'Accesibilidad WCAG AA', 'Testcontainers'],
  },
  {
    icon: 'cloud',
    title: 'DevOps y cloud',
    description:
      'Contenedores y despliegue continuo con Docker, GitHub Actions y nginx, sobre infraestructura cloud certificada.',
    features: ['Docker y Compose', 'GitHub Actions', 'Nginx, OCI y AWS'],
  },
];

/** Categorías del filtro de proyectos (deben coincidir con `ProjectCategory`). */
export const PROJECT_CATEGORIES: ReadonlyArray<ProjectCategory | 'Todos'> = [
  'Todos',
  'Web',
  'Backend',
  'Móvil',
];

/** Proyectos del portafolio. */
export const PROJECTS: Project[] = [
  {
    id: 'supporthub',
    title: 'SupportHub',
    category: 'Web',
    description:
      'Plataforma full-stack de mesa de ayuda y gestión de activos TI, con roles, auditoría, notificaciones y sesiones seguras.',
    tags: ['Angular 22', 'Spring Boot 4', 'PostgreSQL', 'Docker'],
    icon: 'layers',
    coverColor: '#4ec9c0',
    links: [
      { label: 'Frontend', url: 'https://github.com/chr1stn23/support-hub-web' },
      { label: 'Backend', url: 'https://github.com/chr1stn23/support-hub-backend' },
    ],
  },
  {
    id: 'monitoreo-energetico',
    title: 'Monitoreo Energético',
    category: 'Backend',
    description:
      'Microservicios para la ingesta de telemetría IoT en tiempo real, con seguridad OAuth2 y persistencia en InfluxDB y MySQL.',
    tags: ['Spring Boot', 'Kafka', 'InfluxDB', 'Keycloak'],
    icon: 'zap',
    coverColor: '#f0b03c',
    links: [{ label: 'Repositorio', url: 'https://github.com/chr1stn23/home-energy-tracker' }],
  },
  {
    id: 'auxilearn',
    title: 'AuxiLearn',
    category: 'Móvil',
    description:
      'Aplicación móvil educativa para aprender primeros auxilios de forma didáctica, con lecciones interactivas y contenido de emergencia.',
    tags: ['Dart', 'Flutter', 'Mobile'],
    icon: 'smartphone',
    coverColor: '#ef7d92',
    links: [{ label: 'Repositorio', url: 'https://github.com/chr1stn23/auxilearn_app' }],
  },
];

/** Experiencia profesional. */
export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Desarrollador Web Fullstack',
    company: 'Atocha Corporations S.A.C.',
    location: 'Lima, Perú',
    period: 'mar 2025 — dic 2025',
    tags: ['Node.js', 'Express.js', 'React.js', 'Git/GitHub'],
    bullets: [
      'Diseñé e implementé APIs REST modulares con Node.js y Express.js, reduciendo los tiempos de respuesta en un 30 %.',
      'Integré el backend con módulos consumidos por React.js, manteniendo una disponibilidad del servicio del 99,5 % durante la implementación.',
      'Construí interfaces responsivas integradas a la API y estandaricé entregas continuas en sprints quincenales bajo Scrum con Git/GitHub.',
    ],
  },
  {
    role: 'Desarrollador de Sistemas Web',
    company: 'Constructora Consultora Aguilar Hnos - Olmos S.A.C.',
    location: 'Lima, Perú',
    period: 'dic 2024 — feb 2025',
    tags: ['Node.js', 'Express.js', 'MySQL'],
    bullets: [
      'Desarrollé un sistema web para la gestión de almacenes en obras, digitalizando el control de más de 200 registros de materiales.',
      'Automaticé módulos de reportes y trazabilidad de insumos en tiempo real, reduciendo en un 40 % el tiempo manual de los supervisores.',
    ],
  },
];

/** Formación académica. */
export const EDUCATION: EducationItem[] = [
  {
    degree: 'Título Profesional en Ingeniería de Sistemas',
    institution: 'Universidad César Vallejo',
    location: 'Lima, Perú',
    period: '2021 — 2025',
  },
];

/** Certificaciones y cursos. */
export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Oracle Cloud Infrastructure Certified Foundations Associate',
    issuer: 'Oracle',
    year: '2026',
  },
  {
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services · Skill Builder',
    year: '2026',
  },
  {
    title: 'Desarrollo Frontend con Angular',
    issuer: 'Udemy',
    year: '2025',
  },
  {
    title: 'Spring Boot 4: Patrones de arquitectura (DDD, Hexagonal, CQRS, Keycloak)',
    issuer: 'Udemy',
    year: '2026',
  },
  {
    title: 'Desarrollo Backend con Node.js: Clean Architecture & DDD',
    issuer: 'Udemy',
    year: '2026',
  },
];

/** Idiomas. */
export const LANGUAGES: Language[] = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'Intermedio (B2)' },
];

/** Canales de contacto de la sección de contacto. */
export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    icon: 'mail',
    label: 'Correo',
    value: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
  },
  {
    icon: 'phone',
    label: 'Teléfono',
    value: PROFILE.phone,
    href: `tel:${PROFILE.phone.replace(/\s/g, '')}`,
  },
  {
    icon: 'map-pin',
    label: 'Ubicación',
    value: PROFILE.location,
    href: `https://maps.google.com/?q=${encodeURIComponent(PROFILE.location)}`,
  },
];

/** Enlaces del pie de página. */
export const FOOTER_LINKS = {
  navigation: NAV_LINKS.slice(0, 6),
  services: SERVICES.slice(0, 5).map((service) => service.title),
};
