import { useMemo, useState } from 'react';
import { serviceContainer } from '../services/serviceContainer';
import {
  ComplexityLevel,
  DeliveryMode,
  EstimationInput,
  ProductScope,
} from '../types/domain';

const initialInput: EstimationInput = {
  scope: 'Web Platform',
  complexity: 'Medium',
  integrations: 2,
  deliveryMode: 'Standard',
};

export const useEstimator = () => {
  const [input, setInput] = useState<EstimationInput>(initialInput);

  const result = useMemo(
    () => serviceContainer.estimationService.estimate(input),
    [input],
  );

  const updateScope = (scope: ProductScope) => {
    setInput((previous) => ({ ...previous, scope }));
  };

  const updateComplexity = (complexity: ComplexityLevel) => {
    setInput((previous) => ({ ...previous, complexity }));
  };

  const updateDeliveryMode = (deliveryMode: DeliveryMode) => {
    setInput((previous) => ({ ...previous, deliveryMode }));
  };

  const updateIntegrations = (integrations: number) => {
    setInput((previous) => ({ ...previous, integrations }));
  };

  const saveSummary = () => {
    const summary = [
      `Scope: ${input.scope}`,
      `Complexity: ${input.complexity}`,
      `Integrations: ${input.integrations}`,
      `Delivery mode: ${input.deliveryMode}`,
      `Estimated timeline: ${result.estimatedWeeks} weeks`,
      `Estimated budget: ${result.budgetRange}`,
    ].join(' | ');

    localStorage.setItem('project_estimate_summary', summary);
  };

  return {
    input,
    result,
    updateScope,
    updateComplexity,
    updateDeliveryMode,
    updateIntegrations,
    saveSummary,
  };
};
