import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import { backgroundParallaxe } from "./utils";

import ButtonValidated from "../../components/Button/ButtonValidated";
import InputPerson from "../../components/Input/InputPerson/InputPerson";

import Calendar from "../../assets/images/calendar.svg";

import "react-datepicker/dist/react-datepicker.css";
import "./home.css";

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
        <div>
          <DatePicker
            selected={startDate}
            onChange={(date: Date | null) => setStartDate(date ?? undefined)}
            selectsStart
            minDate={new Date()}
            startDate={startDate}
            endDate={endDate}
            placeholderText="Arrivée"
          />
          <img src={Calendar} alt="calendar" className="home_date_picture" />
        </div>
        <div>
          <DatePicker
            selected={endDate}
            onChange={(date: Date | null) => setEndDate(date ?? undefined)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate ? startDate : new Date()}
            placeholderText="Départ"
          />
          <img src={Calendar} alt="calendar" className="home_date_picture" />
        </div>
        <div>
          <InputPerson setter={setNbPerson} />
        </div>
        <div>
          <ButtonValidated tools={{ type: "button", text: "Réserver" }} />
        </div>
      </div>
    </section>
  );
}
