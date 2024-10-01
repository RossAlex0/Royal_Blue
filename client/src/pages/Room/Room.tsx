import React from "react";
import { Link, useLoaderData } from "react-router-dom";

import { LoaderInterface } from "./type";
import test from "../../assets/images/headerRoom.svg";

import "./Room.css";

export default function Room() {
  const { roomsData, stylesData } = useLoaderData() as LoaderInterface;
  console.info(roomsData);
  return (
    <section className="room">
      <div className="room_header">
        <div className="room_header_picture" />
        <div className="room_header_style">
          {stylesData.map((style) => (
            <Link to="#">{style.name}</Link>
          ))}
        </div>
      </div>
      <div className="room_carousel">
        {roomsData.map((room) => (
          <article className="room_carousel_article">
            <img src={test} alt="lit" />
            <div>
              <h2>{room.name}</h2>

              <p>{room.description}</p>
              <Link to="/">Voir la chambre &#x21d2;</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
