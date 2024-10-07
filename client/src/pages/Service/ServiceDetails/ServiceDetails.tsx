import React from "react";
import { useLoaderData } from "react-router-dom";
import { ServicesInterface } from "../type";

export default function ServiceDetails() {
  const service = useLoaderData() as ServicesInterface;

  return <h1>{service.name}</h1>;
}
