import React from "react";
import { Route, Routes } from "react-router";
import DesktopMessage from "./components/pages/DesktopMessage";
import Dashboard from "./components/Dashboard/DashboardContext";
// import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup/SignupContext";
import Login from "./components/Auth/LoginContext";
import ForgotPassword from "./components/Auth/ForgotPassword/ForgotPassword";
import VerifyEmail from "./components/Auth/ForgotPassword/VerifyEmail";
import Business from "./components/Dashboard/Business";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify" element={<VerifyEmail />} />
      <Route path="/business" element={<Business />} />
    </Routes>
  );
}
export default App;
