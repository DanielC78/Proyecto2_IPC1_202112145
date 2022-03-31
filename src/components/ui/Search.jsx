import React from "react";
import { SearchIcon } from "@heroicons/react/solid";

export const Search = () => {
  return (
    <div className="buscador">
      <input type="search" className="input sin__estilo" placeholder="Buscar" />
      <button className="sin__estilo">
        <SearchIcon className="icono" />
      </button>
    </div>
  );
};
