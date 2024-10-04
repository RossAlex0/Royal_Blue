import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import logoAnimated from "../../assets/logo/logoAnimate.svg";
import logoDark from "../../assets/logo/logoDark.svg";

import "./NavBar.css";

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState<boolean>(false);
  const [toLog, setToLog] = useState<boolean>(false);

  const navElements = [
    { path: "/room", name: "Les chambres" },
    { path: "#", name: "Les services" },
    { path: "#", name: "À propos de RoyalBlue" },
    { path: "#", name: "Contact" },
    { path: "#", name: "Connexion" },
  ];

  // useEffect(() => {
  //   if (isActive) {
  //     setTimeout(() => setIsActive(false), 10000);
  //   }
  // }, [isActive]);

  return (
    <header className="nav">
      <Link to="/">
        <img
          src={location.pathname === "/" ? logoAnimated : logoDark}
          alt="logo Royal Blue"
          className="nav_img"
        />
      </Link>
      <section className="nav_link">
        {navElements.map((element) => (
          <button
            type="button"
            onClick={() => {
              element.name === "Connexion"
                ? setToLog(true)
                : navigate(element.path);
            }}
            className={`nav_link_text ${isActive ? "active" : ""}`}
            style={
              location.pathname === "/"
                ? { color: "#FFF" }
                : { color: "#020b27" }
            }
            key={element.name}
          >
            {element.name}
          </button>
        ))}
        <div className="nav_link_toggle" onClick={() => setIsActive(!isActive)}>
          {!isActive ? (
            <>
              <p
                style={
                  location.pathname === "/"
                    ? { color: "#FFF" }
                    : { color: "#020b27" }
                }
              >
                ☰
              </p>
              <p
                style={
                  location.pathname === "/"
                    ? { color: "#FFF" }
                    : { color: "#020b27" }
                }
              >
                Menu
              </p>
            </>
          ) : (
            <p
              style={
                location.pathname === "/"
                  ? { color: "#FFF" }
                  : { color: "#020b27" }
              }
            >
              &#215;
            </p>
          )}
        </div>
      </section>
    </header>
  );
}
