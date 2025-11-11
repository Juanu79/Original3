import "./globals.css"
import Link from "next/link"

export const metadata = {
  title: "Tres pestañas",
  description: "Aplicación interactiva con 3 pestañas en Next.js",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <nav style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          padding: "1rem",
          background: "#111",
        }}>
          <Link href="/">Inicio</Link>
          <Link href="/ruleta">🎰 Ruleta</Link>
          <Link href="/sonidos">🎧 Sonidos</Link>
          <Link href="/fondos">🖼️ Fondo</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}
