import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand mb-0 h1">
            Registro de ciudadanos
          </NavLink>
        </div>
        <br />
      </nav>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <NavLink
            to="/AdministracionCiudadanos"
            className="navbar-brand mb-0 h1"
          >
            Administración De ciudadanos
          </NavLink>
        </div>
      </nav>
    </>
  );
};
