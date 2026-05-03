import React from 'react';
import './Projects.css';
import { useProjectCatalog } from '../hooks/useProjectCatalog';

const Projects: React.FC = () => {
  const {
    categories,
    selectedCategory,
    setSelectedCategory,
    filteredProjects,
  } = useProjectCatalog();

  return (
    <section id="proyectos" className="projects section-block">
      <div className="container">
        <div className="section-headline projects-headline">
          <p className="eyebrow">Proyectos a la medida</p>
          <h2>Optimización operativa con resultados medibles</h2>
          <p>Resultados estimados según contexto y alcance de cada operación.</p>
        </div>

        <div className="project-filters" role="tablist" aria-label="Filtro de proyectos">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-chip ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p className="project-industry">Industria: {project.industry}</p>
                <p>{project.description}</p>
                <p className="project-outcome">✓ {project.outcome}</p>
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
