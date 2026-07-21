import Navigation from '../components/Navigation';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import './Career.css';

const Career = () => {
  const { language } = useLanguage();
  const t = translations[language].career;

  return (
    <div className="career-page">
      <Navigation />

      <h1>{t.title}</h1>

      <section className="skills-section">
        <h2>{t.mySkills}</h2>
        <div className="skills-grid">
          {t.skillsData.map((category) => (
            <div key={category.category} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="progress-section">
        <h2>{t.learned}</h2>
        <div className="timeline">
          {t.learningProgress.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="period">{item.period}</span>
                <h3>{item.title}</h3>
                <p className="description">{item.description}</p>
                <ul className="achievements">
                  {item.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="goals-section">
        <h2>{t.goals}</h2>
        <div className="goals-grid">
          <div className="goal-card">
            <h3>{t.shortTerm}</h3>
            <ul>
              {t.shortTermGoals.map((goal, i) => (
                <li key={i}>{goal}</li>
              ))}
            </ul>
          </div>
          <div className="goal-card">
            <h3>{t.longTerm}</h3>
            <ul>
              {t.longTermGoals.map((goal, i) => (
                <li key={i}>{goal}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
