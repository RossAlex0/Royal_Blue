import { useState } from "react";
import InputText from "../Input/inputText/InputText";
import "./register.css";
import React from "react";
import RegisterPassword from "./RegisterPassword";
import ButtonValidated from "../Button/ButtonValidated";

export default function Register() {
  const [switchPassword, setSwitchPassword] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState({
    lastname: "",
    firstname: "",
    email: "",
    password: "",
    country_id: "",
  });

  console.info(userInfo);
  const HandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div id="register_form">
      {!switchPassword ? (
        <>
          <InputText
            tools={{
              type: "text",
              name: "lastname",
              label: "Nom *",
              placeholder: "Votre nom",
              state: userInfo.lastname,
              HandleChange: HandleChange,
            }}
          />
          <InputText
            tools={{
              type: "text",
              name: "firstname",
              label: "Prénom *",
              placeholder: "Votre prénom",
              state: userInfo.firstname,
              HandleChange: HandleChange,
            }}
          />
          <InputText
            tools={{
              type: "text",
              name: "mail",
              label: "Email *",
              placeholder: "Votre adresse mail",
              state: userInfo.lastname,
              HandleChange: HandleChange,
            }}
          />
          <div className="register_btnValide">
            <ButtonValidated
              tools={{
                type: "button",
                text: "Suivant",
                click: () => setSwitchPassword(true),
              }}
            />
          </div>
        </>
      ) : (
        <RegisterPassword
          userInfo={userInfo}
          HandleChange={HandleChange}
          setSwitchPassword={setSwitchPassword}
        />
      )}
    </div>
  );
}