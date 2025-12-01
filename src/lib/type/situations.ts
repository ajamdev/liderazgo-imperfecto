type SituationsId =
  |'feedback-desafiante'
  |'conflicto-de-equipos'
  |'gestion-de-errores'
  |'sesgos-y-cegueras'
  |'baja-productividad'
  |'dinamicas-relacionales'
type SituationsName =
  | 'Feedback Desafiante'
  | 'Conflicto de Equipos'
  | 'Gestión de Errores'
  | 'Sesgos y Cegueras'
  | 'Baja Productividad'
  | 'Dinámicas Relacionales'

export interface Situations {
  id: SituationsId
  name: SituationsName
  description: string
  icon: {
    name: any
  }
}