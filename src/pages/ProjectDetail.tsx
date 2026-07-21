import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { projects } from '../data/projects';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  const t = translations[language].projectDetail;
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="project-detail">
        <Navigation />
        <div className="not-found">
          <h1>{t.notFound}</h1>
          <Link to="/projects" className="back-link">{t.back}</Link>
        </div>
      </div>
    );
  }

  const description = language === 'en' && project.longDescriptionEn
    ? project.longDescriptionEn
    : project.longDescription;

  const categoryLabel = project.category === 'school' ? t.school : t.personal;

  return (
    <div className="project-detail">
      <Navigation />

      <Link to="/projects" className="back-link">{t.back}</Link>

      <article className="project-content">
        <header>
          <h1>{project.title}</h1>
          <p className="category-badge">{categoryLabel}</p>
        </header>

        <section className="description-section">
          <h2>{t.about}</h2>
          <p>{description}</p>
        </section>

        <section className="tech-section">
          <h2>{t.technologies}</h2>
          <div className="technologies">
            {project.technologies.map(tech => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
        </section>

        {(project.githubUrl || project.liveUrl || project.googlePlayUrl) && (
          <section className="links-section">
            <h2>{t.links}</h2>
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
              {project.googlePlayUrl && (
                <a
                  href={project.googlePlayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-button link-button--play"
                >
                  {t.googlePlay}
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-button"
                >
                  {t.liveDemo}
                </a>
              )}
            </div>
          </section>
        )}

        {project.policyPath && (
          <section className="policies-section">
            <h2>{t.policies}</h2>
            <p className="policies-description">{t.policiesDesc}</p>
            <div className="policies-links">
              <a
                href={`/PersonalSite/${project.policyPath}/privacy-policy.html`}
                target="_blank"
                rel="noopener noreferrer"
                className="policy-link"
              >
                <div className="policy-icon">📄</div>
                <div className="policy-info">
                  <strong>{t.privacyPolicy}</strong>
                  <span>{t.privacyPolicyDesc}</span>
                </div>
              </a>
              <a
                href={`/PersonalSite/${project.policyPath}/terms-of-service.html`}
                target="_blank"
                rel="noopener noreferrer"
                className="policy-link"
              >
                <div className="policy-icon">📋</div>
                <div className="policy-info">
                  <strong>{t.terms}</strong>
                  <span>{t.termsDesc}</span>
                </div>
              </a>
              {project.deleteAccountUrl && (
                <a
                  href={project.deleteAccountUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="policy-link"
                >
                  <div className="policy-icon">🗑️</div>
                  <div className="policy-info">
                    <strong>{t.deleteAccount}</strong>
                    <span>{t.deleteAccountDesc}</span>
                  </div>
                </a>
              )}
            </div>
            <p className="policies-note">{t.policiesNote}</p>
          </section>
        )}
      </article>
    </div>
  );
};

export default ProjectDetail;
