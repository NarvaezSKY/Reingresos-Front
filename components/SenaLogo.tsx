"use client"

import Image from "next/image"

export function SenaLogo({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <div className={`relative ${className} flex-shrink-0`}>
      <Image 
        src="/sena-logo.png" 
        alt="SENA Logo" 
        fill 
        className="object-contain" 
        priority 
        onError={(e) => {
          // Fallback to SVG if PNG fails
          (e.target as HTMLImageElement).src = "/sena-logo.svg"
        }}
      />
    </div>
  )
}

// Componente de fallback con SVG inline
export function SenaLogoFallback({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <div className={`${className} flex-shrink-0 flex items-center justify-center`}>
      <svg 
        width="64" 
        height="64" 
        viewBox="0 0 64 64" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <circle cx="32" cy="32" r="30" fill="#00A651" stroke="#FFFFFF" strokeWidth="2"/>
        <text x="32" y="26" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" textAnchor="middle" fill="white">SENA</text>
        <text x="32" y="38" fontFamily="Arial, sans-serif" fontSize="6" textAnchor="middle" fill="white">COLOMBIA</text>
        <circle cx="32" cy="44" r="2" fill="#FFD700"/>
        <rect x="26" y="16" width="12" height="2" rx="1" fill="#FFD700"/>
      </svg>
    </div>
  )
}