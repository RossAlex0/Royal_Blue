import React, { useContext, useEffect, useState } from "react";

import { backgroundParallaxe, numberOfNight } from "./utils";
import { DateContext } from "../../services/context/DateContext";
import { DateContextInterface } from "../../services/context/type";
import ButtonValidated from "../../components/Button/ButtonValidated";
import InputPerson from "../../components/Input/InputPerson/InputPerson";
import InputStartDate from "../../components/Input/InputeDate/InputStartDate";
import InputEndDate from "../../components/Input/InputeDate/InputEndDate";

import "./home.css";

export default function Home() {
  const { startDate, endDate, setStartDate, setEndDate } = useContext(
    DateContext
  ) as DateContextInterface;

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [nbPerson, setNbPerson] = useState<string | number>();

  useEffect(() => {
    backgroundParallaxe(setMousePosition);
    setIsVisible(true);
  }, []);

  const HanldeClickReserv = () => {
    startDate && endDate && console.info(numberOfNight(startDate, endDate));
  };

  return (
    <section
      className="home"
      style={{
        backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
      }}
    >
      <div className="home_text">
        <p className={isVisible ? "home_text_show" : ""}>
          Découvrez l'art de vivre à la{" "}
        </p>
        <p className={isVisible ? "home_text_show" : ""}>
          monégasque, entre mer et prestige.
        </p>
      </div>
      <div className="home_date">
        <InputStartDate />
        <InputEndDate />
        <div>
          <InputPerson setter={setNbPerson} />
        </div>
        <div>
          <ButtonValidated
            tools={{
              type: "button",
              text: "Réserver",
              click: HanldeClickReserv,
            }}
          />
        </div>
      </div>
    </section>
  );
}
