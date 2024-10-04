import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

import { postRoomQuery } from "../../services/request/post";
import { RoomInterface } from "./type";

import "./Room.css";
import InputRoom from "../../components/Input/InputRoom/InputRoom";
import InputPerson from "../../components/Input/InputPerson/InputPerson";
import ButtonValidated from "../../components/Button/ButtonValidated";

export default function Room() {
  const roomsData = useLoaderData() as RoomInterface[];

  const [filterRoom, setFilterRoom] = useState<RoomInterface[] | null>(null);
  const [idStyle, setIdStyle] = useState<string | number | undefined>();
  const [nbPerson, setNbPerson] = useState<string | number>(1);

  const HandleClickSearch = () => {
    if (nbPerson) {
      postRoomQuery(nbPerson, setFilterRoom, idStyle);
    }
  };

  return (
    <section className="room">
      <div className="room_header">
        <div className="room_header_style">
          <InputRoom setter={setIdStyle} />
        </div>
        <div className="room_header_style">
          <InputPerson setter={setNbPerson} />
        </div>
        <div className="room_header_style">
          <ButtonValidated
            tools={{
              text: "Rechercher",
              type: "button",
              click: HandleClickSearch,
            }}
          />
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
