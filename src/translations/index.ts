import type { Language } from '../contexts/LanguageContext';

interface StrengthWeakness {
  title: string;
  desc: string;
}

interface LearningPeriod {
  period: string;
  title: string;
  description: string;
  achievements: string[];
}

interface SkillCat {
  category: string;
  skills: string[];
}

export interface Translations {
  nav: {
    home: string;
    projects: string;
    career: string;
    cv: string;
  };
  home: {
    subtitle: string;
    about: string;
    aboutText: string;
    strengths: string;
    weaknesses: string;
    strengthsList: StrengthWeakness[];
    weaknessesList: StrengthWeakness[];
    contact: string;
    email: string;
    linkedin: string;
    linkedinLabel: string;
    cv: string;
    cvText: string;
    cvDownload: string;
  };
  projects: {
    title: string;
    all: string;
    school: string;
    personal: string;
    contactLabel: string;
  };
  career: {
    title: string;
    mySkills: string;
    learned: string;
    goals: string;
    shortTerm: string;
    longTerm: string;
    skillsData: SkillCat[];
    learningProgress: LearningPeriod[];
    shortTermGoals: string[];
    longTermGoals: string[];
  };
  projectDetail: {
    back: string;
    about: string;
    technologies: string;
    links: string;
    policies: string;
    policiesDesc: string;
    policiesNote: string;
    school: string;
    personal: string;
    notFound: string;
    privacyPolicy: string;
    privacyPolicyDesc: string;
    terms: string;
    termsDesc: string;
    deleteAccount: string;
    deleteAccountDesc: string;
    googlePlay: string;
    liveDemo: string;
  };
}

