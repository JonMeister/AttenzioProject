import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <p>Elige una opción para continuar</p>
      <div className="menu">
        <ul className="menu-list">
          <li>
              <Link to="/pos" className="menu-link">Iniciar sesión</Link>
            </li>
            <li>
              <Link to="/customer" className="menu-link">Editar material cursos</Link>
            </li>
          </ul>
      </div>
    </div>
  );
};

export default Home;
