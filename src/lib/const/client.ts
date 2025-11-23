import type { Client } from "../type/client";
import Andi from '@/assets/client/andi.svg'
import Bancolombia from '@/assets/client/bancolombia.svg'
import Buk from '@/assets/client/buk.svg'
import Colsubsidio from '@/assets/client/colsubsidio.svg'
import Comfama from '@/assets/client/comfama.svg'
import CorfiColombiana from '@/assets/client/corfi-colombiana.svg'
import Colombiana from '@/assets/client/colombiana.svg'
import Disan from '@/assets/client/disan.svg'
import Exito from '@/assets/client/exito.svg'
import GDO from '@/assets/client/gdo.svg'
import Gentera from '@/assets/client/gentera.svg'
import Icesi from '@/assets/client/icesi.svg'
import ISA from '@/assets/client/isa.svg'
import Itau from '@/assets/client/itau.svg'
import Lafayette from '@/assets/client/lafayette.svg'
import Liberty from '@/assets/client/liberty.svg'
import Mercer from '@/assets/client/mercer.svg'
import Noel from '@/assets/client/noel.svg'
import Postobon from '@/assets/client/postobon.svg'
import PPG from '@/assets/client/ppg.svg'
import RedeBan from '@/assets/client/redeban.svg'
import SAP from '@/assets/client/sap.svg'
import Sura from '@/assets/client/sura.svg'
import Talma from '@/assets/client/talma.svg'

export const CLIENT: Client[] = [
  {
    id: 'andi',
    name: 'ANDI',
    icon: { name: Andi }
  },
  {
    id: 'bancolombia',
    name: 'Bancolombia',
    icon: { name: Bancolombia }
  },
  {
    id: 'buk',
    name: 'Buk',
    icon: { name: Buk }
  },
  {
    id: 'colsubsidio',
    name: 'Colsubsidio',
    icon: { name: Colsubsidio }
  },
  {
    id: 'comfama',
    name: 'Comfama',
    icon: { name: Comfama }
  },
  {
    id: 'corfi-colombiana',
    name: 'Corfi Colombiana',
    icon: { name: CorfiColombiana }
  },
  {
    id: 'colombiana',
    name: 'Colombiana',
    icon: { name: Colombiana }
  },
  {
    id: 'disan',
    name: 'Disan',
    icon: { name: Disan }
  },
  {
    id: 'exito',
    name: 'Exito',
    icon: { name: Exito }
  },
  {
    id: 'gdo',
    name: 'GDO',
    icon: { name: GDO }
  },
  {
    id: 'gentera',
    name: 'Gentera',
    icon: { name: Gentera }
  },
  {
    id: 'icesi',
    name: 'Icesi',
    icon: { name: Icesi }
  },
  {
    id: 'isa',
    name: 'Isa',
    icon: { name: ISA }
  },
  {
    id: 'itau',
    name: 'Itau',
    icon: { name: Itau }
  },
  {
    id: 'lafayette',
    name: 'Lafayette',
    icon: { name: Lafayette }
  },
  {
    id: 'liberty',
    name: 'Liberty',
    icon: { name: Liberty }
  },
  {
    id: 'mercer',
    name: 'Mercer',
    icon: { name: Mercer }
  },
  {
    id: 'noel',
    name: 'Noel',
    icon: { name: Noel }
  },
  {
    id: 'postobon',
    name: 'Postobon',
    icon: { name: Postobon }
  },
  {
    id: 'ppg',
    name: 'PPG',
    icon: { name: PPG }
  },
  {
    id: 'redeban',
    name: 'Redeban',
    icon: { name: RedeBan }
  },
  {
    id: 'sap',
    name: 'SAP',
    icon: { name: SAP }
  },
  {
    id: 'sura',
    name: 'Sura',
    icon: { name: Sura }
  },
  {
    id: 'talma',
    name: 'Talma',
    icon: { name: Talma }
  }
] as const