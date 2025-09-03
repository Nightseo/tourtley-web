import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TOURTLEY - Crypto Meme para Niños',
  description: 'El proyecto crypto meme más divertido para niños',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}