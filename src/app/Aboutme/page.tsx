import Hero from "@/components/hero";
import React from "@/components/hero";
import Image from "next/image";

function AboutMe() {
  return (
    <div className="container mx-auto bg-gradient-to-br from-gray-300 to-gray-500 p-6 shadow-md rounded-lg flex items-center">
      <div className="container2 w-full sm:w-3/4 bg-gray-800 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gradient-to-br from-gray-300 to-gray-500">
          <div className="ml-10 mr-10 md:col-span-1">
            <Image
              src="/images/usuario2.png"
              width={125}
              height={100} 
              alt="Picture of the author"
              className="rounded-lg"
            />
          </div>
          <div className="md:col-span-2 bg-gradient-to-br from-gray-300 to-gray-500-lg">
            <h5 className="nombre">Diego Herrera López</h5>
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
      <div className="container bg-gray-800 w-full sm:w-3/4 rounded-lg">
        <Hero title="Acerca de mí"
        descriptions={["Lorem ipsum dolor sit amet",
        "consectetur adipiscing elit. Phasellus imperdiet ... ",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet"]}>
        </Hero>

        <Hero title="Educación"
        descriptions={["titulo"]}>
        </Hero>

        <Hero title="Habilidades"
        descriptions={["1", "2", "3"]}>
        </Hero>

        <Hero title="Experiencia Laboral"
        descriptions={["Experiencia en procrastinación....", "Experiencia en joderle la vida a la gente"]}>
        </Hero>

        </div>

</div>

  );
}

export default AboutMe;
