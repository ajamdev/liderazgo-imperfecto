type ProcessId = 
  |'conversamos'
  |'escuchamos'
  |'analizamos'
  |'actuamos'

type ProcessName = 
  |'Conversamos'
  |'Escuchamos'
  |'Analizamos'
  |'Actuamos'

export interface Process {
  id: ProcessId
  name: ProcessName
  description: string
  number: number
}