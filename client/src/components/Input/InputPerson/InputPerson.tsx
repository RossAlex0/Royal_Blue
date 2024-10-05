import { useEffect, useState } from "react";
import { whileNumbers } from "../../../pages/Home/utils";
import React from "react";

import "./inputPerson.css";

export default function InputPerson({
  setter,
}: {
  setter: (state: string | number) => void;
}) {
  const [numbPerson, setNumbPerson] = useState<
    { value: number; text: string }[] | undefined
  >();

  useEffect(() => {
    setNumbPerson(whileNumbers(6));
  }, []);
  return (
    <>
      <span className="inputPerson_chevron">&#8964;</span>
      <select
        className="inputPerson_select"
        onChange={(e) => setter(e.target.value)}
      >
        {numbPerson?.map((person) => (
          <option value={`${person.value}`} key={person.value}>
            {person.text}
          </option>
        ))}
      </select>
    </>
  );
}
