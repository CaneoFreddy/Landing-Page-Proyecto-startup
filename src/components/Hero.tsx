import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-bg" />
      <div className="container hero-content">
        <div className="hero-text animate-fade-up">
          <p className="eyebrow">Reunión inicial gratis</p>
          <h1>Optimiza tu operación con sistemas web y móviles a la medida</h1>
          <p>
            Analizamos tus procesos, eliminamos tareas manuales y construimos software que reduce
            tiempos y previene errores. Equipo local en Chile con experiencia en logística,
            mantenimiento y operación. Reunión inicial gratis y propuesta en 72h hábiles.
          </p>
          <div className="hero-buttons">
            <a className="btn btn-primary" href="#contacto">Agendar reunión gratuita</a>
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
