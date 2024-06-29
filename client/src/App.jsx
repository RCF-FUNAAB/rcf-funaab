import React from "react";
import { Route, Routes } from "react-router";
import DesktopMessage from "./components/pages/DesktopMessage";
import Login from "./components/Auth/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DesktopMessage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default App;
