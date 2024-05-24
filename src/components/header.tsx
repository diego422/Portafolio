import Link from "next/link";
import React from "@/components/hero";

export default function Header() {
  return (
    <div className="encabezado w-full absolute text-white z-10 bg-gradient-to-br from-gray-500 to-gray-500-lg"> {/* Aplicando el color de fondo gris */}
      <nav className="containerheder relative flex items-center justify-between mx-auto p-8">
        <div className="flex items-center">
        <img src="/images/logo.png" alt="Imagen del Footer" className="headerlogo-image" />
          <Link href="/" className="inicio transition duration-300 ease-in-out transform hover:scale-110">
            Inicio
          </Link>
        </div>
        <div className="otrasseciones space-x-4 text-white flex items-center">
          <Link href="/Aboutme" className="acercademi transition duration-300 ease-in-out transform hover:scale-110">
            Curriculum
          </Link>
          <Link href="/Projects" className="proyectos transition duration-300 ease-in-out transform hover:scale-110">
            Proyectos
          </Link>
          <a href="mailto:diegoherreralopez9@gmail.com" className="calltoaction transition duration-300 ease-in-out transform hover:scale-110">
            Contrátame
          </a>
        </div>
      </nav>
    </div>
  );
}
