import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import logoAnimated from "../../assets/logo/logoAnimate.svg";
import logoDark from "../../assets/logo/logoDark.svg";

import "./navBar.css";
import { UserContext } from "../../services/context/UserContext";
import { UserContextInterface } from "../../services/context/type";

export default function NavBar() {
  const { userLog } = useContext(UserContext) as UserContextInterface;
  const location = useLocation();

  const [isActive, setIsActive] = useState<boolean>(false);

  const navElements = [
    { path: "/room", name: "Les chambres" },
    { path: "/services", name: "Les services" },
    { path: "#", name: "À propos de RoyalBlue" },
    { path: "#", name: "Contact" },
    ...(!userLog ? [{ path: "/login", name: "Connexion" }] : []),
    ...(userLog ? [{ path: `/profile/${userLog.id}`, name: "Profil" }] : []),
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
          src={location.pathname !== "/room" ? logoAnimated : logoDark}
          alt="logo Royal Blue"
          className="nav_img"
        />
      </Link>
      <section className="nav_link">
        {navElements.map((element) => (
          <Link
            to={element.path}
            className={`nav_link_text ${isActive ? "active" : ""}`}
            style={
              location.pathname !== "/room"
                ? { color: "#FFF" }
                : { color: "#020b27" }
            }
            key={element.name}
          >
            {element.name}
          </Link>
        ))}
        <div className="nav_link_toggle" onClick={() => setIsActive(!isActive)}>
          {!isActive ? (
            <>
              <p
                style={
                  location.pathname !== "/room"
                    ? { color: "#FFF" }
                    : { color: "#020b27" }
                }
              >
                ☰
              </p>
              <p
                style={
                  location.pathname !== "/room"
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
                location.pathname !== "/room"
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
