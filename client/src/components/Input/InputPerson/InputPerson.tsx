import { useEffect, useState } from "react";
import { whileNumbers } from "../../../pages/Home/utils";
import React from "react";

import "./InputPerson.css";

export default function InputPerson() {
  const [numbPerson, setNumbPerson] = useState<
    { value: number; text: string }[] | undefined
  >();

  useEffect(() => {
    setNumbPerson(whileNumbers(6));
  }, []);
  return (
    <>
      <span className="inputPerson_chevron">&#8964;</span>
      <select className="inputPerson_select">
        {numbPerson?.map((person) => (
          <option value={`${person.value}`}>{person.text}</option>
        ))}
      </select>
    </>
  );
}
