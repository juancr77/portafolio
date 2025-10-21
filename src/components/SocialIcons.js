import React from 'react';
import './SocialIcons.css';
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaSpotify,
  FaLinkedinIn, // <-- CAMBIO AQUÍ
} from 'react-icons/fa';

function SocialIcons() {
  return (
    <div className="social-icons-container">
      <div className="social-icons">
        <a
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
          href="https://open.spotify.com/intl-es/artist/4gaAJvyDil7BsoiHPJeeaI?si=Cf_j_umRSZuKFqOdOwovwA" // <-- OJO: Este enlace de Spotify parece incorrecto.
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSpotify className="icon spotify" />
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="icon linkedin" /> {/* <-- CAMBIO AQUÍ */}
        </a>
      </div>

      <div className="whatsapp-buttons">
        <a
          href="https://wa.me/528441638646"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button white"
        >
          <FaWhatsapp className="whatsapp-icon" /> Contacto 1
        </a>

        <a
          href="https://wa.me/528443426006"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button white"
        >
          <FaWhatsapp className="whatsapp-icon" /> Contacto 2
        </a>
      </div>
    </div>
  );
}

export default SocialIcons;