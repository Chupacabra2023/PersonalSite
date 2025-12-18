import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { projects } from '../data/projects';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="project-detail">
        <Navigation />
        <div className="not-found">
          <h1>Projekt nenájdený</h1>
          <Link to="/projects" className="back-link">← Späť na projekty</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <Navigation />

      <Link to="/projects" className="back-link">← Späť na projekty</Link>

      <article className="project-content">
        <header>
          <h1>{project.title}</h1>
          <p className="category-badge">
            {project.category === 'school' ? 'Škola' : 'Mimo školy'}
          </p>
        </header>

        <section className="description-section">
          <h2>O projekte</h2>
          <p>{project.longDescription}</p>
        </section>

        <section className="tech-section">
          <h2>Použité technológie</h2>
          <div className="technologies">
            {project.technologies.map(tech => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
        </section>

        {(project.githubUrl || project.liveUrl) && (
          <section className="links-section">
            <h2>Odkazy</h2>
            <div className="links">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-button"
                >
                  GitHub →
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-button"
                >
                  Live Demo →
                </a>
              )}
            </div>
          </section>
        )}

        {project.liveUrl && (
          <section className="policies-section">
            <h2>Dokumenty pre Google Play</h2>
            <p className="policies-description">
              Právne dokumenty požadované obchodom Google Play Store:
            </p>
            <div className="policies-links">
              <a
                href="/PersonalSite/policies/privacy-policy.html"
                target="_blank"
                rel="noopener noreferrer"
                className="policy-link"
              >
                <div className="policy-icon">📄</div>
                <div className="policy-info">
                  <strong>Privacy Policy</strong>
                  <span>Zásady ochrany osobných údajov</span>
                </div>
              </a>
              <a
                href="/PersonalSite/policies/terms-of-service.html"
                target="_blank"
                rel="noopener noreferrer"
                className="policy-link"
              >
                <div className="policy-icon">📋</div>
                <div className="policy-info">
                  <strong>Terms of Service</strong>
                  <span>Podmienky používania služby</span>
                </div>
              </a>
            </div>
            <p className="policies-note">
              Tieto dokumenty sú potrebné pre publikáciu aplikácie na Google Play Store.
            </p>
          </section>
        )}
      </article>
    </div>
  );
};

export default ProjectDetail;
