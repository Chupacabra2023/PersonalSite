import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/" className="nav-link">Domov</Link>
      <Link to="/projects" className="nav-link">Projekty</Link>
      <Link to="/career" className="nav-link">Kariéra</Link>
    </nav>
  );
};

export default Navigation;
