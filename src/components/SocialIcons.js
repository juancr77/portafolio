import React from 'react';
import './SocialIcons.css';
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaSpotify,
  FaLinkedinIn,
} from 'react-icons/fa';

function SocialIcons() {
  return (
    <div className="social-icons-container">
      {/* --- ICONOS GRANDES --- */}
      <div className="social-icons">
        {/* <a
          href="https://www.instagram.com/TUAdeCSaltillo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="icon instagram" />
        </a>
        <a
          href="https://www.facebook.com/tunauadec.saltillocoahuila"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="icon facebook" />
        </a>
        <a
          href="https://open.spotify.com/intl-es/artist/4gaAJvyDil7BsoiHPJeeaI"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSpotify className="icon spotify" />
        </a> */}
        <a
          href="https://wa.me/528445855829" // <-- Pega tu número de WhatsApp aquí
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="icon whatsapp" />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="icon linkedin" />
        </a>
      </div>

      {/* --- GRUPO DE BOTONES --- */}
      {/* Uní ambos botones en un solo contenedor para mejor estructura */}
      <div className="button-group">
        <a
          href="https://www.linkedin.com/in/juan-cruz-fh/"
          target="_blank"
          rel="noopener noreferrer"
          // Añadí la clase "linkedin-btn" para el hover azul
          className="contact-button linkedin-btn"
        >
          <FaLinkedinIn className="contact-icon" /> LinkedIn
        </a>
        <a
          href="https://wa.me/528443426006"
          target="_blank"
          rel="noopener noreferrer"
          // Añadí la clase "whatsapp-btn" para el hover verde
          className="contact-button whatsapp-btn"
        >
          <FaWhatsapp className="contact-icon" /> Contacto
        </a>
      </div>
    </div>
  );
}

export default SocialIcons;
