import React from "react";
import { Link, NavLink } from "react-router-dom";

import "../../styles/styles.scss";

export const Navbar = () => {
  return (
    <nav className="navbar__principal">
      <Link className="navbar__nombre" to="/">
        Biblioteca Virtual
      </Link>

      <div className="link__container">
        <div className="link__container">
          <NavLink
            className={({ isActive }) =>
              "nav__item nav__link " + (isActive ? "active" : "")
            }
            to="/usuarios"
          >
            Usuarios
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              "nav__item nav__link " + (isActive ? "active" : "")
            }
            to="/libros"
          >
            Libros
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              "nav__item nav__link " + (isActive ? "active" : "")
            }
            to="/prestamos"
          >
            Préstamos
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
