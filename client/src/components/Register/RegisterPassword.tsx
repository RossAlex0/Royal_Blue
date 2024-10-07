import React, { useState } from "react";
import InputText from "../Input/inputText/InputText";

import { RegisterPasswInterface } from "./type";
import ButtonValidated from "../Button/ButtonValidated";
import { postCostumer } from "../../services/request/post";
import { useNavigate } from "react-router-dom";

export default function RegisterPassword({
  userInfo,
  HandleChange,
  setSwitchRegister,
}: RegisterPasswInterface) {
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [msgError, setMsgError] = useState<String>("");

  const HandlePostCostumer = async () => {
    if (userInfo.password !== confirmPassword) {
      setMsgError("Les mots de passe ne sont pas identiques");
    } else if (
      userInfo.lastname == "" ||
      userInfo.firstname == "" ||
      userInfo.email == ""
    ) {
      setMsgError("Veuillez renseigner tous les champs obligatoires");
    } else {
      await postCostumer(userInfo);
      setSwitchRegister(false);
    }
    setTimeout(() => setMsgError(""), 5000);
  };

  return (
    <>
      <InputText
        tools={{
          type: "text",
          name: "country_id",
          label: "Votre pays",
          placeholder: "Votre pays",
          state: userInfo.country_id,
          HandleChange: HandleChange,
        }}
      />
      <InputText
        tools={{
          type: "password",
          name: "password",
          label: "Mot de passe *",
          placeholder: "Votre mot de passe",
          state: userInfo.password,
          HandleChange: HandleChange,
        }}
      />
      <InputText
        tools={{
          type: "password",
          name: "confirmpassword",
          label: "Confirmez votre mot de passe *",
          placeholder: "Confirmez votre mot de paasse",
          state: confirmPassword,
          setter: setConfirmPassword,
        }}
      />
      <div className="register_btnValide">
        <ButtonValidated
          tools={{
            type: "button",
            text: "Valider",
            click: HandlePostCostumer,
          }}
        />
      </div>
      {msgError && <p className="register_msgError">{msgError}</p>}
    </>
  );
}
