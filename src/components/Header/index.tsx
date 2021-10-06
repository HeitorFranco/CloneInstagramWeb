import React, { useContext, useState } from "react";

import {
  Container,
  Wrapper,
  Left,
  Logo,
  CreatePostButton,
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
import PostModal from "./PostModal";

const Header: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openPostModal, setOpenPostModal] = useState(false);
  const { photo_url } = useContext(AuthContext);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src={LogoImage} />
          <CreatePostButton
            onClick={() => {
              setOpenPostModal(!openPostModal);
            }}
          >
            Criar Postagem
          </CreatePostButton>
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
          {openPostModal && (
            <>
              <PostModal setOpenPostModal={setOpenPostModal} />
            </>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;
