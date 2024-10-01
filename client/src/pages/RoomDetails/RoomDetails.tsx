import React from "react";

import "./RoomDetails.css";
import { useLoaderData } from "react-router-dom";

export default function RoomDetails() {
  const roomData = useLoaderData();
  console.info(roomData);
  return <p>hello</p>;
}
