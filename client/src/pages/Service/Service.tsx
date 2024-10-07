import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Service() {
  const servicesData = useLoaderData();
  return <h1>hello</h1>;
}
