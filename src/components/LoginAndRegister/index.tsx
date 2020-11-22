import React, { ChangeEvent, useState } from "react";
import {
  Container,
  Content,
  Logo,
  InputBlock,
  Button,
  Register,
  Login,
} from "./styles";

import { FormHandles, SubmitHandler } from "@unform/core";

import LogoImage from "../../images/logo.webp";
import Input from "../../components/Input";

import { Link } from "react-router-dom";

interface IProps {
  register?: boolean;
  handleSubmit: SubmitHandler;
  formRef: React.RefObject<FormHandles>;
}

const LoginAndRegister: React.FC<IProps> = ({
  register = false,
  handleSubmit,
  formRef,
}) => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <Content ref={formRef} onSubmit={handleSubmit}>
        <Logo src={LogoImage} alt="Instagram" />

        {register && (
          <>
            <InputBlock hasValue={!!name}>
              <Input
                placeholder={"Nome Completo"}
                name="name"
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
                autoComplete="off"
              />
            </InputBlock>
            <InputBlock hasValue={!!username}>
              <Input
                placeholder={"Nome do usuário"}
                name="username"
                value={username}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setUsername(e.target.value)
                }
                autoComplete="off"
              />
            </InputBlock>
          </>
        )}

        <InputBlock hasValue={!!email}>
          <Input
            placeholder={"Email"}
            name="email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            autoSave="off"
            autoComplete="off"
          />
        </InputBlock>

        <InputBlock hasValue={!!password}>
          <Input
            placeholder={"Senha"}
            name="password"
            type="password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            autoComplete="off"
            autoSave="off"
            autoCorrect="off"
          />
        </InputBlock>
        <Button>Entrar</Button>

        {register ? (
          <Login>
            Tem uma conta? <Link to="/entrar">Conecte-se</Link>
          </Login>
        ) : (
          <Register>
            Não tem uma conta? <Link to="/cadastrar">Cadastre-se</Link>
          </Register>
        )}
      </Content>
    </Container>
  );
};

export default LoginAndRegister;
