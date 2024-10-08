import React from "react";
import { useLoaderData } from "react-router-dom";
import { ServicesInterface } from "../type";

import "./serviceDetails.css";

export default function ServiceDetails() {
  const service = useLoaderData() as ServicesInterface;

  return <section className="serviceDetail"></section>;
}
