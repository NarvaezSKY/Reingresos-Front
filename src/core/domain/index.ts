import { ReingresoCreateRequest, ReingresoCreateResponse } from "./reingreso"

export interface ReingresoRepository {
  createReingreso(payload: ReingresoCreateRequest): Promise<ReingresoCreateResponse>
}

export * from "./reingreso"