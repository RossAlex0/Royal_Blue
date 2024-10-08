import React from "react";
import DatePicker from "react-datepicker";

import { DateEndInterface } from "./type";

import Calendar from "../../../assets/icon/calendar.svg";
import "react-datepicker/dist/react-datepicker.css";

export default function InputEndDate({
  startDate,
  endDate,
  setEndDate,
}: DateEndInterface) {
  return (
    <div className="endDate">
      <DatePicker
        selected={endDate}
        onChange={(date: Date | null) => date && setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate ? startDate : new Date()}
        dateFormat="dd/MM/yyyy"
        placeholderText="Départ"
      />
      <img src={Calendar} alt="calendar" className="home_date_picture" />
    </div>
  );
}
