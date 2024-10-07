import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";

import "./style/global.css";
import { UserProvider } from "./services/context/UserContext";

function App() {
  const location = useLocation();
  return (
    <UserProvider>
      <main>
        {location.pathname !== "/login" && <NavBar />}
        <Outlet />
      </main>
    </UserProvider>
  );
}

export default App;
