import React from "react";
import { Link } from "react-router-dom";

import { MenuAlt1Icon } from "@heroicons/react/solid";
import { Search } from "./Search";

export const Navbar = () => {
  return (
    <nav className="navbar sombra">
      <MenuAlt1Icon className="navbar__menu" />
      <Link className="navbar__nombre" to="/Home">
        <span>Biblioteca Virtual</span>
      </Link>
      <div className="navbar__cuenta">
        <Search />
        <span className="circulo"></span>
      </div>
    </nav>
  );
};
