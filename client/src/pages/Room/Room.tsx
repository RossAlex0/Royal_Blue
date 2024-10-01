import React from "react";
import { Link } from "react-router-dom";

import test from "../../assets/images/headerRoom.svg";
import "./Room.css";

export default function Room() {
  return (
    <section className="room">
      <div className="room_header">
        <div className="room_header_picture" />
        <div className="room_header_grey" />
      </div>
      <div className="room_carousel">
        <article className="room_carousel_article">
          <img src={test} alt="lit" />
          <div>
            <h2>Prestiges</h2>
            <p>
              Spacieuses et lumineuses, elles offrent un décor soigné avec des
              matériaux nobles et des touches modernes. Chaque détail est pensé
              pour garantir une atmosphère chaleureuse, avec des équipements
              haut de gamme...
            </p>
            <Link to="/">Voir la chambre &#x21d2;</Link>
          </div>
        </article>
      </div>
    </section>
  );
}
