type clientId =
  | 'andi'
  | 'bancolombia'
  | 'buk'
  | 'colsubsidio'
  | 'comfama'
  | 'corfi-colombiana'
  |'colombiana'
  | 'disan'
  | 'exito'
  | 'gdo'
  | 'gentera'
  |'icesi'
  |'isa'
  |'itau'
  |'lafayette'
  |'liberty'
  | 'mercer'
  |'noel'
  |'postobon'
  |'ppg'
  |'redeban'
  |'sap'
  |'sura'
  | 'talma'

type clientName =
  | 'ANDI'
  | 'Bancolombia'
  | 'Buk'
  | 'Colsubsidio'
  | 'Comfama'
  | 'Corfi Colombiana'
  | 'Colombiana'
  | 'Disan'
  | 'Exito'
  | 'GDO'
  | 'Gentera'
  | 'Icesi'
  | 'Isa'
  | 'Itau'
  | 'Lafayette'
  | 'Liberty'
  | 'Mercer'
  | 'Noel'
  | 'Postobon'
  | 'PPG'
  | 'Redeban'
  | 'SAP'
  | 'Sura'
  | 'Talma'

export interface Client {
  id: clientId
  name: clientName
  icon: {
    name: any
  }
}