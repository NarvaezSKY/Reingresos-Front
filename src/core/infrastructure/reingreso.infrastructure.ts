import { ReingresoCreateRequest, ReingresoCreateResponse, ReingresoRepository } from "../domain"
import { axiosInstance } from "@/src/config"

export class ReingresoInfrastructure implements ReingresoRepository {
  async createReingreso(payload: ReingresoCreateRequest): Promise<ReingresoCreateResponse> {
    try {
      const res = await axiosInstance.post<ReingresoCreateResponse>("/", payload)
      return res.data
    } catch (error: any) {
      // Normalizar error en la forma ReingresoCreateResponse
      return {
        success: false,
        message: error?.message || "Error desconocido",
        data: error?.response?.data,
      }
    }
  }
}

export default new ReingresoInfrastructure()