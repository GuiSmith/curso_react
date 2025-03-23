import { NavLink } from 'react-router-dom';

function BarraDeNavegacao() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Restaurante</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                Comandas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/itens"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                Itens
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/logs"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                Logs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/usuarios"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                Usuários
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default BarraDeNavegacao;
