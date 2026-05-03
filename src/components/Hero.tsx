import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-bg" />
      <div className="container hero-content">
        <div className="hero-text animate-fade-up">
          <p className="eyebrow">Propuesta y Prototipo Interactivo Gratis</p>
          <h1 className="hero-title">
            Transformamos tus procesos con software a medida
          </h1>
          <p className="hero-description">
            Diseñamos y desarrollamos soluciones web y móviles que reducen costos y aceleran tu empresa. Nos encargamos de todo: desde la idea hasta el mantenimiento y operación. Obtén una propuesta estratégica y tu prototipo interactivo sin costo.
          </p>
          <div className="hero-buttons">
            <a className="btn btn-primary" href="#contacto">Solicitar prototipo gratis</a>
            <a className="btn btn-secondary" href="#proyectos">Ver proyectos</a>
          </div>
        </div>
        <div className="hero-illustration animate-slide-right">
          <div className="illustration" role="presentation">
            <article className="floating-card card-1">
              <p>Horas ahorradas</p>
              <strong>10-15h/semana</strong>
            </article>
            <article className="floating-card card-2">
              <p>Prevención</p>
              <strong>15-25% errores evitados</strong>
            </article>
            <article className="floating-card card-3">
              <p>Control</p>
              <strong>Trazabilidad completa</strong>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
