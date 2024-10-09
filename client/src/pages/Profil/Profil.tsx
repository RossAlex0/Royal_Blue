import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import "./profil.css";
import InputText from "../../components/Input/inputText/InputText";
import ButtonValidated from "../../components/Button/ButtonValidated";
import { LoaderInterface } from "./type";
import { putCostumer, putPasswordCostumer } from "../../services/request/put";
import { deleteCookie, deleteCostumer } from "../../services/request/delete";
import { UserContext } from "../../services/context/UserContext";
import { UserContextInterface } from "../../services/context/type";

export default function Profil() {
  const navigate = useNavigate();
  const { setUserLog } = useContext(UserContext) as UserContextInterface;
  const { costumerData, countriesData } = useLoaderData() as LoaderInterface;

  const [userInfo, setUserInfo] = useState({
    lastname: costumerData.lastname,
    firstname: costumerData.firstname,
    id: costumerData.id,
    email: costumerData.email,
    country_id: costumerData.country_id,
  });
  console.info(userInfo);
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [confirmValue, setConfirmValue] = useState<string>("");
  const [msgError, setMsgError] = useState<string | undefined>();

  const HandlePutCostumer = () => {
    putCostumer(userInfo.id, userInfo);
  };
  const HandlePutCostumerPass = () => {
    if (passwordValue === confirmValue) {
      putPasswordCostumer(userInfo.id, passwordValue);
    } else {
      setMsgError("Les mots de passe doivent être identiques");
      setTimeout(() => setMsgError(undefined), 5000);
    }
  };

  const HandleLogoutCostumer = async () => {
    await deleteCookie();
    setUserLog(null);
    setTimeout(() => navigate("/"), 500);
  };

  const HandleDeleteCostumer = async () => {
    await deleteCostumer(userInfo.id);
    await deleteCookie();
    setUserLog(null);
    setTimeout(() => navigate("/"), 500);
  };
  return (
    <section className="profil">
      <div className="profil_element">
        <h1>Votre compte</h1>
        <div className="profil_element_form">
          <form>
            <h2>Vos infos</h2>
            <div>
              <InputText
                tools={{
                  type: "text",
                  name: "mail",
                  label: "Nom",
                  placeholder: "example@gmail.com",
                  state: userInfo.lastname,
                  setter: (value) =>
                    setUserInfo({ ...userInfo, lastname: value }),
                }}
              />
            </div>
            <div>
              <InputText
                tools={{
                  type: "text",
                  name: "mail",
                  label: "Prénom",
                  placeholder: "example@gmail.com",
                  state: userInfo.firstname,
                  setter: (value) =>
                    setUserInfo({ ...userInfo, firstname: value }),
                }}
              />
            </div>
            <div>
              <InputText
                tools={{
                  type: "text",
                  name: "mail",
                  label: "Email",
                  placeholder: "example@gmail.com",
                  state: userInfo.email,
                  setter: (value) => setUserInfo({ ...userInfo, email: value }),
                }}
              />
            </div>
            <div>
              <label className="profil_form_label">Pays</label>
              <select
                onChange={(e) =>
                  setUserInfo({
                    ...userInfo,
                    country_id: e.target.value,
                  })
                }
              >
                <option value={costumerData.country_id}>
                  {costumerData.country}
                </option>
                {countriesData.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <ButtonValidated
                tools={{
                  type: "button",
                  text: "Valider",
                  click: HandlePutCostumer,
                }}
              />
            </div>
          </form>
          <form>
            <h2>Votre mot de passe</h2>
            <div>
              <div className="profil_element_password">
                <InputText
                  tools={{
                    type: "password",
                    name: "password",
                    label: "Mot de passe",
                    placeholder: "**********",
                    state: passwordValue,
                    setter: setPasswordValue,
                  }}
                />
              </div>
              <div className="profil_element_password">
                <InputText
                  tools={{
                    type: "password",
                    name: "password",
                    label: "Confirmation",
                    placeholder: "**********",
                    state: confirmValue,
                    setter: setConfirmValue,
                  }}
                />
              </div>
            </div>
            <div>
              <ButtonValidated
                tools={{
                  type: "button",
                  text: "Valider",
                  click: HandlePutCostumerPass,
                }}
              />
              {msgError && <p className="msgError">{msgError}</p>}
            </div>
          </form>
        </div>
        <div className="profil_element_close">
          <button type="button" onClick={HandleLogoutCostumer}>
            Se déconnecter
          </button>
          <button type="button" onClick={HandleDeleteCostumer}>
            Supprimer mon compte
          </button>
        </div>
      </div>
    </section>
  );
}
