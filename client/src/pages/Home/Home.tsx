import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import { backgroundParallaxe, numberOfNight } from "./utils";

import ButtonValidated from "../../components/Button/ButtonValidated";
import InputPerson from "../../components/Input/InputPerson/InputPerson";

import "./home.css";
import InputStartDate from "../../components/Input/InputeDate/InputStartDate";
import InputEndDate from "../../components/Input/InputeDate/InputEndDate";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
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
        <InputStartDate
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
        />
        <InputEndDate
          startDate={startDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
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
