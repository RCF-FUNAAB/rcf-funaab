import React from "react";
import { Route, Routes } from "react-router";
import DesktopMessage from "./components/pages/DesktopMessage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DesktopMessage />} />
    </Routes>
  );
}
export default App;
