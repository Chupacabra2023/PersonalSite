import Navigation from '../components/Navigation';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import './Home.css';

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language].home;

  return (
    <div className="home">
      <Navigation />

      <header className="header">
        <h1 className="name">Marcel Soták</h1>
        <p className="title">{t.subtitle}</p>
      </header>

      <section className="about">
        <h2>{t.about}</h2>
        <p style={{ whiteSpace: 'pre-line' }}>{t.aboutText}</p>
      </section>

      <section className="strengths-weaknesses">
        <div className="strengths">
          <h2>{t.strengths}</h2>
          <ul>
            {t.strengthsList.map((item, i) => (
              <li key={i}>
                <strong>{item.title}</strong>
                <span>{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="weaknesses">
          <h2>{t.weaknesses}</h2>
          <ul>
            {t.weaknessesList.map((item, i) => (
              <li key={i}>
                <strong>{item.title}</strong>
                <span>{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="contact">
        <h2>{t.contact}</h2>
        <div className="contact-info">
          <p><strong>{t.email}:</strong> marclus868@gmail.com</p>
          <p><strong>GitHub:</strong> <a href="https://github.com/Chupacabra2023" target="_blank" rel="noopener noreferrer">github.com/Chupacabra2023</a></p>
          <p><strong>{t.linkedin}:</strong> <a href="" target="_blank" rel="noopener noreferrer">{t.linkedinLabel}</a></p>
        </div>
      </section>

      <section className="cv-section">
        <h2>{t.cv}</h2>
        <p>{t.cvText}</p>
        <a href="/PersonalSite/marcel_sotak_cv.pdf" download="Marcel_Sotak_CV.pdf" className="download-btn">
          <span className="download-icon">↓</span>
          {t.cvDownload}
        </a>
      </section>
    </div>
  );
};

export default Home;
