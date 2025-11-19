"use client";
import { useState } from "react";

export default function Page() {
  const imagenes = [
    "/fondos/cuarta.jpg",
    "/fondos/segunda.jpg",
    "/fondos/tercera.jpg",
    "/fondos/quinta.jpg",
    "/fondos/primera.jpg",
  ];

  const [imagenActual, setImagenActual] = useState(imagenes[0]);

  const cambiarFondo = () => {
    const randomIndex = Math.floor(Math.random() * imagenes.length);
    setImagenActual(imagenes[randomIndex]);
  };

  return (
    <div
      className="h-screen w-screen flex flex-col justify-center items-center relative"
      style={{
        backgroundImage: `url(${imagenActual})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-3xl font-bold mb-4">Fondos Aleatorios</h1>
        <button
          onClick={cambiarFondo}
          className="px-5 py-3 bg-white text-black rounded-xl font-semibold shadow-lg hover:bg-gray-200 transition"
        >
          Cambiar Fondo
        </button>
      </div>
    </div>
  );
}
