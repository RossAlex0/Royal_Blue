import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";

import "./style/global.css";

function App() {
  const location = useLocation();
  return (
    <main>
      {location.pathname !== "/login" && <NavBar />}
      <Outlet />
    </main>
  );
}

export default App;
