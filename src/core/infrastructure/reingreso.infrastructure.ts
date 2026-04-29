import { ReingresoCreateRequest, ReingresoCreateResponse, ReingresoRepository } from "../domain"
import { axiosInstance } from "@/src/config"

export class ReingresoInfrastructure implements ReingresoRepository {
  async createReingreso(payload: ReingresoCreateRequest): Promise<ReingresoCreateResponse> {
    try {
      const res = await axiosInstance.post<ReingresoCreateResponse>("/", payload)
      return res.data
    } catch (error: any) {
      // Extraer la respuesta del backend si está disponible
      const backendResponse = error?.response?.data;
      
      // Normalizar error en la forma ReingresoCreateResponse
      return {
        success: false,
        message: backendResponse?.message || error?.message || "Error desconocido",
        data: backendResponse,
      }
    }
  }
}

export default new ReingresoInfrastructure()