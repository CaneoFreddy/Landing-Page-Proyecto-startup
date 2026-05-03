import { processSteps } from '../data/siteContent';
import './Process.css';

const Process = () => {
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
