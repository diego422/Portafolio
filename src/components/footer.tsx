import React from "@/components/hero";

export default function footer() {
  return (
    <div className="footer">
      <div className="left-content">
        &copy; <span id="year"></span> 2024 Diego Herrera López. Todos los derechos reservados.
      </div>
      <div className="center-content">
        <img src="/images/logo.png" alt="Imagen del Footer" className="footerlogo-image" />
      </div>
      <div className="right-content">
        <div className="contacto">Contactos</div>
        <div className="flex items-center">
          <img src="/images/telefono-footer.png" alt="Teléfono" className="w-6 h-6 mr-2" />
          <p className="text-white">+506-86436053</p>
        </div>
        <div className="flex items-center">
          <img src="/images/email-footer.png" alt="email" className="w-6 h-6 mr-2" />
          <p className="text-white">diegoherreralopez9@gmail.com</p>
        </div>
      </div>
      {/* */}
      <div className="right-contents">
        <div className="redessociales">Redes Sociales</div>
        <div className="flex items-center">
          <a href="https://www.facebook.com/profile.php?id=100005786705952">
            <img src="/images/facebook-footer.png" alt="facebook" className="footer-facebook w-6 h-6 mr-2 
          transition duration-300 ease-in-out transform hover:scale-110" />{/*el transition es para el zoom*/ }
          </a>
        </div>
        <div className="flex items-center">
          <a href="https://www.linkedin.com/in/diego-herrera-lópez-aa825630b/">
            <img src="/images/likedin-footer.png" alt="likedin" className="footer-linkedin w-6 h-6 mr-2 
          transition duration-300 ease-in-out transform hover:scale-110" /> {/*el transition es para el zoom*/ }
          </a>
        </div>
      </div>
    </div>
  );
}
