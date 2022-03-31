import React from "react";
import { NavLink } from "react-router-dom";
import {
  BookOpenIcon,
  ChartBarIcon,
  IdentificationIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";

export const Sidebar = () => {
  return (
    <>
      <div className="sidebar sombra">
        {/* Parte principal del sidebar */}
        <div className="sidebar__crud">
          <NavLink
            className={({ isActive }) =>
              "sidebar__link " + (isActive ? "active" : "")
            }
            to="/usuarios"
          >
            <UserGroupIcon className="icono" />
            <p>Usuarios </p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              "sidebar__link " + (isActive ? "active" : "")
            }
            to="/libros"
          >
            <BookOpenIcon className="icono" />
            <p>Libros</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              "sidebar__link " + (isActive ? "active" : "")
            }
            to="/prestamos"
          >
            <IdentificationIcon className="icono" />
            <p>Préstamos</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              "sidebar__link " + (isActive ? "active" : "")
            }
            to="/graficos"
          >
            <ChartBarIcon className="icono" />
            <p>Gráficos</p>
          </NavLink>
        </div>
        <hr className="separador" />
        {/* Parte final del navbar */}
        <div className="sidebar__extra">
          <NavLink
            className={({ isActive }) =>
              "sidebar__link " + (isActive ? "active" : "")
            }
            to="/documentacion"
          >
            <p>Documentación</p>
          </NavLink>
        </div>
      </div>
    </>
  );
};
