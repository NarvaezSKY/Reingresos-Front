import useReingresoStore from "@/src/stores/useReingresoStore"

export const useUploadReingreso = () => {
  const formData = useReingresoStore((s) => s.formData)
  const loading = useReingresoStore((s) => s.loading)
  const error = useReingresoStore((s) => s.error)
  const response = useReingresoStore((s) => s.response)
  const setFormField = useReingresoStore((s) => s.setFormField)
  const submitReingreso = useReingresoStore((s) => s.submitReingreso)
  const resetForm = useReingresoStore((s) => s.resetForm)

  return { formData, loading, error, response, setFormField, submitReingreso, resetForm }
}

export default useUploadReingreso
