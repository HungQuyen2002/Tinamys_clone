import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/login";
import MainPage from "./pages/MainPage/mainpage";
import Register from "./pages/RegisterPage/register";
import CompanyGoal from "./pages/CompanyGoal/company-goal";
import MyCompany from "./pages/MyCompany/mycompany";

const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/company" element={<CompanyGoal />} />
      <Route path="/my-company" element={<MyCompany />} />

    </Routes>
  </Router>
);

export default AppRoutes;
