import {
  MetricItem,
  NavLink,
  ProcessStep,
  ProjectItem,
  ServiceItem,
} from '../types/domain';

export const navLinks: NavLink[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
];

export const metrics: MetricItem[] = [
  { id: 'm1', value: '+60', label: 'Sistemas a la medida', detail: 'Optimización de procesos en empresas chilenas.' },
  { id: 'm2', value: '10-15h/sem', label: 'Horas liberadas', detail: 'En tareas administrativas y operativas.' },
  { id: 'm3', value: '15-25%', label: 'Prevención de errores', detail: 'Validaciones y controles en flujos críticos.' },
  { id: 'm4', value: '72h hábiles', label: 'Propuesta inicial', detail: 'Después del diagnóstico sin costo.' },
];

export const services: ServiceItem[] = [
  {
    id: 's1',
    title: 'Aplicaciones Web',
    summary: 'Plataformas web a la medida para optimizar ventas y procesos internos.',
    deliverables: ['UX enfocada en eficiencia', 'Automatización de tareas', 'Paneles de control'],
    icon: 'W',
  },
  {
    id: 's2',
    title: 'Aplicaciones Móviles',
    summary: 'Apps móviles para equipos y clientes, reduciendo tiempos y errores en terreno.',
    deliverables: ['React Native', 'Modo offline', 'Integración con tu sistema'],
    icon: 'M',
  },
  {
    id: 's3',
    title: 'Consultoría Técnica',
    summary: 'Optimización de procesos con dashboards BI, KPIs a medida y soluciones en Power Apps.',
    deliverables: ['Dashboards BI', 'KPIs a medida', 'Power Apps y automatizaciones'],
    icon: 'E',
  },
];

export const projects: ProjectItem[] = [
  {
    id: 'p1',
    title: 'Sistema de rendimiento personal',
    category: 'Mobile Product',
    industry: 'RR.HH.',
    description: 'Plataforma de desempeño con métricas a la medida y conexión a app móvil en React Native.',
    outcome: 'Ahorro promedio de 10-12 horas semanales en seguimiento y 12% más cumplimiento de metas en 90 días.',
    technologies: ['Angular', 'PostgreSQL', 'Node.js', 'React Native'],
  },
  {
    id: 'p2',
    title: 'Sistema de liquidación de transporte',
    category: 'Enterprise System',
    industry: 'Transporte',
    description: 'Liquidaciones por rutas, km, carga y variables operativas, con gestión completa de rutas.',
    outcome: 'Ahorro de 10-12 horas semanales en liquidaciones y prevención de errores en cálculos.',
    technologies: ['Angular', 'PostgreSQL', 'Node.js'],
  },
  {
    id: 'p3',
    title: 'Gestión de repuestos con QR',
    category: 'Enterprise System',
    industry: 'Mantenimiento',
    description: 'Control de stock con QR y app móvil para escaneo, con trazabilidad por trabajador y turno.',
    outcome: 'Reducción de pérdidas hasta un 20% en 6 meses y pérdidas evitadas estimadas en CLP 40 millones al año.',
    technologies: ['Angular', 'PostgreSQL', 'Node.js', 'React Native'],
  },
  {
    id: 'p4',
    title: 'Sistema de reclamos a proveedores',
    category: 'Web Platform',
    industry: 'Abastecimiento',
    description: 'Gestión de reclamos con flujos por correo según respuestas del proveedor y control de SLA.',
    outcome: '10-12 horas semanales menos en gestión y 18% menos reclamos vencidos.',
    technologies: ['Angular', 'PostgreSQL', 'Node.js'],
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: 'ps1',
    title: '1. Propuesta y Prototipo Interactivo Gratis',
    description: 'Diagnóstico sin costo y propuesta en 72h hábiles.',
  },
  {
    id: 'ps2',
    title: '2. Implementación con reuniones',
    description: 'Reuniones periódicas (mín. 4 al mes), presenciales o remotas, hasta terminar el sistema.',
  },
  {
    id: 'ps3',
    title: '3. Entrega y mejoras',
    description: 'Ajustes finales y actualizaciones posteriores según necesidad.',
  },
];

