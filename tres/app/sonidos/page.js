"use client";
import { useState } from "react";

export default function Sonidos() {
  const sonidos = [
    "/Disparo.mp3",
    "/Gallina.mp3",
    "/Hapinnes.mp3",
    "/insulto.mp3",
    "/sorpresa.mp3",
  ];

  const [sonidoActual, setSonidoActual] = useState(null);

  const reproducirSonido = () => {
    const random = sonidos[Math.floor(Math.random() * sonidos.length)];
    setSonidoActual(random);
    const audio = new Audio(random);
    audio.play();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-800 to-black text-white">
      <h1 className="text-3xl font-bold mb-6">🔊 Sonidos Aleatorios</h1>
      <button
        onClick={reproducirSonido}
        className="px-6 py-3 bg-green-400 text-black font-semibold rounded-xl hover:bg-green-300 transition"
      >
        Reproducir Sonido
      </button>
      {sonidoActual && <p className="mt-4 text-lg">Reproduciendo: {sonidoActual}</p>}
    </div>
  );
}
