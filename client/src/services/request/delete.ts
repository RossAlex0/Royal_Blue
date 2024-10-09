import myAxios from "../instance";

// ## COSTUMERS ## \\

export function deleteCostumer(id: number) {
  return myAxios
    .delete(`/costumers/${id}`, { withCredentials: true })
    .then((res) => console.info(res.data))
    .catch((err) => console.error(err));
}

// ## COSTUMERS ## \\

export function deleteCookie() {
  return myAxios
    .delete("/login", { withCredentials: true })
    .then((response) => console.info(response.data))
    .catch((error) => console.error(error));
}
