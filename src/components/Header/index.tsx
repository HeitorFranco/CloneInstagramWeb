import React from "react";

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

const Header: React.FC = () => {
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
          <UserAvatar />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;
