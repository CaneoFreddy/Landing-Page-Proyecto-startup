import React, { useState } from 'react';
import './Features.css';
import InfoModal from './InfoModal';

interface Feature {
  icon: string;
  title: string;
  description: string;
  details: string[];
}

const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<Feature | null>(null);

  const features: Feature[] = [
    {
      icon: '01',
      title: 'Optimización de procesos',
      description: 'Reducimos tiempos, retrabajo y puntos de falla con flujos a la medida.',
      details: [
        'Mapeo de procesos y cuellos de botella.',
        'Reducción de tareas manuales repetitivas.',
        'Flujos estandarizados y trazables.',
      ],
    },
    {
      icon: '02',
      title: 'UX que acelera',
      description: 'Interfaces claras que disminuyen pasos y aumentan productividad.',
      details: [
        'Menos clics en tareas frecuentes.',
        'Diseño para escritorio y móvil.',
        'Validaciones claras y sin fricción.',
      ],
    },
    {
      icon: '03',
      title: 'Automatización + BI',
      description: 'Dashboards, KPIs a medida e integraciones para decidir mejor.',
      details: [
        'Dashboards BI por rol y área.',
        'Alertas y reportes automáticos.',
        'Integraciones con ERP, correo o planillas.',
      ],
    },
    {
      icon: '04',
      title: 'Experiencia operativa',
      description: 'Conocimiento en logística, mantenimiento y operación en Chile.',
      details: [
        'Logística, mantenimiento y operación.',
        'Adaptación a terminología del negocio.',
        'Reuniones periódicas con stakeholders.',
      ],
    }
  ];

  return (
    <section className="features section-block">
      <div className="container">
        <div className="section-headline">
          <p className="eyebrow">Eficiencia operativa</p>
          <h2>Diseño y tecnología para mejorar el rendimiento del negocio</h2>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className="feature-actions">
                <button className="text-link" type="button" onClick={() => setActiveFeature(feature)}>
                  Ver detalles
                </button>
              </div>
            </div>
          ))}
        </div>
        <InfoModal
          isOpen={Boolean(activeFeature)}
          title={activeFeature?.title ?? ''}
          description={activeFeature?.description}
          details={activeFeature?.details ?? []}
          onClose={() => setActiveFeature(null)}
        />
      </div>
    </section>
  );
};

export default Features;
