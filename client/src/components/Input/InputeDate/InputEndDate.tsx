import React, { useContext } from "react";
import DatePicker from "react-datepicker";

import { DateContextInterface } from "../../../services/context/type";
import { DateContext } from "../../../services/context/DateContext";

import Calendar from "../../../assets/icon/calendar.svg";
import "react-datepicker/dist/react-datepicker.css";

export default function InputEndDate() {
  const { startDate, endDate, setEndDate } = useContext(
    DateContext
  ) as DateContextInterface;

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
