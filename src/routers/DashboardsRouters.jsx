import { Routes, Route } from "react-router-dom";
import { GraficosScreen } from "../components/graficos/GraficosScreen";
import { LibrosScreen } from "../components/libros/LibrosScreen";
import { PrestamosScreen } from "../components/prestamos/PrestamosScreen";

import { Navbar } from "../components/ui/Navbar";
import { Sidebar } from "../components/ui/Sidebar";
import { UsuariosScreen } from "../components/usuarios/UsuariosScreen";

export const DashboardRouters = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="container">
        <Routes>
          <Route path="usuarios" element={<UsuariosScreen />} />
          <Route path="libros" element={<LibrosScreen />} />
          <Route path="prestamos" element={<PrestamosScreen/>} />
          <Route path="graficos" element={<GraficosScreen/>} />
        </Routes>
      </div>
    </>
  );
};
