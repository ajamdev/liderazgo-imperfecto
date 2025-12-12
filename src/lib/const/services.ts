import type { Service } from "../type/services";
import Presentation  from "@/assets/icons/presentation.svg"
import Users  from "@/assets/icons/users.svg"
import Plants  from "@/assets/icons/plants.svg"
import Books  from "@/assets/icons/books.svg"
import Compass  from "@/assets/icons/compass.svg"
import Hands from "@/assets/icons/hands.svg"

export const SERVICES: readonly Service[] = [
  {
    id: 'liderazgo_imperfecto',
    name: 'Liderazgo Imperfecto',
    description: 'Aprende a liderar desde la imperfección y haz crecer a tu equipo.',
    link: '/liderazgo-imperfecto',
    active: false,
    icon: {name: Hands},
  },
  {
    id: 'se_parte_de_nuestra_comunidad',
    name: 'Sé parte de nuestra comunidad',
    description: 'Encuentra mi Blog, E-Books y herramientas gratuitas que te ayudaran a transformar tu futuro hoy.',
    link: '/comunidad',
    active: true,
    icon: {name: Users},
  },
  {
    id: 'tu_companero_de_crecimiento',
    name: 'Tu compañero de crecimiento',
    description: '¿Te gustaría tener un mentor 24/7? Mi gemelo digital es lo que necesitas.',
    link: '/companero-de-crecimiento',
    active: true,
    icon: {name: Plants},
  },
  {
    id: 'la_biblioteca_del_lider',
    name: 'La biblioteca del líder',
    description: 'Una  selección curada para el crecimiento personal',
    link: '/biblioteca-del-lider',
    active: false,
    icon: {name: Books},
  },
  {
    id: 'descubre_tu_proximo_aprendizaje',
    name: 'Descubre tu próximo aprendizaje',
    description: 'Encuentra el curso perfecto para tí y lleva tus habilidades al siguiente nivel.',
    link: '/proximo-aprendizaje',
    active: true,
    icon: {name: Compass},
  },
  {
    id: 'jose_en_accion',
    name: 'José en acción',
    description: 'Encuentra colaboraciones, videos y podcasts.',
    link: '/jose-en-accion',
    active: true,
    icon: {name: Presentation},
  },
] as const;