import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

import { getRoomByStyle } from "../../services/request/get";
import { LoaderInterface, RoomInterface } from "./type";

import "./Room.css";

export default function Room() {
  const { roomsData, stylesData } = useLoaderData() as LoaderInterface;
  console.info(roomsData, stylesData);
  const [filterRoom, setFilterRoom] = useState<RoomInterface[] | null>(null);
  const HandleFilterRoom = (id: number) => {
    getRoomByStyle(id, setFilterRoom);
  };
  return (
    <section className="room">
      <div className="room_header">
        <div className="room_header_picture" />
        <div className="room_header_style">
          {stylesData.map((style) => (
            <button type="button" onClick={() => HandleFilterRoom(style.id)}>
              {style.name}
            </button>
          ))}
        </div>
      </div>
      <div className="room_carousel">
        {(filterRoom || roomsData).map((room) => (
          <article className="room_carousel_article" key={room.id}>
            <img
              src={`${import.meta.env.VITE_PICTURE_URL}${room.picture}`}
              alt="lit"
            />
            <div>
              <h2>{room.name}</h2>

              <p>{room.description}</p>
              <Link to={`/room/${room.id}`}>Voir la chambre &#x21d2;</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
