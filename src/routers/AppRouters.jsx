import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomeScreen } from "../components/home/HomeScreen";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRouters } from "./DashboardsRouters";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/*" element={<DashboardRouters />} />
      </Routes>
    </BrowserRouter>
  );
};
