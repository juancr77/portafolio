import React from 'react';
import { Helmet } from 'react-helmet'; // Importamos react-helmet
import './SocialIcons.css';
import { FaInstagram, FaFacebook, FaWhatsapp, FaSpotify } from 'react-icons/fa';

function SocialIcons() {
  return (


    
    <div className="social-icons-container">
      {/* Agregamos las etiquetas meta dinámicamente */}
    
      <div className="social-icons">
        <a href="https://www.instagram.com/TUAdeCSaltillo" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon instagram" />
        </a>
        <a href="https://www.facebook.com/tunauadec.saltillocoahuila" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon facebook" />
        </a>
        
        <a href="https://open.spotify.com/intl-es/artist/4gaAJvyDil7BsoiHPJeeaI?si=Cf_j_umRSZuKFqOdOwovwA" target="_blank" rel="noopener noreferrer">
          <FaSpotify className="icon spotify" />
        </a>

      </div>

      {/* Botón de contacto con WhatsApp */}
      <a href="https://wa.me/528441638646" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
        <FaWhatsapp className="whatsapp-icon" /> Contacto 1
      </a>

      <a href="https://wa.me/528443426006" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
        <FaWhatsapp className="whatsapp-icon" /> Contacto 2
      </a>
    </div>
  );
}

export default SocialIcons;
