import { useMemo, useState } from 'react';
import { serviceContainer } from '../services/serviceContainer';

export const useProjectCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = useMemo(
    () => serviceContainer.projectService.getCategories(),
    [],
  );

  const filteredProjects = useMemo(
    () => serviceContainer.projectService.filterByCategory(selectedCategory),
    [selectedCategory],
  );

  return {
    categories,
    selectedCategory,
    setSelectedCategory,
    filteredProjects,
  };
};
