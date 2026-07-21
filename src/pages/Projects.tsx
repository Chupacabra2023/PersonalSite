import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { projects } from '../data/projects';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import './Projects.css';

type Category = 'all' | 'school' | 'personal';

const CONTACT_EMAIL = 'marclus868@gmail.com';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const { language } = useLanguage();
  const t = translations[language].projects;

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="projects-page">
      <Navigation />

      <h1>{t.title}</h1>

      <div className="category-filters">
        <button
          className={selectedCategory === 'all' ? 'active' : ''}
          onClick={() => setSelectedCategory('all')}
        >
          {t.all}
        </button>
        <button
          className={selectedCategory === 'school' ? 'active' : ''}
          onClick={() => setSelectedCategory('school')}
        >
          {t.school}
        </button>
        <button
          className={selectedCategory === 'personal' ? 'active' : ''}
          onClick={() => setSelectedCategory('personal')}
        >
          {t.personal}
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
              {project.category === 'school' ? t.school : t.personal}
            </p>
            <p className="description">
              {language === 'en' && project.descriptionEn
                ? project.descriptionEn
                : project.description}
            </p>
            <div className="technologies">
              {project.technologies.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-contact">
              <span className="contact-label">{t.contactLabel}:</span>
              <span className="contact-email">{CONTACT_EMAIL}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