export const translations: Record<Language, Translations> = {
  sk: {
    nav: {
      home: 'Domov',
      projects: 'Projekty',
      career: 'Kariéra',
      cv: 'CV',
    },
    home: {
      subtitle: 'Junior Web Developer | Junior Software Developer | Junior Application Developer',
      about: 'O mne',
      aboutText:
        'Volám sa Marcel Soták a som študentom Fakulty elektrotechniky a informatiky, kde som v prvých troch ročníkoch študoval odbor Aplikovaná informatika. V súčasnosti som v poslednom ročníku so zameraním na kybernetickú bezpečnosť.\n\nVo voľnom čase sa venujem práci na vlastných projektoch, ktoré si stanovujem ako osobné ciele, a aktívne sa učím nové technológie. Baví ma objavovať nové oblasti v IT a rozširovať si znalosti praktickou formou.\n\nStredoškolské vzdelanie som získal na technickom lýceu na SPŠ, kde som si vybudoval technické základy a záujem o informatiku.\n\nOvládam anglický jazyk na úrovni B2 a nemecký jazyk na úrovni A1–A2. Zatiaľ nemám veľa pracovných skúseností priamo v IT sfére, keďže sa momentálne sústreďujem najmä na štúdium a rozvoj vlastných projektov.',
      strengths: 'Silné stránky',
      weaknesses: 'Slabé stránky',
      strengthsList: [
        { title: 'Zodpovednosť a dochvíľnosť', desc: 'Som veľmi dochvíľny a beriem dohody vážne. Keď sa na niečom dohodneme, považujem to za záväzok.' },
        { title: 'Vnútorná motivácia a chuť učiť sa', desc: 'Vo voľnom čase sa aktívne zaujímam o nové témy (informatika, história, spoločenské dianie). Rád pracujem na vlastných projektoch a neustále sa posúvam dopredu.' },
        { title: 'Racionálne a logické myslenie', desc: 'Premýšľam logicky, overujem si informácie a snažím sa rozhodovať na základe faktov. Nepodlieham hoaxom ani nezmyslom.' },
        { title: 'Efektívne využívanie času', desc: 'Nemám rád zbytočné plytvanie časom. Uprednostňujem činnosti, ktoré mi prinášajú hodnotu alebo nové vedomosti.' },
        { title: 'Tolerancia a empatia', desc: 'Som tolerantný, priateľský a rešpektujem iných ľudí. Snažím sa byť spravodlivý, pomáhať svojim blízkym a správať sa férovo.' },
        { title: 'Emočná stabilita', desc: 'Nie som precitlivený, väčšinu vecí beriem s nadhľadom a viem zachovať pokoj aj v náročnejších situáciách.' },
        { title: 'Sebareflexia a pokora', desc: 'Snažím sa byť dobrým človekom, nepreceňujem sa a uvedomujem si, že vždy je priestor na zlepšenie.' },
        { title: 'Vnímavosť k ľuďom', desc: 'Myslím si, že viem pomerne dobre „čítať" ľudí a chápať ich správanie a motivácie.' },
        { title: 'Vzťah k prírode a environmentálne hodnoty', desc: 'Mám silný vzťah k prírode a environmentálnym témam, preferujem prirodzené prostredie pred mestským ruchom.' },
        { title: 'Zmysel pre humor', desc: 'Podľa okolia mám dobrý zmysel pre humor a viem odľahčiť atmosféru.' },
        { title: 'Skromnosť', desc: 'Nepreceňujem sa, zostávam nohami na zemi a uvedomujem si vlastné limity.' },
        { title: 'Kreativita a predstavivosť', desc: 'Mám dobrú fantáziu a predstavivosť, čo mi pomáha pri hľadaní riešení, navrhovaní nápadov a tvorbe vlastných projektov.' },
        { title: 'Tvorivé myslenie', desc: 'Dokážem premýšľať tvorivo a vidieť veci z rôznych uhlov, čo využívam najmä pri programovaní a práci na aplikáciách.' },
        { title: 'Schopnosť prichádzať s nápadmi', desc: 'Často prichádzam s vlastnými nápadmi a riešeniami, nielen s hotovými postupmi.' },
      ],
      weaknessesList: [
        { title: 'Slabšia pamäť', desc: 'Moja krátkodobá pamäť nie je silná stránka, preto si veci rád zapisujem a snažím sa pracovať systematicky.' },
        { title: 'Organizácia a poriadok', desc: 'Mám tendenciu k neporiadnosti, čo si uvedomujem a postupne na tom pracujem.' },
        { title: 'Introvertnosť a uzavretejšia povaha', desc: 'Som skôr introvert, lepšie sa cítim v menších kolektívoch alebo pri samostatnej práci. Vo veľkých a neznámych skupinách som spočiatku hanblivejší.' },
        { title: 'Opatrnosť v komunikácii', desc: 'Nehovorím o témach, v ktorých si nie som istý. Radšej sa najprv dôkladne pripravím, než by som hovoril nepresne.' },
        { title: 'Emočné napätie pri dlhodobom strese', desc: 'Ak sa stres dlhšie hromadí, môže sa prejaviť náhle – najmä pri technických problémoch alebo neférovom správaní. Učím sa lepšie pracovať so stresom.' },
        { title: 'Ranná produktivita', desc: 'Nie som ranný typ, najlepšie fungujem popoludní a večer. Ráno potrebujem viac času na „rozbeh".' },
        { title: 'Rozptýliteľnosť', desc: 'Občas bývam nepozorný, preto sa snažím obmedzovať rušivé vplyvy a pracovať v blokoch.' },
        { title: 'Tvrdohlavosť (čiastočne)', desc: 'Viem o sebe, že viem byť tvrdohlavý, no naučil som sa počúvať iných, rešpektovať ich názory a zvažovať rôzne pohľady.' },
        { title: 'Hry ako forma oddychu', desc: 'Občas si zahrám hry na odreagovanie, no vedome si dávam pozor, aby to nešlo na úkor produktivity.' },
        { title: 'Nervozita v sociálnych situáciách', desc: 'V neznámom prostredí alebo medzi novými ľuďmi môžem pôsobiť nervózne alebo rezervovane.' },
        { title: 'Ťažkosti s dlhodobým udržaním tempa', desc: 'Pri projektoch, ktoré trvajú dlhší čas, potrebujem jasný cieľ a štruktúru, aby som si udržal konzistentné tempo.' },
      ],
      contact: 'Kontakt',
      email: 'Email',
      linkedin: 'LinkedIn',
      linkedinLabel: 'este nie je je hacknuty',
      cv: 'Životopis',
      cvText: 'Stiahnite si môj životopis v textovom formáte:',
      cvDownload: 'Stiahnuť životopis',
    },
    projects: {
      title: 'Moje Projekty',
      all: 'Všetky',
      school: 'Škola',
      personal: 'Mimo školy',
      contactLabel: 'Kontakt',
    },
    career: {
      title: 'Kariéra & Progress',
      mySkills: 'Moje Zručnosti',
      learned: 'Čo som sa naučil',
      goals: 'Budúce Ciele',
      shortTerm: 'Krátkodobé (2025)',
      longTerm: 'Dlhodobé',
      skillsData: [
        { category: 'Programovacie jazyky', skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C++'] },
        { category: 'Frontend', skills: ['React', 'Vue.js', 'HTML/CSS', 'Tailwind CSS', 'React Native'] },
        { category: 'Backend', skills: ['Node.js', 'Express', 'Django', 'REST API', 'GraphQL'] },
        { category: 'Databázy', skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'MySQL'] },
        { category: 'Nástroje & Iné', skills: ['Git', 'Docker', 'VS Code', 'Figma', 'Agile/Scrum'] },
      ],
      learningProgress: [
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
      ],
      shortTermGoals: [
        'Zvládnuť pokročilé React patterns',
        'Naučiť sa Next.js a server-side rendering',
        'Publikovať aplikáciu na Google Play',
        'Prispieť do open-source projektov',
      ],
      longTermGoals: [
        'Stať sa senior fullstack vývojárom',
        'Vytvoriť vlastný úspešný projekt/startup',
        'Získať certifikácie (AWS, Google Cloud)',
        'Mentoring a učenie ďalších programátorov',
      ],
    },
    projectDetail: {
      back: '← Späť na projekty',
      about: 'O projekte',
      technologies: 'Použité technológie',
      links: 'Odkazy',
      policies: 'Dokumenty pre Google Play',
      policiesDesc: 'Právne dokumenty požadované obchodom Google Play Store:',
      policiesNote: 'Tieto dokumenty sú potrebné pre publikáciu aplikácie na Google Play Store.',
      school: 'Škola',
      personal: 'Mimo školy',
      notFound: 'Projekt nenájdený',
      privacyPolicy: 'Privacy Policy',
      privacyPolicyDesc: 'Zásady ochrany osobných údajov',
      terms: 'Terms of Service',
      termsDesc: 'Podmienky používania služby',
      deleteAccount: 'Delete Account & Data',
      deleteAccountDesc: 'Vymazanie účtu a údajov',
      googlePlay: 'Google Play →',
      liveDemo: 'Live Demo →',
    },
  },

  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      career: 'Career',
      cv: 'CV',
    },
    home: {
      subtitle: 'Junior Web Developer | Junior Software Developer | Junior Application Developer',
      about: 'About Me',
      aboutText:
        'My name is Marcel Soták and I am a student at the Faculty of Electrical Engineering and Informatics, where I spent the first three years studying Applied Informatics. I am currently in my final year, focusing on cybersecurity.\n\nIn my free time, I work on my own projects, which I set as personal goals, and I actively learn new technologies. I enjoy discovering new areas in IT and expanding my knowledge through practical experience.\n\nI completed my secondary education at a technical lyceum at SPŠ, where I built a technical foundation and developed an interest in computer science.\n\nI speak English at the B2 level and German at the A1–A2 level. I do not yet have much work experience directly in the IT field, as I am currently focused mainly on studying and developing my own projects.',
      strengths: 'Strengths',
      weaknesses: 'Weaknesses',
      strengthsList: [
        { title: 'Responsibility and Punctuality', desc: 'I am very punctual and take agreements seriously. When we agree on something, I consider it a commitment.' },
        { title: 'Inner Motivation and Drive to Learn', desc: 'In my free time, I actively take interest in new topics (computer science, history, current affairs). I enjoy working on my own projects and constantly moving forward.' },
        { title: 'Rational and Logical Thinking', desc: 'I think logically, verify information and try to make decisions based on facts. I do not fall for hoaxes or nonsense.' },
        { title: 'Effective Time Management', desc: 'I dislike unnecessary waste of time. I prefer activities that bring me value or new knowledge.' },
        { title: 'Tolerance and Empathy', desc: 'I am tolerant, friendly and respect other people. I try to be fair, help those close to me and act with integrity.' },
        { title: 'Emotional Stability', desc: 'I am not oversensitive; I take most things in stride and can stay calm even in challenging situations.' },
        { title: 'Self-reflection and Humility', desc: 'I try to be a good person, do not overestimate myself and am aware that there is always room for improvement.' },
        { title: 'Perceptiveness to People', desc: 'I believe I am fairly good at "reading" people and understanding their behavior and motivations.' },
        { title: 'Connection to Nature and Environmental Values', desc: 'I have a strong connection to nature and environmental topics, preferring natural environments over urban noise.' },
        { title: 'Sense of Humor', desc: 'According to those around me, I have a good sense of humor and can lighten the atmosphere.' },
        { title: 'Modesty', desc: 'I do not overestimate myself, stay grounded and am aware of my own limits.' },
        { title: 'Creativity and Imagination', desc: 'I have good imagination and creativity, which helps me in finding solutions, proposing ideas and creating my own projects.' },
        { title: 'Creative Thinking', desc: 'I can think creatively and see things from different angles, which I use especially in programming and app development.' },
        { title: 'Ability to Generate Ideas', desc: 'I frequently come up with my own ideas and solutions, not just ready-made approaches.' },
      ],
      weaknessesList: [
        { title: 'Weaker Memory', desc: 'My short-term memory is not my strong suit, so I like to write things down and try to work systematically.' },
        { title: 'Organization and Tidiness', desc: 'I tend toward messiness, which I am aware of and gradually working on.' },
        { title: 'Introversion and Reserved Nature', desc: 'I am more of an introvert, feeling more comfortable in smaller groups or when working independently. In large and unfamiliar groups I am initially more shy.' },
        { title: 'Caution in Communication', desc: 'I do not speak about topics I am not sure about. I prefer to first prepare thoroughly rather than speak inaccurately.' },
        { title: 'Emotional Tension under Long-term Stress', desc: 'If stress accumulates for a longer period, it can manifest suddenly – especially with technical problems or unfair behavior. I am learning to better manage stress.' },
        { title: 'Morning Productivity', desc: 'I am not a morning person; I function best in the afternoon and evening. In the morning I need more time to "warm up".' },
        { title: 'Distractibility', desc: 'I am occasionally inattentive, so I try to limit distractions and work in blocks.' },
        { title: 'Stubbornness (partially)', desc: 'I know I can be stubborn, but I have learned to listen to others, respect their opinions and consider different perspectives.' },
        { title: 'Games as a Form of Rest', desc: 'I occasionally play games to unwind, but I consciously make sure it does not come at the expense of productivity.' },
        { title: 'Nervousness in Social Situations', desc: 'In unfamiliar environments or among new people, I can come across as nervous or reserved.' },
        { title: 'Difficulty Maintaining Long-term Pace', desc: 'For projects that last a longer time, I need a clear goal and structure to maintain a consistent pace.' },
      ],
      contact: 'Contact',
      email: 'Email',
      linkedin: 'LinkedIn',
      linkedinLabel: 'not available yet (hacked)',
      cv: 'Resume',
      cvText: 'Download my resume in text format:',
      cvDownload: 'Download Resume',
    },
    projects: {
      title: 'My Projects',
      all: 'All',
      school: 'School',
      personal: 'Personal',
      contactLabel: 'Contact',
    },
    career: {
      title: 'Career & Progress',
      mySkills: 'My Skills',
      learned: "What I've Learned",
      goals: 'Future Goals',
      shortTerm: 'Short-term (2025)',
      longTerm: 'Long-term',
      skillsData: [
        { category: 'Programming Languages', skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C++'] },
        { category: 'Frontend', skills: ['React', 'Vue.js', 'HTML/CSS', 'Tailwind CSS', 'React Native'] },
        { category: 'Backend', skills: ['Node.js', 'Express', 'Django', 'REST API', 'GraphQL'] },
        { category: 'Databases', skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'MySQL'] },
        { category: 'Tools & Other', skills: ['Git', 'Docker', 'VS Code', 'Figma', 'Agile/Scrum'] },
      ],
      learningProgress: [
        {
          period: '2024 - Present',
          title: 'Advanced Web Application Development',
          description: 'Focused on modern frameworks and best practices',
          achievements: [
            'I learned TypeScript and its usage in React projects',
            'I implemented user authentication and authorization',
            'I created several full-stack applications with REST API',
            'I mastered working with Git and version control',
          ],
        },
        {
          period: '2023 - 2024',
          title: 'Basics of Web Development',
          description: 'Learning the basics of programming and web technologies',
          achievements: [
            'I mastered HTML, CSS and JavaScript',
            'I created my first React components and single-page applications',
            'I learned the basics of backend with Node.js',
            'I started working with databases (SQL, NoSQL)',
          ],
        },
        {
          period: '2022 - 2023',
          title: 'Introduction to Programming',
          description: 'First steps in the world of programming',
          achievements: [
            'I learned the basics of algorithms',
            'I created my first programs in Python',
            'I understood object-oriented programming',
            'I solved my first programming challenges and tasks',
          ],
        },
      ],
      shortTermGoals: [
        'Master advanced React patterns',
        'Learn Next.js and server-side rendering',
        'Publish an application on Google Play',
        'Contribute to open-source projects',
      ],
      longTermGoals: [
        'Become a senior fullstack developer',
        'Create a successful project/startup',
        'Obtain certifications (AWS, Google Cloud)',
        'Mentoring and teaching other programmers',
      ],
    },
    projectDetail: {
      back: '← Back to projects',
      about: 'About the project',
      technologies: 'Technologies used',
      links: 'Links',
      policies: 'Google Play Documents',
      policiesDesc: 'Legal documents required by Google Play Store:',
      policiesNote: 'These documents are required for publishing the app on Google Play Store.',
      school: 'School',
      personal: 'Personal',
      notFound: 'Project not found',
      privacyPolicy: 'Privacy Policy',
      privacyPolicyDesc: 'Personal data protection policy',
      terms: 'Terms of Service',
      termsDesc: 'Terms of use',
      deleteAccount: 'Delete Account & Data',
      deleteAccountDesc: 'Account and data deletion',
      googlePlay: 'Google Play →',
      liveDemo: 'Live Demo →',
    },
  },
};
