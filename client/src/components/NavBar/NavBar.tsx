import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

export default function NavBar() {
  const [isActive, setIsActive] = useState(false);

  const navElements = [
    { name: "Home" },
    { name: "Les chambres" },
    { name: "Les services" },
    { name: "À propos de RoyalBlue" },
    { name: "Contact" },
  ];

  return (
    <section className="nav">
      {navElements.map((element) => (
        <Link
          to="#"
          className={`nav_text ${isActive ? "active" : ""}`}
          key={element.name}
        >
          {element.name}
        </Link>
      ))}
      <div className="nav_toggle" onClick={() => setIsActive(!isActive)}>
        {!isActive ? (
          <>
            <p>☰</p>
            <p>Menu</p>
          </>
        ) : (
          <p>&#215;</p>
        )}
      </div>
    </section>
  );
}
