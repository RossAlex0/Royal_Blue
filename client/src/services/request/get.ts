import myAxios from "../instance";
import { StyleInterface } from "../../pages/Room/type";
import { UserLog } from "../context/type";

// ## COSTUMERS ## \\

export function getCostumerByCookie(setter: (state: UserLog) => void) {
  myAxios
    .get("/login", { withCredentials: true })
    .then((response) => setter(response.data))
    .catch((error) => console.error(error));
}

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

// ## SERVICES ## \\

export function getAllServices() {
  return myAxios
    .get("/services")
    .then((res) => res.data)
    .catch((err) => console.error(err));
}

export function getService(id: string) {
  return myAxios
    .get(`/services/${id}`)
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
