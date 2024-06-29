import React from "react";
import { Route, Routes } from "react-router";
import DesktopMessage from "./components/pages/DesktopMessage";
import Login from "./components/Auth/Login";
import ForgotPassword from "./components/Auth/ForgotPassword/ForgotPassword";
import VerifyEmail from "./components/Auth/ForgotPassword/VerifyEmail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DesktopMessage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify" element={<VerifyEmail />} />
    </Routes>
  );
}
export default App;
