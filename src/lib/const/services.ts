import type { Service } from "../type/services";

export const SERVICES: Service[] = [
  {
    id: 'liderazgo_imperfecto',
    name: 'Liderazgo Imperfecto',
    description: 'Aprende a liderar desde la imperfección y haz crecer a tu equipo.',
    link: '/liderazgo-imperfecto',
    active: false,
  },
  {
    id: 'se_parte_de_nuestra_comunidad',
    name: 'Sé parte de nuestra comunidad',
    description: 'Encuentra mi Blog, E-Books y herramientas gratuitas que te ayudaran a transformar tu futuro hoy.',
    link: '/comunidad',
    active: true,
  },
  {
    id: 'tu_companero_de_crecimiento',
    name: 'Tu compañero de crecimiento',
    description: '¿Te gustaría tener un mentor 24/7? Mi gemelo digital es lo que necesitas.',
    link: '/companero-de-crecimiento',
    active: true,
  },
  {
    id: 'la_biblioteca_del_lider',
    name: 'La biblioteca del líder',
    description: 'Una  selección curada para el crecimiento personal',
    link: '/biblioteca-del-lider',
    active: true,
  },
  {
    id: 'descubre_tu_proximo_aprendizaje',
    name: 'Descubre tu próximo aprendizaje',
    description: 'Encuentra el curso perfecto para tí y lleva tus habilidades al siguiente nivel.',
    link: '/proximo-aprendizaje',
    active: true,
  },
  {
    id: 'jose_en_accion',
    name: 'José en acción',
    description: 'Encuentra colaboraciones, videos y podcasts.',
    link: '/jose-en-accion',
    active: true,
  },
] as const;