import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ServicesInterface } from "./type";

import "./service.css";

export default function Service() {
  const servicesData = useLoaderData() as ServicesInterface[];
  const navigate = useNavigate();

  return (
    <section className="services">
      {servicesData.map((service) => (
        <div
          key={service.id}
          className="services_element"
          style={{
            backgroundImage: `url("${import.meta.env.VITE_PICTURE_SERVICE_URL}/${service.picture}")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          onClick={() => navigate(`/services/${service.id}`)}
        >
          <h2 className="services_element_text">{service.name}</h2>
        </div>
      ))}
    </section>
  );
}
