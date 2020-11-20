import React, { useContext, useEffect, useState } from "react";

import {
  Container,
  Wrapper,
  Left,
  Logo,
  Center,
  SearchInput,
  SearchIcon,
  Right,
  HomeIcon,
  UserAvatar,
} from "./styles";

import { Link } from "react-router-dom";

import LogoImage from "../../images/logo.webp";
import { AuthContext } from "../../contexts/AuthContext";
import Modal from "./Modal";

const Header: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const { photo_url } = useContext(AuthContext);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src={LogoImage} />
        </Left>
        <Center>
          <SearchInput placeholder="Pesquisar" />
          <SearchIcon />
        </Center>
        <Right>
          <Link to="/">
            <HomeIcon />
          </Link>
          <UserAvatar
            src={photo_url}
            onClick={() => {
              setOpenModal(!openModal);
            }}
          />
          {openModal && <Modal />}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;
