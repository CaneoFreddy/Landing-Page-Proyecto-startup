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
          <h2>Propuesta y Prototipo Interactivo Gratis en 72h</h2>
          <p>Déjanos tus datos o escríbenos directo por WhatsApp y agendemos la sesión de descubrimiento.</p>
          
          <div className="contact-benefits">
            <div className="info-item">
              <span className="info-icon">01</span>
              <div>
                <h4>Propuesta y Prototipo Gratis</h4>
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
            {isSuccess && <p className="form-message success">Solicitud enviada. Te contactaremos para enviarte tu propuesta y prototipo gratis.</p>}

            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Solicitar prototipo gratis'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
