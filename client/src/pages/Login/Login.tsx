import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../services/context/UserContext";
import { postLogin } from "../../services/request/post";
import Register from "../../components/Register/Register";

import logoDark from "../../assets/logo/logoDark.svg";
import InputText from "../../components/Input/inputText/InputText";
import ButtonValidated from "../../components/Button/ButtonValidated";

import "./login.css";
import { UserContextInterface } from "../../services/context/type";

export default function Login() {
  const navigate = useNavigate();
  const { setUserLog } = useContext(UserContext) as UserContextInterface;

  const [emailValue, setEmaileValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");

  const [switchRegister, setSwitchRegister] = useState<boolean>(false);

  const HandleSendLog = async (event: any) => {
    event?.preventDefault();
    if (emailValue && passwordValue) {
      const response = await postLogin({
        email: emailValue,
        password: passwordValue,
      });
      setUserLog(response);
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
            {switchRegister ? (
              <Register setSwitchRegister={setSwitchRegister} />
            ) : (
              <>
                <div>
                  <InputText
                    tools={{
                      type: "text",
                      name: "mail",
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
                      name: "password",
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
              </>
            )}
          </form>
          {!switchRegister && (
            <p>
              Vous n’avez pas votre compte ?{" "}
              <span onClick={() => setSwitchRegister(true)}>
                Créer un compte
              </span>
            </p>
          )}
        </div>
        {switchRegister ? (
          <span
            className="login_card_return"
            onClick={() => setSwitchRegister(false)}
          >
            ⬅
          </span>
        ) : (
          <span className="login_card_return" onClick={() => navigate("/")}>
            𝗫
          </span>
        )}
      </div>
    </section>
  );
}
