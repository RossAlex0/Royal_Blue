import React, { useEffect, useState } from "react";

import NavBar from "../../components/NavBar/NavBar";
import logoAnimated from "../../assets/images/logoAnimate.svg";

import "./Home.css";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const x = clientX / window.innerWidth;
      const y = clientY / window.innerHeight;

      setMousePosition({ x: x * 40, y: y * 7 });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <section
      className="home"
      style={{
        backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
      }}
    >
      <header className="home_header">
        <img
          src={logoAnimated}
          alt="logo Royal Blue"
          className="home_header_img"
        />
        <NavBar />
      </header>
      <main className="home_main"></main>
    </section>
  );
}
