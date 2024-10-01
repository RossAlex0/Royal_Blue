import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

import { getRoomByStyle } from "../../services/request/get";
import { LoaderInterface, RoomInterface } from "./type";

import "./Room.css";
import InputRoom from "../../components/Input/InputRoom/InputRoom";

export default function Room() {
  const roomsData = useLoaderData() as RoomInterface[];

  const [filterRoom, setFilterRoom] = useState<RoomInterface[] | null>(null);
  const [idStyle, setIdStyle] = useState<string | number | null>(null);

  useEffect(() => {
    if (idStyle) {
      getRoomByStyle(idStyle, setFilterRoom);
    }
  }, [idStyle]);

  return (
    <section className="room">
      <div className="room_header">
        <div className="room_header_picture" />
        <div className="room_header_style">
          <InputRoom setter={setIdStyle} />
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
