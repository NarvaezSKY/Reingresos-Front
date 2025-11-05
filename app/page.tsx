import { Header } from "@/components/header"
import { ReingresoForm } from "@/components/reingreso-form"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <Header />
      <main className="py-12 px-4">
        <ReingresoForm />
      </main>
    </div>
  )
}
