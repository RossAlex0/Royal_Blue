import React from "react";

import { useLoaderData } from "react-router-dom";

import "./roomDetails.css";

export default function RoomDetails() {
  const roomData = useLoaderData();
  console.info(roomData);
  return <p>hello</p>;
}
