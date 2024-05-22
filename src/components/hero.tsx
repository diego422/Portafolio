// Importa la interfaz StaticImageData de "next/image"
import type { StaticImageData } from "next/image";

// Importa la imagen desde "next/image"
import Image from "next/image";

// Define la interfaz HeroProps
interface HeroProps {
  title: string;
  descriptions: string[];
}

// Componente funcional Hero
export default function Hero(props: HeroProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gradient-to-br from-gray-300 to-gray-500 rounded-lg">
      <div className="p-10 md:col-span-1">
        <h2 className="text-lg text-blue-900">
          {props.title}
        </h2>
      </div>
      <div className=" md:col-span-2  p-2">
        {props.descriptions.map((description, index) => (
          <p key={index} className="text-black mb-3">
            {description}
          </p>
        ))}
      </div>
    </div>

    
  );
}