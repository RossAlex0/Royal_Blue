import React from "react";

export default function NavBar() {
  const navElements = [
    { name: "home" },
    { name: "Les chambres" },
    { name: "Les services" },
    { name: "À propos de RoyalBlue" },
    { name: "Contact" },
  ];

  return (
    <section className="nav">
      {navElements.map((element) => (
        <div className="nav_element">
          <p className="nav_element_text">{element.name}</p>
        </div>
      ))}
    </section>
  );
}
