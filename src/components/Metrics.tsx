import { metrics } from '../data/siteContent';
import './Metrics.css';

const Metrics = () => {
  return (
    <section className="metrics">
      <div className="container metrics-grid">
        {metrics.map((metric) => (
          <article className="metric-card" key={metric.id}>
            <p className="metric-value">{metric.value}</p>
            <p className="metric-label">{metric.label}</p>
            <p className="metric-detail">{metric.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Metrics;
