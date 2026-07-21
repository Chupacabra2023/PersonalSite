import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Career from './pages/Career';
import { LanguageProvider } from './contexts/LanguageContext';
import './App.css';

const APP_VERSION = 'v1.0';

function App() {
  return (
    <LanguageProvider>
      <Router basename="/PersonalSite">
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/career" element={<Career />} />
          </Routes>
          <span style={{
            position: 'fixed',
            bottom: '8px',
            right: '10px',
            fontSize: '11px',
            color: 'rgba(150,150,150,0.6)',
            pointerEvents: 'none',
            userSelect: 'none',
            zIndex: 9999,
          }}>{APP_VERSION}</span>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
