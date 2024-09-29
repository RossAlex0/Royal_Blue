import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import logoAnimated from "../../assets/images/logoAnimate.svg";

export default function Home() {
  return (
    <section className="home">
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
