import React, { useEffect, useState } from "react";

import { getAllRoomStyle } from "../../../services/request/get";
import { StyleInterface } from "../../../pages/Room/type";

import bedLogo from "../../../assets/images/bedLogo.svg";
import "./InputRoom.css";

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
        <option value="Chambres">Chambres</option>
        {stylesData?.map((style) => (
          <option key={style.id} value={style.id}>
            {style.name}
          </option>
        ))}
      </select>
      <img src={bedLogo} className="inputRoom_img" />
    </>
  );
}
