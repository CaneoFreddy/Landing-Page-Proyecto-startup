import { useEstimator } from '../hooks/useEstimator';
import './Estimator.css';

const Estimator = () => {
  const {
    input,
    result,
    updateScope,
    updateComplexity,
    updateDeliveryMode,
    updateIntegrations,
    saveSummary,
  } = useEstimator();

  return (
    <section id="estimacion" className="estimator section-block">
      <div className="container estimator-grid">
        <article className="estimator-panel">
          <div className="section-headline">
            <p className="eyebrow">Planificacion</p>
            <h2>Simula alcance, tiempo y rango de inversion</h2>
          </div>

          <div className="estimator-form">
            <label>
              Tipo de producto
              <select value={input.scope} onChange={(e) => updateScope(e.target.value as typeof input.scope)}>
                <option value="Web Platform">Web Platform</option>
                <option value="Mobile App">Mobile App</option>
                <option value="Enterprise Suite">Enterprise Suite</option>
                <option value="AI Solution">AI Solution</option>
              </select>
            </label>

            <label>
              Complejidad
              <select value={input.complexity} onChange={(e) => updateComplexity(e.target.value as typeof input.complexity)}>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </label>

            <label>
              Modo de entrega
              <select value={input.deliveryMode} onChange={(e) => updateDeliveryMode(e.target.value as typeof input.deliveryMode)}>
                <option value="Standard">Standard</option>
                <option value="Accelerated">Accelerated</option>
              </select>
            </label>

            <label>
              Integraciones externas: {input.integrations}
              <input
                type="range"
                min={0}
                max={8}
                value={input.integrations}
                onChange={(e) => updateIntegrations(Number(e.target.value))}
              />
            </label>
          </div>
        </article>

        <aside className="estimator-result">
          <h3>Estimacion orientativa</h3>
          <div className="result-grid">
            <div>
              <p className="result-label">Timeline</p>
              <p className="result-value">{result.estimatedWeeks} semanas</p>
            </div>
            <div>
              <p className="result-label">Squad recomendado</p>
              <p className="result-value">{result.squadSize} perfiles</p>
            </div>
            <div>
              <p className="result-label">Rango de inversion</p>
              <p className="result-value">{result.budgetRange}</p>
            </div>
            <div>
              <p className="result-label">Confianza</p>
              <p className="result-value">{result.confidence}</p>
            </div>
          </div>
          <p className="result-note">
            Esta simulacion es referencial. Refinamos con discovery tecnico y alcance validado.
          </p>
          <a className="btn btn-primary" href="#contacto" onClick={saveSummary}>
            Quiero esta propuesta
          </a>
        </aside>
      </div>
    </section>
  );
};

export default Estimator;
