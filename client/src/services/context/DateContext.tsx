import React, { createContext, useState, useMemo } from "react";
import { DateContextInterface } from "./type";

const DateContext = createContext<DateContextInterface | null>(null);

function DateProvider({ children }: { children: React.ReactNode }) {
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();

  const props = useMemo(
    () => ({ startDate, setStartDate, endDate, setEndDate }),
    [startDate, endDate]
  );

  return <DateContext.Provider value={props}>{children}</DateContext.Provider>;
}

export { DateProvider, DateContext };
