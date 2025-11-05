import { ReingresoCreateRequest, ReingresoCreateResponse } from "../domain"
import { reingresoInfrastructure } from "../infrastructure"

export const createReingresoUseCase = async (
  payload: ReingresoCreateRequest
): Promise<ReingresoCreateResponse> => {
  // aquí podrías agregar validaciones o transformaciones de dominio
  const response = await reingresoInfrastructure.createReingreso(payload)
  return response
}

export default {
  createReingresoUseCase,
}
