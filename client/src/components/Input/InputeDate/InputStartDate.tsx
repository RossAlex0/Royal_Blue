import React from "react";
import DatePicker from "react-datepicker";

import { DateStartInterface } from "./type";

import Calendar from "../../../assets/icon/calendar.svg";
import "react-datepicker/dist/react-datepicker.css";

export default function InputStartDate({
  startDate,
  setStartDate,
  endDate,
}: DateStartInterface) {
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
