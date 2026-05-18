import { useState } from 'react';

import { ContactRequest } from '../types/domain';

const initialState: ContactRequest = {
  name: '',
  email: '',
  company: '',
  message: '',
  budget: '',
};

type Status = 'idle' | 'submitting' | 'success' | 'error';

export const useContactForm = () => {
  const [data, setData] = useState<ContactRequest>(initialState);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const updateField = (field: keyof ContactRequest, value: string) => {
    setData((previous) => ({ ...previous, [field]: value }));
  };

  const validate = (): boolean => {
    if (!data.name.trim() || !data.email.trim() || !data.message.trim() || !data.company.trim()) {
      setError('Completa nombre, email, empresa y mensaje.');
      return false;
    }

    if (!data.email.includes('@') || data.email.length < 6) {
      setError('Ingresa un email valido.');
      return false;
    }

    if (data.message.trim().length < 20) {
      setError('Describe tu necesidad con al menos 20 caracteres.');
      return false;
    }

    setError('');
    return true;
  };

  const submit = async (): Promise<boolean> => {
    if (!validate()) {
      setStatus('error');
      return false;
    }

    setStatus('submitting');

    try {
      const text = `Hola BinCode, me interesa la propuesta con prototipo interactivo gratis.\n\nMis datos son:\nNombre: ${data.name}\nEmail: ${data.email}\nEmpresa: ${data.company}\n\nDetalles del proyecto:\n${data.message}`;
      const url = `https://wa.me/56926252821?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
      
      setStatus('success');
      setData(initialState);
      return true;
    } catch (submissionError) {
      setStatus('error');
      setError('No fue posible abrir WhatsApp.');
      return false;
    }
  };

  return {
    data,
    status,
    error,
    updateField,
    submit,
  };
};
