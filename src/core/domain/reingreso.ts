export type ReingresoCreateRequest = {
  año: string
  fechaRegistro: string
  codigoCentro: string
  centroFormacion: string
  tipoDocumento: string
  numeroDocumento: string
  aspirante: string
  numeroActa?: string
  carpetaURL?: string
  numeroResolucion?: string
  fechaSolicitud?: string
  fichaOrigen?: string
  fichaDestino?: string
  opcionAplicada?: string
  estadoSofia?: string
}

export type ReingresoCreateResponse = {
  success: boolean
  id?: string
  message?: string
  // cualquier payload adicional que devuelva el backend
  data?: Record<string, any>
}

export type ReingresoState = {
  formData: ReingresoCreateRequest
}
