import type React from "react"
import type { Metadata } from "next"
import { Work_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

const _workSans = Work_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Formulario reingresos SENA",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${_workSans.className}`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
