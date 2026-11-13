import type { IconName } from '../../shared/ui/icon/icon';

/** Enlace de navegación principal (una sola página con fragmentos). */
export interface NavLink {
  label: string;
  fragment: string;
}

/** Enlace a red social. */
export interface SocialLink {
  label: string;
  icon: IconName;
  url: string;
}

/** Habilidad con porcentaje de dominio (0-100). */
export interface Skill {
  name: string;
  level: number;
}

/** Métrica animada (proyectos, clientes, años...). */
export interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: IconName;
}

/** Servicio ofrecido. */
export interface Service {
  icon: IconName;
  title: string;
  description: string;
  features: string[];
}

export type ProjectCategory = 'Web' | 'SaaS' | 'Móvil' | 'Backend';

/** Enlace externo de un proyecto (repositorio, demo, frontend, backend...). */
export interface ProjectLink {
  label: string;
  url: string;
}

/** Proyecto del portafolio. */
export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  tags: string[];
  icon: IconName;
  /** Gradiente CSS usado como portada cuando no hay imagen. */
  gradient: string;
  /** Imagen opcional en /public/images. */
  image?: string;
  demoUrl?: string;
  /** Repositorios u otros enlaces, cada uno con su etiqueta. */
  links?: ProjectLink[];
}

/** Puesto de trabajo dentro de la trayectoria profesional. */
export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  tags: string[];
  bullets: string[];
}

/** Formación académica. */
export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

/** Certificación o curso completado. */
export interface Certification {
  title: string;
  issuer: string;
  year: string;
}

/** Idioma y nivel. */
export interface Language {
  name: string;
  level: string;
}

/** Canal de contacto (email, teléfono, ubicación). */
export interface ContactChannel {
  icon: IconName;
  label: string;
  value: string;
  href: string;
}

/** Encabezado reutilizable de sección. */
export interface SectionCopy {
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle: string;
}

/** Datos personales del autor del portafolio. */
export interface Profile {
  name: string;
  logo: string;
  role: string;
  availability: string;
  heroRoles: string[];
  heroDescription: string;
  heroStack: string[];
  email: string;
  phone: string;
  location: string;
  cvUrl: string;
  avatarUrl: string;
  bio: string[];
  highlights: string[];
  footerTagline: string;
}
