import Link from "next/link";
import React from "@/components/hero";

export default function Header() {
  return (
    <div className="w-full absolute text-white z-10">
      <nav className="containerheder relative flex items-center justify-between mx-auto p-8">
        <div className="flex items-center">
          <Link href="/" className="inicio transition duration-300 ease-in-out transform hover:scale-110">
            Inicio
          </Link>
        </div>
        <div className="otrasseciones space-x-4 text-white flex items-center">
          <Link href="/Aboutme" className="acercademi transition duration-300 ease-in-out transform hover:scale-110">
            Acerca de mí
          </Link>
          <Link href="/Projects" className="proyectos transition duration-300 ease-in-out transform hover:scale-110">
            Proyectos
          </Link>
          <Link href="/Call To Action" className="calltoaction transition duration-300 ease-in-out transform hover:scale-110">
            Call To Action
          </Link>
        </div>
      </nav>
    </div>
  );
}
