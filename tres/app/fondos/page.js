"use client";
import { useState, useEffect } from "react";

export default function Page() {
  const imagenes = [
    "/fondos/cuarta.png",
    "/fondos/segunda.png",
    "/fondos/tercera.png",
    "/fondos/quinta.png",
    "/fondos/primera.png"
  ];

  const [imagenActual, setImagenActual] = useState("");

  useEffect(() => {
    // FORZAR LA CARGA INICIAL EN MÓVIL
    setImagenActual(imagenes[0]);
  }, []);

  const cambiarFondo = () => {
    const randomIndex = Math.floor(Math.random() * imagenes.length);
    setImagenActual(imagenes[randomIndex]);
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col justify-center items-center relative overflow-hidden"
      style={{
        backgroundImage: imagenActual ? `url(${imagenActual})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        WebkitBackgroundSize: "cover",
        transition: "background-image 0.4s ease-in-out",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-3xl font-bold mb-4 drop-shadow-lg">
          Fondos Aleatorios
        </h1>

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
