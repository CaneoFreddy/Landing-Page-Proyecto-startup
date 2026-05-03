export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  summary: string;
  deliverables: string[];
  icon: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Web Platform' | 'Mobile Product' | 'Enterprise System' | 'AI Solution';
  industry: string;
  description: string;
  outcome: string;
  technologies: string[];
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  detail: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

export interface ContactRequest {
  name: string;
  email: string;
  company: string;
  message: string;
  budget: string;
}

export type ProductScope = 'Web Platform' | 'Mobile App' | 'Enterprise Suite' | 'AI Solution';
export type ComplexityLevel = 'Low' | 'Medium' | 'High';
export type DeliveryMode = 'Standard' | 'Accelerated';

export interface EstimationInput {
  scope: ProductScope;
  complexity: ComplexityLevel;
  integrations: number;
  deliveryMode: DeliveryMode;
}

export interface EstimationOutput {
  estimatedWeeks: number;
  squadSize: number;
  budgetRange: string;
  confidence: 'High' | 'Medium';
}
