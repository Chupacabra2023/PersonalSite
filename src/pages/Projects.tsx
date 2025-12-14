import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { projects } from '../data/projects';
import './Projects.css';

type Category = 'all' | 'school' | 'personal';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="projects-page">
      <Navigation />

      <h1>Moje Projekty</h1>

      <div className="category-filters">
        <button
          className={selectedCategory === 'all' ? 'active' : ''}
          onClick={() => setSelectedCategory('all')}
        >
          Všetky
        </button>
        <button
          className={selectedCategory === 'school' ? 'active' : ''}
          onClick={() => setSelectedCategory('school')}
        >
          Škola
        </button>
        <button
          className={selectedCategory === 'personal' ? 'active' : ''}
          onClick={() => setSelectedCategory('personal')}
        >
          Mimo školy
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="project-card"
          >
            <h3>{project.title}</h3>
            <p className="category-badge">
              {project.category === 'school' ? 'Škola' : 'Mimo školy'}
            </p>
            <p className="description">{project.description}</p>
            <div className="technologies">
              {project.technologies.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
