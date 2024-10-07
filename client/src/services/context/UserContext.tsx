import React, { createContext, useState, useMemo, useEffect } from "react";
import { UserContextInterface, UserLog } from "./type";
import { getCostumerByCookie } from "../request/get";

const UserContext = createContext<UserContextInterface | null>(null);

function UserProvider({ children }: { children: React.ReactNode }) {
  const [userLog, setUserLog] = useState<UserLog | null>(null);

  const props = useMemo(() => ({ userLog, setUserLog }), [userLog]);

  useEffect(() => {
    getCostumerByCookie(setUserLog);
  }, []);

  return <UserContext.Provider value={props}>{children}</UserContext.Provider>;
}

export { UserProvider, UserContext };
