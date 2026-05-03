import { ContactRequest } from '../types/domain';

export interface IContactService {
  submit(request: ContactRequest): Promise<void>;
}

export class MockContactService implements IContactService {
  async submit(request: ContactRequest): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 950));

    if (!request.email.includes('@')) {
      throw new Error('Invalid email.');
    }
  }
}

export class ApiContactService implements IContactService {
  constructor(private readonly endpoint: string) {}

  async submit(request: ContactRequest): Promise<void> {
    const response = await fetch(this.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error('Contact API request failed.');
    }
  }
}

export const createContactService = (): IContactService => {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

  if (typeof endpoint === 'string' && endpoint.length > 0) {
    return new ApiContactService(endpoint);
  }

  return new MockContactService();
};
