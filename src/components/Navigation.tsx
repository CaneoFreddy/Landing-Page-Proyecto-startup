import React, { useState } from 'react';
import './Navigation.css';
import { navLinks } from '../data/siteContent';

import whatsappImage from '../data/whatsapp.jpg';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-icon">D</span>
          <span>DevSoft</span>
        </div>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>

        <a
          className="nav-cta whatsapp"
          href="https://wa.me/56926252821?text=Hola%20DevSoft%2C%20me%20interesa%20la%20propuesta%20con%20prototipo%20interactivo%20gratis."
          target="_blank"
          rel="noopener noreferrer"
        >
          Hablar por WhatsApp
        </a>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <a
        className="whatsapp-float"
        href="https://wa.me/56926252821?text=Hola%20DevSoft%2C%20me%20interesa%20la%20propuesta%20con%20prototipo%20interactivo%20gratis."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hablar por WhatsApp"
      >
        <div className="whatsapp-float-img-wrapper">
          <img src={whatsappImage} alt="WhatsApp" className="whatsapp-img-float" />
        </div>
      </a>
    </nav>
  );
};

export default Navigation;
