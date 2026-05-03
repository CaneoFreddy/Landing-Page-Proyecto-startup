import React from 'react';
import './Services.css';
import { services } from '../data/siteContent';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="services section-block">
      <div className="container">
        <div className="section-headline">
          <p className="eyebrow">Optimización a la medida</p>
          <h2>Mejoramos tu eficiencia operativa con software hecho para tu negocio</h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <ul className="service-features">
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable}>{deliverable}</li>
                ))}
              </ul>
              <a className="btn btn-primary" href="#contacto">Quiero optimizar</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
