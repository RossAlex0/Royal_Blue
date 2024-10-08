import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

import { DateContext } from "../../../services/context/DateContext";
import { RoomInterface } from "../type";
import InputStartDate from "../../../components/Input/InputeDate/InputStartDate";
import InputEndDate from "../../../components/Input/InputeDate/InputEndDate";

import chefcuis from "../../../assets/icon/chefcuis.svg";
import chauffeur from "../../../assets/icon/chauffeur.svg";
import literie from "../../../assets/icon/literie.svg";
import concierge from "../../../assets/icon/concierge.svg";
import styliste from "../../../assets/icon/styliste.svg";
import tele from "../../../assets/icon/tele.svg";
import arrow from "../../../assets/icon/arrowblue.svg";
import "./roomDetails.css";
import { DateContextInterface } from "../../../services/context/type";

export default function RoomDetails() {
  const roomData = useLoaderData() as RoomInterface;
  const { startDate, endDate, setStartDate, setEndDate } = useContext(
    DateContext
  ) as DateContextInterface;

  return (
    <section className="roomDetail">
      <Link to="/room" className="roomDetail_back">
        <img src={arrow} alt="arrow back" />
        <p>Retour aux chambres</p>
      </Link>
      <div className="roomDetail_element">
        <div className="roomDetail_element_details">
          <div>
            <div className="roomDetail_element_details_picture1">
              <img
                src={`${import.meta.env.VITE_PICTURE_ROOM_URL}${roomData.picture.room}`}
                alt={roomData.name}
              />
            </div>
            <div className="roomDetail_element_details_picture2">
              <img
                src={`${import.meta.env.VITE_PICTURE_ROOM_URL}${roomData.picture.sdb}`}
                alt={roomData.name}
              />
            </div>
            <div className="roomDetail_element_details_picture3">
              <img
                src={`${import.meta.env.VITE_PICTURE_ROOM_URL}${roomData.picture.salon}`}
                alt={roomData.style_name}
              />
            </div>
          </div>
          <div className="roomDetail_element_details_desc">
            <div>
              <img src={chauffeur} alt="driver" />
              <p>Transport de luxe pour tous vos déplacements.</p>
            </div>
            <div>
              <img src={literie} alt="bed" />
              <p>Literie haut de gamme signé Hästens*</p>
            </div>
            <div>
              <img src={tele} alt="Tv" />
              <p>
                Commande vocale et équipements dernier cri pour un confort
                optimal.
              </p>
            </div>
            <div>
              <img src={concierge} alt="concierge" />
              <p>
                Service disponible à toute heure pour répondre à tous vos
                besoins.
              </p>
            </div>
            {(roomData.room_style_id === 3 ||
              roomData.room_style_id === 5 ||
              roomData.room_style_id === 2) && (
              <div>
                <img src={chefcuis} alt="toque" />
                <p>
                  Dîners sur mesure préparés dans votre chambre par un chef
                  étoilé.
                </p>
              </div>
            )}
            {roomData.room_style_id === 3 && (
              <div>
                <img src={styliste} alt="styliste" />
                <p>Séances d'essayage et conseils mode privés en chambre.</p>
              </div>
            )}
          </div>
        </div>
        <div className="roomDetail_element_reserv">
          <div>
            <h1>Réservation</h1>
            <p>
              {roomData.price}€ <span>/ Nuit</span>
            </p>
            <InputStartDate />
            <InputEndDate />
          </div>
        </div>
      </div>
    </section>
  );
}
