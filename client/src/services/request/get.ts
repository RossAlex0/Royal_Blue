import myAxios from "../instance";


// ## ROOM ## \\

export function getAllRoom() {
  return myAxios
    .get("/rooms")
    .then((res) => res.data)
    .catch((err) => err);
}

// ## STYLE ## \\

export function getAllRoomStyle() {
  return myAxios
    .get("/styles")
    .then((res) => res.data)
    .catch((err) => err);
}
