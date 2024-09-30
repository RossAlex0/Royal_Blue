import React from "react";

import headerRoom from "../../assets/images/headerRoom.svg";

import "./Room.css";

export default function Room() {
  return (
    <section className="room">
      <div className="room_header">
        <div className="room_header_picture" />
        <div className="room_header_grey" />
      </div>
      <div className="room_carousel"></div>
    </section>
  );
}
