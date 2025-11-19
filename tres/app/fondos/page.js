"use client";

import { useState, useEffect } from "react";
import "./fondos.css"; // <-- SE APLICA SOLO AQUÍ

export default function Page() {
  const imagenes = [
    "/fondos/cuarta.png",
    "/fondos/segunda.png",
    "/fondos/tercera.png",
    "/fondos/quinta.png",
    "/fondos/primera.png",
  ];

  const [imagenActual, setImagenActual] = useState("");

  useEffect(() => {
    setImagenActual(imagenes[0]);
  }, []);

  const cambiarFondo = () => {
    const randomIndex = Math.floor(Math.random() * imagenes.length);
    setImagenActual(imagenes[randomIndex]);
  };

  return (
    <div
      className="fondo-wrapper"
      style={{ backgroundImage: `url(${imagenActual})` }}
    >
      <div className="fondo-overlay"></div>

      <div className="fondo-content">
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
