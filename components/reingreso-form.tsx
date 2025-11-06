"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useUploadReingreso } from "@/src/hooks/useUploadReingreso"
import { toast } from "sonner"

export function ReingresoForm() {
  const { formData, loading, error, setFormField, submitReingreso, resetForm } = useUploadReingreso()

  const centrosFormacion = {
    "9307": "CENTRO DE COMERCIO Y SERVICIOS",
    "9221": "CENTRO DE TELEINFORMATICA Y PRODUCCIÓN INDUSTRIAL",
    "9113": "CENTRO AGROPECUARIO"
  }

  const handleCodigoCentroChange = (codigo: string) => {
    setFormField("codigoCentro", codigo)
    setFormField("centroFormacion", centrosFormacion[codigo as keyof typeof centrosFormacion] || "")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    await submitReingreso(
      (response) => {
        // Success callback
        if (response.success) {
          toast.success("Reingreso enviado exitosamente", {
            description: response.message || "Su solicitud ha sido procesada correctamente"
          })
          // Limpiar formulario automáticamente después del envío exitoso
          resetForm()
        } else {
          toast.error("Error al enviar", {
            description: response.message || "Ocurrió un error al procesar su solicitud"
          })
        }
      },
      (error) => {
        // Error callback
        toast.error("Error de conexión", {
          description: "No se pudo conectar con el servidor. Intente nuevamente."
        })
        console.error("Error submitting reingreso:", error)
      }
    )
  }

  return (
    <Card className="w-full max-w-5xl mx-auto shadow-2xl border-0 overflow-hidden">
      <CardHeader className="bg-linear-to-r from-primary to-primary/90 text-white py-8">
        <CardTitle className="text-3xl font-bold text-center text-balance">Formulario para Reingresos</CardTitle>
        <p className="text-center text-white/90 mt-2 text-sm">
          Complete todos los campos requeridos para procesar su solicitud
        </p>
      </CardHeader>
      <CardContent className="p-8 md:p-10">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Año */}
            <div className="space-y-3">
              <Label htmlFor="año" className="text-sm font-semibold text-foreground">
                Año
              </Label>
              <Select value={formData.año} onValueChange={(value) => setFormField("año", value)}>
                <SelectTrigger id="año" className="h-11 border-2 focus:border-primary">
                  <SelectValue placeholder="Seleccione año" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2025">2025</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Fecha de Registro */}
            <div className="space-y-3">
              <Label htmlFor="fechaRegistro" className="text-sm font-semibold text-foreground">
                Fecha de Registro
              </Label>
              <Input
                id="fechaRegistro"
                type="date"
                className="h-11 border-2 focus:border-primary"
                value={formData.fechaRegistro}
                onChange={(e) => setFormField("fechaRegistro", e.target.value)}
              />
            </div>

            {/* Código Centro Formación */}
            <div className="space-y-3">
              <Label htmlFor="codigoCentro" className="text-sm font-semibold text-foreground">
                Código Centro Formación
              </Label>
              <Select value={formData.codigoCentro} onValueChange={handleCodigoCentroChange}>
                <SelectTrigger id="codigoCentro" className="h-11 border-2 focus:border-primary">
                  <SelectValue placeholder="Seleccione código" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9307">9307</SelectItem>
                  <SelectItem value="9221">9221</SelectItem>
                  <SelectItem value="9113">9113</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Centro de Formación */}
            <div className="space-y-3">
              <Label htmlFor="centroFormacion" className="text-sm font-semibold text-foreground">
                Centro de Formación
              </Label>
              <Input
                id="centroFormacion"
                type="text"
                placeholder="Selecciona un código de centro de formación"
                className="h-11"
                value={formData.centroFormacion}
                readOnly
              />
            </div>

            {/* Tipo de Documento */}
            <div className="space-y-3">
              <Label htmlFor="tipoDocumento" className="text-sm font-semibold text-foreground">
                Tipo de Documento
              </Label>
              <Select
                value={formData.tipoDocumento}
                onValueChange={(value) => setFormField("tipoDocumento", value)}
              >
                <SelectTrigger id="tipoDocumento" className="h-11 border-2 focus:border-primary">
                  <SelectValue placeholder="Seleccione tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="TI">TI - Tarjeta de Identidad</SelectItem>
                  <SelectItem value="CC">CC - Cédula de Ciudadanía</SelectItem>
                  <SelectItem value="CE">CE - Cédula de Extranjería</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Número Documento */}
            <div className="space-y-3">
              <Label htmlFor="numeroDocumento" className="text-sm font-semibold text-foreground">
                Número Documento
              </Label>
              <Input
                id="numeroDocumento"
                type="number"
                placeholder="Ingrese número"
                className="h-11 border-2 focus:border-primary"
                value={formData.numeroDocumento}
                onChange={(e) => setFormField("numeroDocumento", e.target.value)}
              />
            </div>

            {/* Aspirante */}
            <div className="space-y-3 md:col-span-2">
              <Label htmlFor="aspirante" className="text-sm font-semibold text-foreground">
                Aspirante (Nombre)
              </Label>
              <Input
                id="aspirante"
                type="text"
                placeholder="Nombre completo del aspirante"
                className="h-11 border-2 focus:border-primary"
                value={formData.aspirante}
                onChange={(e) => setFormField("aspirante", e.target.value)}
              />
            </div>

            {/* N° Acta */}
            <div className="space-y-3">
              <Label htmlFor="numeroActa" className="text-sm font-semibold text-foreground">
                N° Acta
              </Label>
              <Input
                id="numeroActa"
                type="number"
                placeholder="Ingrese número de acta"
                className="h-11 border-2 focus:border-primary"
                value={formData.numeroActa}
                onChange={(e) => setFormField("numeroActa", e.target.value)}
              />
            </div>

            {/* Carpeta URL */}
            <div className="space-y-3">
              <Label htmlFor="carpetaURL" className="text-sm font-semibold text-foreground">
                Enlace de la carpeta
              </Label>
              <Input
                id="carpetaURL"
                type="url"
                placeholder="https://..."
                className="h-11 border-2 focus:border-primary"
                value={formData.carpetaURL || ""}
                onChange={(e) => setFormField("carpetaURL", e.target.value)}
              />
            </div>

            {/* N° Resolución */}
            <div className="space-y-3">
              <Label htmlFor="numeroResolucion" className="text-sm font-semibold text-foreground">
                N° Resolución
              </Label>
              <Input
                id="numeroResolucion"
                type="number"
                placeholder="Ingrese número"
                className="h-11 border-2 focus:border-primary"
                value={formData.numeroResolucion}
                onChange={(e) =>
                  setFormField("numeroResolucion", e.target.value)
                }
              />
            </div>

            {/* Fecha Solicitud */}
            <div className="space-y-3">
              <Label htmlFor="fechaSolicitud" className="text-sm font-semibold text-foreground">
                Fecha Solicitud
              </Label>
              <Input
                id="fechaSolicitud"
                type="date"
                className="h-11 border-2 focus:border-primary"
                value={formData.fechaSolicitud}
                onChange={(e) => setFormField("fechaSolicitud", e.target.value)}
              />
            </div>

            {/* Ficha Origen */}
            <div className="space-y-3">
              <Label htmlFor="fichaOrigen" className="text-sm font-semibold text-foreground">
                Ficha Origen
              </Label>
              <Input
                id="fichaOrigen"
                type="number"
                placeholder="Ingrese número"
                className="h-11 border-2 focus:border-primary"
                value={formData.fichaOrigen}
                onChange={(e) => setFormField("fichaOrigen", e.target.value)}
              />
            </div>

            {/* Ficha Destino */}
            <div className="space-y-3">
              <Label htmlFor="fichaDestino" className="text-sm font-semibold text-foreground">
                Ficha Destino
              </Label>
              <Input
                id="fichaDestino"
                type="number"
                placeholder="Ingrese número"
                className="h-11 border-2 focus:border-primary"
                value={formData.fichaDestino}
                onChange={(e) => setFormField("fichaDestino", e.target.value)}
              />
            </div>

            {/* Opción Aplicada */}
            <div className="space-y-3">
              <Label htmlFor="opcionAplicada" className="text-sm font-semibold text-foreground">
                Opción Aplicada
              </Label>
              <Select
                value={formData.opcionAplicada}
                onValueChange={(value) => setFormField("opcionAplicada", value)}
              >
                <SelectTrigger id="opcionAplicada" className="h-11 border-2 focus:border-primary">
                  <SelectValue placeholder="Seleccione opción" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="traslado">Traslado</SelectItem>
                  <SelectItem value="inscripcion">Inscripción especial</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Estado SOFIA Plus */}
            <div className="space-y-3 md:col-span-2">
              <Label htmlFor="estadoSofia" className="text-sm font-semibold text-foreground">
                Estado SOFIA Plus
              </Label>
              <Select
                value={formData.estadoSofia}
                onValueChange={(value) => setFormField("estadoSofia", value)}
              >
                <SelectTrigger id="estadoSofia" className="h-11 border-2 focus:border-primary">
                  <SelectValue placeholder="Seleccione estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="induccion">En inducción</SelectItem>
                  <SelectItem value="formacion">En formación</SelectItem>
                  <SelectItem value="certificar">Por certificar</SelectItem>
                  <SelectItem value="certificado">Certificado</SelectItem>
                  <SelectItem value="cancelado">Cancelado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center items-center gap-4 pt-6">
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={resetForm}
              disabled={loading}
              className="cursor-pointer w-full md:w-auto px-16 h-12 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              Limpiar Formulario
            </Button>
            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="cursor-pointer w-full md:w-auto px-16 h-12 bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? "Enviando..." : "Subir Formulario"}
            </Button>
          </div>

          {/* Power BI Button */}
          <div className="flex justify-center pt-4">
            <Button
              type="button"
              variant="outline"

              size="lg"
              onClick={() => window.open("https://app.powerbi.com/view?r=eyJrIjoiODhhOWMzMmEtZWM2Ny00YjBlLTlmMDUtMzUzMWYyNTBmMzQyIiwidCI6ImNiYzJjMzgxLTJmMmUtNGQ5My05MWQxLTUwNmM5MzE2YWNlNyIsImMiOjR9", "_blank")}
              className="w-full md:w-auto px-16 h-12 border-2 cursor-pointer border-primary text-primary hover:bg-primary hover:text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              Consultar Power BI
            </Button>
          </div>

          {/* Error display */}
          {error && (
            <div className="flex justify-center pt-4">
              <div className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-md p-3 max-w-md text-center">
                {error}
              </div>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
