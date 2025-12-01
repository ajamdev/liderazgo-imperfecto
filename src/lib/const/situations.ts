import type { Situations } from "../type/situations";
import Chart from "@/assets/icons/chart-line.svg"
import Hands from "@/assets/icons/hands.svg"
import Message from "@/assets/icons/message.svg"
import Swords from "@/assets/icons/swords.svg"
import Target from "@/assets/icons/target.svg"
import Times from "@/assets/icons/times.svg"

export const SITUATIONS: Situations[]=[
  {
    id: 'feedback-desafiante',
    name: 'Feedback Desafiante',
    description: 'Recibir crítica constructiva que impacta tu confianza y requiere claridad inmediata.',
    icon: {name:Message}
  },
  {
    id: 'conflicto-de-equipos',
    name: 'Conflicto de Equipos',
    description: 'Tensiones entre miembros que afectan la productividad y el ambiente laboral.',
    icon: {name:Swords}
  },
  {
    id: 'gestion-de-errores',
    name: 'Gestión de Errores',
    description: 'Decisiones equivocadas que necesitan reorientación rápida y estratégica.',
    icon: {name:Times}
  },
  {
    id: 'sesgos-y-cegueras',
    name: 'Sesgos y Cegueras',
    description: 'Identificar puntos ciegos propios y del equipo que limitan el crecimiento.',
    icon: {name:Target}
  },
  {
    id: 'baja-productividad',
    name: 'Baja Productividad',
    description: 'Equipos desalineados que requieren recalibración urgente de objetivos.',
    icon: {name:Chart}
  },
  {
    id: 'dinamicas-relacionales',
    name: 'Dinámicas Relacionales',
    description: 'Problemas en las conexiones del equipo que requieren intervención inmediata.',
    icon: {name:Hands}
  }
] as const