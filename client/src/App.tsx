import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";

import "./style/global.css";

function App() {
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  );
}

export default App;
