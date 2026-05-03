import {
  ComplexityLevel,
  DeliveryMode,
  EstimationInput,
  EstimationOutput,
  ProductScope,
} from '../types/domain';

export interface IEstimationService {
  estimate(input: EstimationInput): EstimationOutput;
}

const scopeBaseWeeks: Record<ProductScope, number> = {
  'Web Platform': 10,
  'Mobile App': 12,
  'Enterprise Suite': 16,
  'AI Solution': 18,
};

const complexityMultiplier: Record<ComplexityLevel, number> = {
  Low: 1,
  Medium: 1.3,
  High: 1.7,
};

const deliveryMultiplier: Record<DeliveryMode, number> = {
  Standard: 1,
  Accelerated: 0.78,
};

const costPerWeekBySquadMember = 2400;

export class RuleBasedEstimationService implements IEstimationService {
  estimate(input: EstimationInput): EstimationOutput {
    const baseWeeks = scopeBaseWeeks[input.scope];
    const complexity = complexityMultiplier[input.complexity];
    const delivery = deliveryMultiplier[input.deliveryMode];

    const integrationPenalty = input.integrations * 0.75;
    const rawWeeks = (baseWeeks * complexity + integrationPenalty) * delivery;
    const estimatedWeeks = Math.max(6, Math.ceil(rawWeeks));

    const squadSize = this.resolveSquadSize(input.complexity, input.deliveryMode);
    const baselineBudget = estimatedWeeks * squadSize * costPerWeekBySquadMember;

    return {
      estimatedWeeks,
      squadSize,
      budgetRange: this.toBudgetRange(baselineBudget),
      confidence: input.complexity === 'High' ? 'Medium' : 'High',
    };
  }

  private resolveSquadSize(complexity: ComplexityLevel, deliveryMode: DeliveryMode): number {
    const complexitySize: Record<ComplexityLevel, number> = {
      Low: 3,
      Medium: 5,
      High: 7,
    };

    if (deliveryMode === 'Accelerated') {
      return complexitySize[complexity] + 1;
    }

    return complexitySize[complexity];
  }

  private toBudgetRange(value: number): string {
    const lower = Math.round((value * 0.9) / 1000) * 1000;
    const upper = Math.round((value * 1.2) / 1000) * 1000;
    return `${lower.toLocaleString('es-ES')} - ${upper.toLocaleString('es-ES')} EUR`;
  }
}
