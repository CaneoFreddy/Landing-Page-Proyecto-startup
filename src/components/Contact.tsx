import React from 'react';
import './Contact.css';
import { useContactForm } from '../hooks/useContactForm';

const Contact: React.FC = () => {
  const { data, status, error, updateField, submit } = useContactForm();

  const isSubmitting = status === 'submitting';
  const isSuccess = status === 'success';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit();
  };

  return (
    <section id="contacto" className="contact section-block">
      <div className="container">
        <div className="section-headline">
          <p className="eyebrow">Contacto</p>
          <h2>Reunión inicial gratis + propuesta en 72h hábiles</h2>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <span className="info-icon">01</span>
              <div>
                <h4>Reunión inicial gratis</h4>
                <p>Entendemos procesos, metas y prioridades con foco operativo.</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">02</span>
              <div>
                <h4>Propuesta en 72h hábiles</h4>
                <p>Alcance, tiempos y costos claros en CLP.</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">03</span>
              <div>
                <h4>Reuniones periódicas</h4>
                <p>Mínimo 4 al mes, presenciales o remotas, hasta finalizar. Actualizaciones posteriores según necesidad.</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              value={data.name}
              onChange={(e) => updateField('name', e.target.value)}
              disabled={isSubmitting}
              autoComplete="name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email profesional"
              value={data.email}
              onChange={(e) => updateField('email', e.target.value)}
              disabled={isSubmitting}
              autoComplete="email"
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Empresa"
              value={data.company}
              onChange={(e) => updateField('company', e.target.value)}
              disabled={isSubmitting}
              autoComplete="organization"
              required
            />
            <select
              name="budget"
              value={data.budget}
              onChange={(e) => updateField('budget', e.target.value)}
              disabled={isSubmitting}
            >
              <option value="">Presupuesto aproximado (CLP)</option>
              <option value="10m-20m">10 - 20 MM CLP</option>
              <option value="20m-50m">20 - 50 MM CLP</option>
              <option value="50m+">50+ MM CLP</option>
            </select>
            <textarea
              name="message"
              placeholder="Cuéntanos qué proceso quieres optimizar y tus plazos"
              rows={5}
              value={data.message}
              onChange={(e) => updateField('message', e.target.value)}
              disabled={isSubmitting}
              required
            />

            {error && <p className="form-message error">{error}</p>}
            {isSuccess && <p className="form-message success">Solicitud enviada. Te contactaremos para agendar el diagnóstico sin costo.</p>}

            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Solicitar diagnóstico sin costo'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
