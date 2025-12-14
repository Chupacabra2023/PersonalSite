import Navigation from '../components/Navigation';
import './Career.css';

interface SkillCategory {
  category: string;
  skills: string[];
}

interface Experience {
  period: string;
  title: string;
  description: string;
  achievements: string[];
}

const Career = () => {
  const skillsData: SkillCategory[] = [
    {
      category: 'Programovacie jazyky',
      skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C++'],
    },
    {
      category: 'Frontend',
      skills: ['React', 'Vue.js', 'HTML/CSS', 'Tailwind CSS', 'React Native'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'Django', 'REST API', 'GraphQL'],
    },
    {
      category: 'Databázy',
      skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'MySQL'],
    },
    {
      category: 'Nástroje & Iné',
      skills: ['Git', 'Docker', 'VS Code', 'Figma', 'Agile/Scrum'],
    },
  ];

  const learningProgress: Experience[] = [
    {
      period: '2024 - Súčasnosť',
      title: 'Pokročilý vývoj webových aplikácií',
      description: 'Zameranie na moderné frameworky a best practices',
      achievements: [
        'Naučil som sa TypeScript a jeho použitie v React projektoch',
        'Implementoval som autentifikáciu a autorizáciu používateľov',
        'Vytvoril som viacero full-stack aplikácií s REST API',
        'Osvojil som si prácu s Git a verzionovaním kódu',
      ],
    },
    {
      period: '2023 - 2024',
      title: 'Základy webového vývoja',
      description: 'Učenie sa základov programovania a web technológií',
      achievements: [
        'Zvládol som HTML, CSS a JavaScript',
        'Vytvoril som prvé React komponenty a single-page aplikácie',
        'Naučil som sa základy backendu s Node.js',
        'Začal som pracovať s databázami (SQL, NoSQL)',
      ],
    },
    {
      period: '2022 - 2023',
      title: 'Úvod do programovania',
      description: 'Prvé kroky vo svete programovania',
      achievements: [
        'Naučil som sa základy algoritmizácie',
        'Vytvoril som prvé programy v Pythone',
        'Pochopil som objektovo orientované programovanie',
        'Riešil som prvé programátorské výzvy a úlohy',
      ],
    },
  ];

  return (
    <div className="career-page">
      <Navigation />

      <h1>Kariéra & Progress</h1>

      <section className="skills-section">
        <h2>Moje Zručnosti</h2>
        <div className="skills-grid">
          {skillsData.map((category) => (
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
        <h2>Čo som sa naučil</h2>
        <div className="timeline">
          {learningProgress.map((item, index) => (
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
        <h2>Budúce Ciele</h2>
        <div className="goals-grid">
          <div className="goal-card">
            <h3>Krátkodobé (2025)</h3>
            <ul>
              <li>Zvládnuť pokročilé React patterns</li>
              <li>Naučiť sa Next.js a server-side rendering</li>
              <li>Publikovať aplikáciu na Google Play</li>
              <li>Prispieť do open-source projektov</li>
            </ul>
          </div>
          <div className="goal-card">
            <h3>Dlhodobé</h3>
            <ul>
              <li>Stať sa senior fullstack vývojárom</li>
              <li>Vytvoriť vlastný úspešný projekt/startup</li>
              <li>Získať certifikácie (AWS, Google Cloud)</li>
              <li>Mentoring a učenie ďalších programátorov</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
