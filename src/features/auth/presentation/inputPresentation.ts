import { useState } from "react";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_REGEX = /^.{8,64}$/;

export const implInputPresentation = () => {
  return {
    useValidator: () => {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [passwordConfirm, setPasswordConfirm] = useState("");

      return {
        email: {
          isError: !EMAIL_REGEX.test(email),
          value: email,
          onChange: setEmail,
        },
        password: {
          isError: !PASSWORD_REGEX.test(password),
          value: password,
          onChange: setPassword,
        },
        passwordConfirm: {
          isError: false,
          value: passwordConfirm,
          onChange: setPasswordConfirm,
        },
      };
    },
  };
};
