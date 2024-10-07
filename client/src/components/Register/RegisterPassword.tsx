import React, { useState } from "react";
import InputText from "../Input/inputText/InputText";

import { RegisterPasswInterface } from "./type";
import ButtonValidated from "../Button/ButtonValidated";

export default function RegisterPassword({
  userInfo,
  HandleChange,
  setSwitchPassword,
}: RegisterPasswInterface) {
  const [confirmPassword, setConfirmPassword] = useState<string>();

  return (
    <>
      <InputText
        tools={{
          type: "text",
          name: "country",
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
            click: () => setSwitchPassword(false),
          }}
        />
      </div>
    </>
  );
}
