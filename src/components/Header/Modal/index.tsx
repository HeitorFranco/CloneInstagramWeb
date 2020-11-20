import React, { useContext } from "react";

import { Container, Profile, ProfileIcon, Logoff } from "./styles";
import { AuthContext } from "../../../contexts/AuthContext";

const Modal: React.FC = () => {
  const { handleLogoff } = useContext(AuthContext);
  return (
    <Container>
      <Profile>
        <ProfileIcon /> <span>Perfil</span>
      </Profile>
      <Logoff onClick={handleLogoff}>Sair</Logoff>
    </Container>
  );
};

export default Modal;
