import { Routes } from "react-router-dom";

import { Navbar } from "../components/ui/Navbar";

export const DashboardRouters = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes></Routes>
      </div>
    </>
  );
};
