"use client";
import { useState, useEffect } from "react";

export default function RuletaPage() {
  const simbolos = ["🍋", "🍉", "🍇", "🍒", "⭐", "🍀"];
  const [ruletas, setRuletas] = useState(["🍋", "🍉", "🍇"]);
  const [girando, setGirando] = useState([true, true, true]);
  const [fase, setFase] = useState(0); // controla qué ruleta se detiene

  useEffect(() => {
    const intervalos = girando.map((gira, index) => {
      if (!gira) return null;
      return setInterval(() => {
        setRuletas((prev) => {
          const nuevas = [...prev];
          nuevas[index] = simbolos[Math.floor(Math.random() * simbolos.length)];
          return nuevas;
        });
      }, 100);
    });

    return () => intervalos.forEach((i) => i && clearInterval(i));
  }, [girando]);

  const manejarClick = () => {
    if (fase < 3) {
      // Detiene una ruleta a la vez
      const nuevas = [...girando];
      nuevas[fase] = false;
      setGirando(nuevas);
      setFase(fase + 1);
    } else {
      // Reinicia todo
      setGirando([true, true, true]);
      setFase(0);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center space-y-8">
      <h1 className="text-3xl font-bold text-green-400 drop-shadow-lg">
        🎰 Ruleta Interactiva
      </h1>

      <div className="flex space-x-6 text-7xl font-bold">
        {ruletas.map((r, i) => (
          <div
            key={i}
            className={`w-24 h-24 flex items-center justify-center rounded-2xl shadow-lg ${
              !girando[i]
                ? "bg-green-700 border-4 border-green-400"
                : "bg-blue-900 border-4 border-blue-400 animate-pulse"
            }`}
          >
            {r}
          </div>
        ))}
      </div>

      <button
        onClick={manejarClick}
        className="mt-6 bg-green-400 text-black px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-green-300 transition-all duration-300"
      >
        {fase < 3 ? `Detener Ruleta ${fase + 1}` : "Reiniciar 🎯"}
      </button>
    </main>
  );
}
