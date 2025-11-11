export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-gradient-to-b from-[#001133] to-[#002b66] text-green-100">
      <h1 className="text-4xl font-bold text-lime-400 mb-6">
        Aplicación Interactiva con 3 Pestañas
      </h1>

      <p className="text-lg text-blue-200 max-w-lg leading-relaxed">
        Esta aplicación fue hecha por <span className="text-green-300 font-semibold">Juan Urriago</span>,  
        estas son las tres pestañas:
      </p>

      <ul className="text-left mt-6 space-y-3 text-blue-100">
        <li>🎰 <span className="text-green-400">Ruleta</span> – Detén las columnas una por una para lograr la combinación correcta.</li>
        <li>🎵 <span className="text-green-400">Sonidos Aleatorios</span> – Escucha sonidos relajantes generados al azar.</li>
        <li>🖼️ <span className="text-green-400">Fondos Dinámicos</span> – Cambia imágenes de fondo inspiradoras con un clic.</li>
      </ul>

      <p className="mt-10 text-sm text-green-200 opacity-80">
        © 2025 — Proyecto desarrollado en Next.js
      </p>
    </main>
  );
}
