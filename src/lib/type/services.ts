type serviceId =
  | 'liderazgo_imperfecto'
  | 'se_parte_de_nuestra_comunidad'
  | 'tu_companero_de_crecimiento'
  | 'la_biblioteca_del_lider'
  | 'descubre_tu_proximo_aprendizaje'
  | 'jose_en_accion'

  export interface Service {
    id: serviceId;
    name: string;
    description: string;
    link: string;
    active: boolean;
    icon: {name: any};
  }