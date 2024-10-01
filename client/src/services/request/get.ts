import myAxios from "../instance";
import { RoomInterface } from "../../pages/Room/type";

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

export function getRoomByStyle(
  id: number,
  setter: (state: RoomInterface[]) => void
) {
  myAxios
    .get(`/rooms/style/${id}`)
    .then((res) => setter(res.data))
    .catch((err) => console.error(err));
}

// ## STYLE ## \\

export function getAllRoomStyle() {
  return myAxios
    .get("/styles")
    .then((res) => res.data)
    .catch((err) => err);
}
