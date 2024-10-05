import React from "react";

import { Interface } from "./types";

import "./buttonValidated.css";

export default function ButtonValidated({ tools }: { tools: Interface }) {
  return (
    <button type={tools.type} onClick={tools.click} className="buttonValidated">
      {tools.text}
    </button>
  );
}
