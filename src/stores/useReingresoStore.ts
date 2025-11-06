import { create } from "zustand"
import { ReingresoCreateRequest, ReingresoCreateResponse, createReingresoUseCase } from "@/src/core"

type State = {
  formData: ReingresoCreateRequest
  loading: boolean
  error?: string | null
  response?: ReingresoCreateResponse | null
  setFormField: <K extends keyof ReingresoCreateRequest>(field: K, value: ReingresoCreateRequest[K]) => void
  resetForm: () => void
  submitReingreso: (onSuccess?: (res: ReingresoCreateResponse) => void, onError?: (err: any) => void) => Promise<void>
}

const initialForm: ReingresoCreateRequest = {
  año: "",
  fechaRegistro: "",
  codigoCentro: "",
  centroFormacion: "",
  tipoDocumento: "",
  numeroDocumento: "",
  aspirante: "",
  numeroActa: "",
  carpetaURL: "",
  numeroResolucion: "",
  fechaSolicitud: "",
  fichaOrigen: "",
  fichaDestino: "",
  opcionAplicada: "",
  estadoSofia: "",
}

export const useReingresoStore = create<State>((set: any, get: any) => ({
  formData: initialForm,
  loading: false,
  error: null,
  response: null,
  setFormField: <K extends keyof ReingresoCreateRequest>(field: K, value: ReingresoCreateRequest[K]) =>
    set({ formData: { ...get().formData, [field]: value } }),
  resetForm: () => set({ formData: initialForm, loading: false, error: null, response: null }),
  submitReingreso: async (
    onSuccess?: (res: ReingresoCreateResponse) => void,
    onError?: (err: any) => void
  ) => {
    set({ loading: true, error: null })
    try {
      const payload = get().formData
      // Llamada al usecase (implementa la invocación al backend)
      const res = await createReingresoUseCase(payload)
      set({ response: res, loading: false })
      onSuccess?.(res)
    } catch (err: any) {
      set({ error: err?.message || "Error al enviar", loading: false })
      onError?.(err)
    }
  },
}))

export default useReingresoStore
