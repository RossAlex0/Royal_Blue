import React, { useContext } from "react";
import DatePicker from "react-datepicker";

import { DateContext } from "../../../services/context/DateContext";
import { DateContextInterface } from "../../../services/context/type";

import Calendar from "../../../assets/icon/calendar.svg";
import "react-datepicker/dist/react-datepicker.css";

export default function InputStartDate() {
  const { startDate, endDate, setStartDate } = useContext(
    DateContext
  ) as DateContextInterface;

  return (
    <div className="startEnd">
      <DatePicker
        selected={startDate}
        onChange={(date: Date | null) => date && setStartDate(date)}
        selectsStart
        minDate={new Date()}
        startDate={startDate}
        endDate={endDate}
        dateFormat="dd/MM/yyyy"
        placeholderText="Arrivée"
      />
      <img src={Calendar} alt="calendar" className="home_date_picture" />
    </div>
  );
}
