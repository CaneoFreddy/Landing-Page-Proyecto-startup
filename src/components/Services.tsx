import React, { useState } from 'react';
import './Services.css';
import { services } from '../data/siteContent';
import InfoModal from './InfoModal';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<(typeof services)[number] | null>(null);

  const serviceDetails: Record<string, string[]> = {
    s1: [
      'Optimiza flujos internos y front-office.',
      'Integraciones con sistemas actuales.',
      'Paneles y KPIs para seguimiento diario.',
    ],
    s2: [
      'Operación en terreno con modo offline.',
      'Escaneo QR y trazabilidad por usuario.',
      'Notificaciones y alertas operativas.',
    ],
    s3: [
      'Dashboards BI y KPIs a medida.',
      'Power Apps para procesos específicos.',
      'Automatizaciones y gobierno de datos.',
    ],
  };

  return (
    <section id="servicios" className="services section-block">
      <div className="container">
        <div className="section-headline">
          <p className="eyebrow">Optimización a la medida</p>
          <h2>Mejoramos tu eficiencia operativa con software hecho para tu negocio</h2>
          <p>Experiencia en logística, mantenimiento y operación. Estudiamos tu caso y proponemos mejoras concretas.</p>
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
              <div className="service-actions">
                <button className="text-link" type="button" onClick={() => setActiveService(service)}>
                  Ver detalles
                </button>
                <a className="btn btn-primary" href="#contacto">Quiero optimizar</a>
              </div>
            </div>
          ))}
        </div>
        <InfoModal
          isOpen={Boolean(activeService)}
          title={activeService?.title ?? ''}
          description={activeService?.summary}
          details={activeService ? serviceDetails[activeService.id] : []}
          onClose={() => setActiveService(null)}
        />
      </div>
    </section>
  );
};

export default Services;
