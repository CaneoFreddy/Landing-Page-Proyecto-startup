import React from 'react';
import './Features.css';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      icon: '01',
      title: 'Optimización de procesos',
      description: 'Reducimos tiempos, errores y retrabajo con flujos a la medida.'
    },
    {
      icon: '02',
      title: 'UX que acelera',
      description: 'Interfaces claras que disminuyen pasos y aumentan productividad.'
    },
    {
      icon: '03',
      title: 'Automatización + datos',
      description: 'Integraciones y tableros para decisiones más rápidas.'
    },
    {
      icon: '04',
      title: 'Mejora continua',
      description: 'Medimos, ajustamos y escalamos con soporte local en Chile.'
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
