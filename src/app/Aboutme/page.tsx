import Hero from "@/components/hero";
import React from "@/components/hero";
import Image from "next/image";

function Aboutme() {
  return (
    <div className="container mx-auto bg-gradient-to-br from-gray-300 to-gray-500 p-6 shadow-md rounded-lg flex items-center">{/*el fondo*/}
      <div className="container2 w-full sm:w-3/4 bg-gray-800 rounded-lg">{/*Borde*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gradient-to-br from-blue-300 to-gray-500">{/*Donde va la imagen*/}
          <div className="ml-10 mr-10 md:col-span-1">
            <Image
              src="/images/usuario2.png"
              width={125}
              height={100}
              alt="Picture of the author"
              className="rounded-lg"
            />
          </div>
          <div className="md:col-span-2 bg-gradient-to-br from-gray-300 to-gray-500-lg">{/*derecha imagen*/}
            <h5 className="nombre">Diego Starling Herrera López</h5>
            <h1 className="carrera">Informático</h1>
            <h1 className="contactoacercademi">Contacto:</h1>
            <div className="telefono-img flex items-center">
              <img src="/images/telefono1.png" alt="Teléfono" className="w-6 h-6 mr-2" />
              <p className="">+506-86436053</p>
            </div>
            <div className="email-img flex items-center">
              <img src="/images/email1.png" alt="email" className="w-6 h-6 mr-2" />
              <p className="">diegoherreralopez9@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container bg-gray-800 w-full sm:w-3/4 rounded-lg">{/*borde de la segunda columna*/}
        <Hero title="Acerca de mí"
          descriptions={["Me llamo Diego Herrera López y soy un junior en el campo de redes y comunicación de datos, administración de bases de datos y programación. Actualmente, estoy cursando el tercer año de la carrera de Informática Empresarial, lo que me ha permitido adquirir sólidos conocimientos y habilidades en estas áreas. Mi pasión por la tecnología y la constante evolución del entorno empresarial me impulsan a seguir aprendiendo y desarrollándome profesionalmente."]}>
        </Hero>

        <Hero title="Formación académica"
          descriptions={["1.Conclusión de Educación Técnica Media en Informática Empresarial, Colegio Técnico Profesional Carlos Manuel Vicente Castro, 2021.",
            "2.Conclusión de Estudios de la Educación General Básica, Colegio Técnico Profesional Carlos Manuel Vicente Castro, 2018.", "3.Conclusión de Segundo Ciclo de la Educación General Básica, Escuela Álvaro París Steffens, 2015."
          ]}>
        </Hero>

        <Hero title="Habilidades"
          descriptions={["1.Trabajo en equipo.", "2.Junior en progrmación (Python y Java).", "3.Capacidad de adaptación a nuevos entornos y herramientas."]}>
        </Hero>

        <Hero title="Experiencia Laboral"
          descriptions={["1.Práctica supervisada en la Municipalidad de Golfito, Colegio Técnico Profesional Carlos Manuel Vicente Castro, 2021."]}>
        </Hero>

      </div>

    </div>

  );
}

export default Aboutme;
