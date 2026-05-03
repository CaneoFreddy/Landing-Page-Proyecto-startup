import { createContactService, IContactService } from './contactService';
import { IEstimationService, RuleBasedEstimationService } from './estimationService';
import { IProjectService, StaticProjectService } from './projectService';

interface ServiceContainer {
  projectService: IProjectService;
  contactService: IContactService;
  estimationService: IEstimationService;
}

export const serviceContainer: ServiceContainer = {
  projectService: new StaticProjectService(),
  contactService: createContactService(),
  estimationService: new RuleBasedEstimationService(),
};
