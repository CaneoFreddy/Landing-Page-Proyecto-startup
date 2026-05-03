import React, { useState } from 'react';
import './Navigation.css';
import { navLinks } from '../data/siteContent';

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
          href="https://wa.me/56926252821?text=Hola%20DevSoft%2C%20quiero%20agendar%20la%20reunion%20inicial%20gratis."
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
    </nav>
  );
};

export default Navigation;
