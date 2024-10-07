import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  getAllRoom,
  getAllServices,
  getRoom,
  getService,
} from "./services/request/get";

import App from "./App";
import Home from "./pages/Home/Home";
import Room from "./pages/Room/Room";
import RoomDetails from "./pages/Room/RoomDetails/RoomDetails";
import Login from "./pages/Login/Login";
import Service from "./pages/Service/Service";
import ServiceDetails from "./pages/Service/ServiceDetails/ServiceDetails";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/room",
        element: <Room />,
        loader: getAllRoom,
      },
      {
        path: "/room/:id",
        element: <RoomDetails />,
        loader: ({ params }) => {
          if (!params.id) {
            throw new Error("Id is undifined");
          }
          return getRoom(params.id);
        },
      },
      {
        path: "/services",
        element: <Service />,
        loader: getAllServices,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails />,
        loader: ({ params }) => {
          if (!params.id) {
            throw new Error("Id is undifined");
          }
          return getService(params.id);
        },
      },
    ],
  },
]);

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} else {
  console.error("L'élément avec l'ID 'root' est introuvable dans le DOM.");
}
