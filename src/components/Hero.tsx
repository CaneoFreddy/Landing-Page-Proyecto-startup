import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-bg" />
      <div className="container hero-content">
        <div className="hero-text animate-fade-up">
          <p className="eyebrow">Eficiencia operativa</p>
          <h1>Sistemas web y móviles a la medida para mejorar tu eficiencia</h1>
          <p>
            Analizamos tus procesos, eliminamos tareas manuales y construimos software que reduce
            tiempos y errores. Equipo local en Chile con foco en resultados medibles.
          </p>
          <div className="hero-buttons">
            <a className="btn btn-primary" href="#contacto">Agendar diagnóstico</a>
            <a className="btn btn-secondary" href="#proyectos">Ver proyectos</a>
          </div>
        </div>
        <div className="hero-illustration animate-slide-right">
          <div className="illustration" role="presentation">
            <article className="floating-card card-1">
              <p>Horas ahorradas</p>
              <strong>6-10h/semana</strong>
            </article>
            <article className="floating-card card-2">
              <p>Errores</p>
              <strong>15-25% menos</strong>
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
