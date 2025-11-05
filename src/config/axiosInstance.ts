import axios from "axios"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000/api/items"

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
})

// Puedes añadir interceptors si lo requieres
axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    // Aquí puedes estandarizar errores
    return Promise.reject(error)
  }
)

export default axiosInstance