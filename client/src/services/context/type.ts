export interface UserLog {
  id: number;
  lastname: string;
  firstname: string;
  email: string;
  phone: number | null;
  country: string;
}
export interface UserContextInterface {
  userLog: UserLog | null;
  setUserLog: (userLog: UserLog) => void;
}
