import React, { useEffect } from 'react';
import './InfoModal.css';

interface InfoModalProps {
  isOpen: boolean;
  title: string;
  description?: string;
  details?: string[];
  onClose: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({
  isOpen,
  title,
  description,
  details = [],
  onClose,
}) => {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={title} onClick={onClose}>
      <div className="modal-card" onClick={(event) => event.stopPropagation()}>
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="modal-close" type="button" aria-label="Cerrar" onClick={onClose}>
            x
          </button>
        </div>
        {description && <p className="modal-description">{description}</p>}
        {details.length > 0 && (
          <ul className="modal-list">
            {details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        )}
        <div className="modal-actions">
          <a className="btn btn-primary" href="#contacto" onClick={onClose}>
            Agendar reunión gratuita
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
