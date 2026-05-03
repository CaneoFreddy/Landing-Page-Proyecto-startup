import { useState } from 'react';
import { processSteps } from '../data/siteContent';
import './Process.css';
import InfoModal from './InfoModal';

const Process = () => {
  const [activeStepId, setActiveStepId] = useState<string | null>(null);

  const stepDetails: Record<string, string[]> = {
    ps1: [
      'Reunión inicial gratis y levantamiento de procesos.',
      'Priorización de mejoras por impacto operativo.',
      'Definición de objetivos y KPIs iniciales.',
    ],
    ps2: [
      'Reuniones periódicas (min. 4 al mes).',
      'Diseño UX y desarrollo incremental.',
      'Validación continua con el equipo del cliente.',
    ],
    ps3: [
      'Entrega final con capacitación básica.',
      'Ajustes y mejoras posteriores según necesidad.',
      'Evolución del sistema con nuevos requerimientos.',
    ],
  };

  const activeStep = processSteps.find((step) => step.id === activeStepId) ?? null;

  return (
    <section id="proceso" className="process section-block">
      <div className="container">
        <div className="section-headline">
          <p className="eyebrow">Proceso claro</p>
          <h2>De idea a producto en 3 pasos simples</h2>
        </div>

        <div className="process-grid">
          {processSteps.map((step, index) => (
            <article className="process-card" key={step.id}>
              <span className="process-index">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <div className="process-actions">
                <button className="text-link" type="button" onClick={() => setActiveStepId(step.id)}>
                  Ver detalles
                </button>
              </div>
            </article>
          ))}
        </div>
        <InfoModal
          isOpen={Boolean(activeStep)}
          title={activeStep?.title ?? ''}
          description={activeStep?.description}
          details={activeStep ? stepDetails[activeStep.id] : []}
          onClose={() => setActiveStepId(null)}
        />
      </div>
    </section>
  );
};

export default Process;
