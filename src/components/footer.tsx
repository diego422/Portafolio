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
        <div className="flex items-center transition duration-300 ease-in-out transform hover:scale-110">
          <img src="/images/telefono-footer.png" alt="Teléfono" className="w-6 h-6 mr-2" />
          <a href={`https://wa.me/50686436053`} className="text-white">+506-86436053</a>
        </div>
        <div className="flex items-center transition duration-300 ease-in-out transform hover:scale-110">
          <img src="/images/email-footer.png" alt="email" className="w-6 h-6 mr-2" />
          <a href="mailto: diegoherreralopez9@gmail.com" className="text-white ">diegoherreralopez9@gmail.com</a>
        </div>
      </div>
      {/* */}
      <div className="right-contents">
        <div className="redessociales">Redes Sociales</div>
        <div className="flex items-center">
          <a href="https://www.facebook.com/profile.php?id=100005786705952" className="flex items-center transition duration-300 ease-in-out transform hover:scale-110">
            <img src="/images/facebook-footer.png" alt="facebook" className="footer-facebook w-6 h-6 mr-2" />
            <span className="text-white">Facebook</span>
          </a>
        </div>
        <div className="flex items-center">
          <a href="https://www.linkedin.com/in/diego-herrera-lópez-aa825630b/" className="flex items-center transition duration-300 ease-in-out transform hover:scale-110">
            <img src="/images/likedin-footer.png" alt="likedin" className="footer-linkedin w-6 h-6 mr-2" />
            <span className="text-white">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}
