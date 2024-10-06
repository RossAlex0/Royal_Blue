import React, { useEffect, useState } from "react";

import { getAllRoomStyle } from "../../../services/request/get";
import { StyleInterface } from "../../../pages/Room/type";

import bed from "../../../assets/icon/bed.svg";
import "./inputRoom.css";

export default function InputRoom({
  setter,
}: {
  setter: (state: string | number) => void;
}) {
  const [stylesData, setStylesData] = useState<StyleInterface[] | null>(null);

  const HandleChangeIdStyle = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setter(event.target.value);
  };

  useEffect(() => {
    getAllRoomStyle(setStylesData);
  }, []);
  return (
    <>
      <select className="inputRoom_select" onChange={HandleChangeIdStyle}>
        <option value="">Chambres</option>
        {stylesData?.map((style) => (
          <option key={style.id} value={style.id}>
            {style.name}
          </option>
        ))}
      </select>
      <img src={bed} className="inputRoom_img" />
    </>
  );
}
