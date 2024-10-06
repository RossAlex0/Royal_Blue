import React from "react";

import { BtnInterface } from "./types";

import "./buttonValidated.css";

export default function ButtonValidated({ tools }: { tools: BtnInterface }) {
  return (
    <button type={tools.type} onClick={tools.click} className="buttonValidated">
      {tools.text}
    </button>
  );
}
