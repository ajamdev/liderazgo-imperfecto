import type { Link } from "../type/links";
import Mentoria from "@/assets/icons/mentoria.svg"
import Consultorias from "@/assets/icons/consultoria.svg"
import Coaching from "@/assets/icons/conferencias.svg"
import Llamada from "@/assets/icons/phone.svg"
import Workshops from "@/assets/icons/shield.svg"

export const LINK: Link[] = [
  {
    link: "/mentoria-ejecutiva",
    title: "Mentoría Ejecutiva",
    icon:{
      name: Mentoria
    }
  },
  {
    link: "/consultorias",
    title: "Consultorías",
    icon: {
      name: Consultorias  
    }
  },
  {
    link: "/coaching-ejecutivo-y-alineacion-de-equipo",
    title: "Coaching Ejecutivo y Alineación de Equipo",
    icon: {
      name: Coaching
    }
  },
  {
    link: "/llamada-de-emergencia",
    title: "Llamada de Emergencia",
    icon: {
      name: Llamada
    }
  },
  {
    link: "/workshops",
    title: "Workshops sobre Seguridad Psicológica para la transformación",
    icon: {
      name: Workshops
    }
  }
] as const;