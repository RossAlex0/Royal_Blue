import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";

import "./style/global.css";
import { UserProvider } from "./services/context/UserContext";
import { DateProvider } from "./services/context/DateContext";

function App() {
  const location = useLocation();
  return (
    <UserProvider>
      <DateProvider>
        <main>
          {location.pathname !== "/login" && <NavBar />}
          <Outlet />
        </main>
      </DateProvider>
    </UserProvider>
  );
}

export default App;
