import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import { backgroundParallaxe, whileNumbers } from "./utils";

import NavBar from "../../components/NavBar/NavBar";
import ButtonValidated from "../../components/Button/ButtonValidated";

import Calendar from "../../assets/images/calendar.svg";
import logoAnimated from "../../assets/images/logoAnimate.svg";

import "react-datepicker/dist/react-datepicker.css";
import "./Home.css";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();

  const [nbPerson, setNbPerson] = useState<Array<String> | undefined>();

  useEffect(() => {
    backgroundParallaxe(setMousePosition);
    setNbPerson(whileNumbers(8));
  }, []);

  useEffect(() => {
    console.info(whileNumbers(8));
  });

  return (
    <section
      className="home"
      style={{
        backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
      }}
    >
      <header className="home_header">
        <img
          src={logoAnimated}
          alt="logo Royal Blue"
          className="home_header_img"
        />
        <NavBar />
      </header>
      <main className="home_main">
        <div className="home_main_text">
          <p>Découvrez l'art de vivre à la </p>
          <p>monégasque, entre mer et prestige.</p>
        </div>
        <div className="home_main_date">
          <div>
            <DatePicker
              selected={startDate}
              onChange={(date: Date | null) => setStartDate(date ?? undefined)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Arrivée"
            />
            <img src={Calendar} alt="calendar" />
          </div>
          <div>
            <DatePicker
              selected={endDate}
              onChange={(date: Date | null) => setEndDate(date ?? undefined)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText="Départ"
            />
            <img src={Calendar} alt="calendar" />
          </div>
          <div>
            <span className="home_main_chevron">&#8964;</span>
            <select>
              <option value="1">1 personne </option>
              {nbPerson?.map((person) => (
                <option value={`${person}`}>{person}</option>
              ))}
            </select>
          </div>
          <div>
            <ButtonValidated tools={{ type: "button", text: "Réserver" }} />
          </div>
        </div>
      </main>
    </section>
  );
}
