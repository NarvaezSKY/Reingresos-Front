import Image from "next/image"

export function Header() {
  return (
    <header className="w-full bg-primary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center gap-4">
        <div className="relative w-16 h-16 flex-shrink-0">
          <Image src="/sena-logo.png" alt="SENA Logo" fill className="object-contain" priority />
        </div>
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold text-white">SENA - Servicio Nacional de Aprendizaje</h1>
          <p className="text-sm text-white/90 mt-1">Sistema de Gestión de Reingresos</p>
        </div>
      </div>
    </header>
  )
}
