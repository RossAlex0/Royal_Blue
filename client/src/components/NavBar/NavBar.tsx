import React, { useState } from "react";
import { Link } from "react-router-dom";

import logoAnimated from "../../assets/images/logoAnimate.svg";

import "./NavBar.css";

export default function NavBar() {
  const [isActive, setIsActive] = useState(false);

  const navElements = [
    { name: "Les chambres" },
    { name: "Les services" },
    { name: "À propos de RoyalBlue" },
    { name: "Contact" },
    { name: "Connexion" },
  ];

  return (
    <header className="nav">
      <Link to="/">
        <img src={logoAnimated} alt="logo Royal Blue" className="nav_img" />
      </Link>
      <section className="nav_link">
        {navElements.map((element) => (
          <Link
            to="/room"
            className={`nav_link_text ${isActive ? "active" : ""}`}
            key={element.name}
          >
            {element.name}
          </Link>
        ))}
        <div className="nav_link_toggle" onClick={() => setIsActive(!isActive)}>
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
    </header>
  );
}
