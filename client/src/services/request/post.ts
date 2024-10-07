import myAxios from "../instance";
import { RoomInterface } from "../../pages/Room/type";
import { UserInfoInterface } from "../../components/Register/type";

// ## LOGIN ## \\

export function postLogin({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return myAxios
    .post("/login", { email, password }, { withCredentials: true })
    .then((res) => res.data)
    .catch((err) => console.error(err));
}

// ## COSTUMERS ## \\

export function postCostumer(user: UserInfoInterface) {
  return myAxios
    .post("/costumers", user)
    .then((res) => res)
    .catch((error) => console.error(error));
}

// ## ROOM ## \\

export function postRoomQuery(
  person: string | number,
  setter: (state: RoomInterface[]) => void,
  style_id?: string | number | undefined
) {
  myAxios
    .post("/rooms/search", { person, style_id })
    .then((res) => setter(res.data))
    .catch((err) => console.error(err));
}

// ## STYLE ## \\
