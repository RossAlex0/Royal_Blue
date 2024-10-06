import React, { useState } from "react";

import logoDark from "../../assets/logo/logoDark.svg";
import InputText from "../../components/Input/inputText/InputText";
import ButtonValidated from "../../components/Button/ButtonValidated";

import "./login.css";
import { postLogin } from "../../services/request/post";

export default function Login() {
  const [emailValue, setEmaileValue] = useState<string>();
  const [passwordValue, setPasswordValue] = useState<string>();

  const HandleSendLog = () => {
    if (emailValue && passwordValue) {
      postLogin({ mail: emailValue, password: passwordValue });
    }
  };

  return (
    <section className="login">
      <div className="login_card">
        <div className="login_card_header">
          <img src={logoDark} alt="royalBlue" />
        </div>
        <div className="login_card_form">
          <form>
            <div>
              <InputText
                tools={{
                  type: "text",
                  label: "Email",
                  placeholder: "example@gmail.com",
                  state: emailValue,
                  setter: setEmaileValue,
                }}
              />
            </div>
            <div>
              <InputText
                tools={{
                  type: "password",
                  label: "Mot de passe",
                  placeholder: "**********",
                  state: passwordValue,
                  setter: setPasswordValue,
                }}
              />
            </div>
            <div>
              <ButtonValidated
                tools={{
                  type: "submit",
                  text: "Approuver",
                  click: HandleSendLog,
                }}
              />
            </div>
          </form>
          <p>
            Vous n’avez pas votre compte ? <span>Créer un compte</span>
          </p>
        </div>
      </div>
    </section>
  );
}
