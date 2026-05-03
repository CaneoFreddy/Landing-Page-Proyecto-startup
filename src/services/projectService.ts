import { projects } from '../data/siteContent';
import { ProjectItem } from '../types/domain';

export interface IProjectService {
  getProjects(): ProjectItem[];
  getCategories(): string[];
  filterByCategory(category: string): ProjectItem[];
}

export class StaticProjectService implements IProjectService {
  getProjects(): ProjectItem[] {
    return projects;
  }

  getCategories(): string[] {
    const baseCategories = new Set(projects.map((project) => project.category));
    return ['Todos', ...Array.from(baseCategories)];
  }

  filterByCategory(category: string): ProjectItem[] {
    if (category === 'Todos') {
      return projects;
    }

    return projects.filter((project) => project.category === category);
  }
}
