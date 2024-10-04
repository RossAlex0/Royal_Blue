import myAxios from "../instance";
import { RoomInterface } from "../../pages/Room/type";

// ## ROOM ## \\

export function postRoomQuery(
  person: string | number,
  setter: (state: RoomInterface[]) => void,
  style_id?: string | number | undefined
) {
  myAxios
    .post(`/rooms/search`, { person, style_id })
    .then((res) => setter(res.data))
    .catch((err) => console.error(err));
}

// ## STYLE ## \\
