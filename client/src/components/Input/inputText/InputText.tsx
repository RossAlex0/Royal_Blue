import React, { useState } from "react";

import { ToolsInterface } from "./type";

import visible from "../../../assets/icon/visible.svg";
import notVisible from "../../../assets/icon/notVisible.svg";

export default function InputText({ tools }: { tools: ToolsInterface }) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <>
      <label className="inputText_label">{tools.label}</label>
      <input
        type={tools.type}
        placeholder={tools.placeholder}
        value={tools.state}
        onChange={(e) => tools.setter(e.target.value)}
        className="inputText_input"
      />
      {tools.type === "password" &&
        (!isVisible ? (
          <img
            src={notVisible}
            alt="Close eyes"
            onClick={() => setIsVisible(true)}
          />
        ) : (
          <img
            src={visible}
            alt="Open eyes"
            onClick={() => setIsVisible(false)}
          />
        ))}
    </>
  );
}
