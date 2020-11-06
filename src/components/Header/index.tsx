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

import LogoImage from "../../images/logo.png";

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
          <HomeIcon />
          <UserAvatar />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;
