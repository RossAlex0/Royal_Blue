import myAxios from "../instance";
import { RoomInterface, StyleInterface } from "../../pages/Room/type";

// ## ROOM ## \\

export function getAllRoom() {
  return myAxios
    .get("/rooms")
    .then((res) => res.data)
    .catch((err) => err);
}

export function getRoom(id: string) {
  return myAxios
    .get(`/rooms/${id}`)
    .then((res) => res.data)
    .catch((err) => err);
}

// ## STYLE ## \\

export function getAllRoomStyle(setter: (state: StyleInterface[]) => void) {
  myAxios
    .get("/styles")
    .then((res) => setter(res.data))
    .catch((err) => console.error(err));
}
