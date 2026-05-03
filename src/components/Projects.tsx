import React, { useState } from 'react';
import './Projects.css';
import { useProjectCatalog } from '../hooks/useProjectCatalog';
import { ProjectItem } from '../types/domain';
import InfoModal from './InfoModal';

const Projects: React.FC = () => {
  const {
    categories,
    selectedCategory,
    setSelectedCategory,
    filteredProjects,
  } = useProjectCatalog();

  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const projectDetails: Record<string, string[]> = {
    p1: [
      'KPIs por rol y seguimiento móvil.',
      'Alertas de cumplimiento y productividad.',
      'Integración con RR.HH. y operaciones.',
    ],
    p2: [
      'Cálculo de rutas, km y variables operativas.',
      'Validaciones automáticas en liquidaciones.',
      'Reportes por flota y período.',
    ],
    p3: [
      'QR por trabajador con registro de salida.',
      'Trazabilidad completa por turno.',
      'Alertas de stock crítico.',
    ],
    p4: [
      'Flujos por correo según respuesta del proveedor.',
      'SLA y seguimiento centralizado.',
      'Historial auditado de reclamos.',
    ],
  };

  const getProjectDetails = (project: ProjectItem) => [
    ...(projectDetails[project.id] ?? []),
    `Industria: ${project.industry}`,
    `Tecnologías: ${project.technologies.join(', ')}`,
  ];

  return (
    <section id="proyectos" className="projects section-block">
      <div className="container">
        <div className="section-headline projects-headline">
          <p className="eyebrow">Proyectos a la medida</p>
          <h2>Optimización operativa con resultados medibles</h2>
          <p>Resultados estimados según contexto y alcance de cada operación.</p>
          <p>Experiencia en logística, mantenimiento y operación. Nos adaptamos a tu caso particular.</p>
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
                <div className="project-actions">
                  <button className="text-link" type="button" onClick={() => setActiveProject(project)}>
                    Ver detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <InfoModal
          isOpen={Boolean(activeProject)}
          title={activeProject?.title ?? ''}
          description={activeProject?.description}
          details={activeProject ? getProjectDetails(activeProject) : []}
          onClose={() => setActiveProject(null)}
        />
      </div>
    </section>
  );
};

export default Projects;
