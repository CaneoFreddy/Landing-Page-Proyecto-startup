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
          <h2>Optimicemos tu operación</h2>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <span className="info-icon">01</span>
              <div>
                <h4>Diagnóstico operativo</h4>
                <p>Detectamos dónde se pierde tiempo y qué mejorar primero.</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">02</span>
              <div>
                <h4>Plan a la medida</h4>
                <p>Roadmap con impacto, tiempos y costos claros.</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">03</span>
              <div>
                <h4>Implementación eficiente</h4>
                <p>Entregas rápidas para mejorar productividad desde el primer mes.</p>
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
              <option value="">¿Cuál es tu presupuesto aproximado?</option>
              <option value="15k-30k">15k - 30k EUR</option>
              <option value="30k-60k">30k - 60k EUR</option>
              <option value="60k+">60k+ EUR</option>
            </select>
            <textarea
              name="message"
              placeholder="Cuéntanos qué proceso quieres optimizar"
              rows={5}
              value={data.message}
              onChange={(e) => updateField('message', e.target.value)}
              disabled={isSubmitting}
              required
            />

            {error && <p className="form-message error">{error}</p>}
            {isSuccess && <p className="form-message success">Solicitud enviada. Te contactaremos en menos de 24h.</p>}

            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Cotizar optimización'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
