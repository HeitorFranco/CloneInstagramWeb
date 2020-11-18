import React, { useContext, useRef } from "react";

import { SubmitHandler, FormHandles } from "@unform/core";

import * as Yup from "yup";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import LoginAndRegister from "../../components/LoginAndRegister";
import { AuthContext } from "../../contexts/AuthContext";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const { handleRegister } = useContext(AuthContext);
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit: SubmitHandler<FormData> = async (data, { reset }) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string()
          .min(2, "O nome precisa de no mínimo 2 caracteres")
          .required("O nome é obrigatório"),
        email: Yup.string()
          .email("Digite um e-mail válido")
          .required("O e-mail é obrigatório"),
        password: Yup.string()
          .min(6, "A senha precisa de no mínimo 6 caracteres")
          .required("A senha é obrigatória"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      handleRegister(data).then((authorized) => {
        if (authorized) {
          history.push("/");
        }
        reset();
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {} as any;
        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });

        formRef.current?.setErrors(errorMessages);
      }
    }
  };

  return (
    <LoginAndRegister formRef={formRef} handleSubmit={handleSubmit} register />
  );
};

export default Register;
