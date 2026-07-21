import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import './Navigation.css';

const Navigation = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;

  return (
    <nav className="navigation">
      <div className="nav-links">
        <Link to="/" className="nav-link">{t.home}</Link>
        <Link to="/projects" className="nav-link">{t.projects}</Link>
        <Link to="/career" className="nav-link">{t.career}</Link>
        <a href="/PersonalSite/marcel_sotak_cv.html" target="_blank" className="nav-link">{t.cv}</a>
      </div>
      <button className="lang-switcher" onClick={toggleLanguage} aria-label="Switch language">
        🌐 {language === 'sk' ? 'EN' : 'SK'}
      </button>
    </nav>
  );
};

export default Navigation;
