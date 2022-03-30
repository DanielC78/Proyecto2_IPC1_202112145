import { Routes, Route, BrowserRouter } from "react-router-dom";
import { DashboardRouters } from "./DashboardsRouters";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<DashboardRouters />} />
      </Routes>
    </BrowserRouter>
  );
};
