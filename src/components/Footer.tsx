import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>BinCode</h3>
            <p>
              Especialistas en aplicaciones web y móviles que crecen con tu negocio.
              Confiables, rápidas y hermosas.
            </p>
            <div className="social-links">
              <a href="#" title="LinkedIn">LI</a>
              <a href="#" title="GitHub">GH</a>
              <a href="#" title="Email">@</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Servicios</h4>
            <ul>
              <li><a href="#servicios">Aplicaciones Web</a></li>
              <li><a href="#servicios">Aplicaciones Móviles</a></li>
              <li><a href="#servicios">Consultoría Técnica</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#proyectos">Proyectos</a></li>
              <li><a href="#proceso">Proceso</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} BinCode. Todos los derechos reservados.</p>
          <p>Aplicaciones web y móviles que transforman negocios.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
