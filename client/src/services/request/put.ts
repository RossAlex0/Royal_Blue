import { CostumerInterface } from "../../pages/Profil/type";
import myAxios from "../instance";

// ## ROOM ## \\

export function putCostumer(id: number, userInfo: CostumerInterface) {
  myAxios
    .put(`/costumers/${id}`, userInfo)
    .then((res) => console.info(res.data))
    .catch((err) => console.error(err));
}
export function putPasswordCostumer(id: number, password: string) {
  myAxios
    .put(`/costumers/password/${id}`, { password })
    .then((res) => console.info(res.data))
    .catch((err) => console.error(err));
}
