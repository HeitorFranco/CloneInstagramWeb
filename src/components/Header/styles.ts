import styled from "styled-components";
import { AiOutlineSearch, AiFillHome } from "react-icons/ai";
import { RiCloseFill } from "react-icons/ri";

export const Container = styled.div`
  width: 100%;
  height: 54px;
  background-color: #fff;

  border-bottom: 1px solid #dfdfdf;

  top: 0;
  left: 0;

  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: min(950px, 100%);

  padding: 0 20px;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  margin-top: 8px;
  width: 100px;
`;

export const CreatePostButton = styled.button`
  margin-left: 15px;
  width: 100px;

  padding: 5px 2px;

  color: #0095f6;
  cursor: pointer;
  font-weight: 500;

  background: none;
  border: none;
  outline: none;
`;

export const Center = styled.div`
  position: relative;
  align-self: center;
  justify-self: flex-end;
  @media (max-width: 650px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  background-color: #fafafa;
  color: #8e8e8e;

  border: 1px solid #dbdbdb;
  border-radius: 4px;
  outline: none;
  padding: 3px 10px 5px 28px;

  text-align: center;

  height: 26px;
  width: 215px;

  &:focus {
    text-align: left;
  }

  &::placeholder {
    color: #8e8e8e;
    font-size: 13px;

    font-weight: 300;
  }
`;
export const SearchIcon = styled(AiOutlineSearch)`
  color: red;
  width: 30px;
  position: absolute;
  left: 1px;
  top: 50%;
  transform: translateY(-50%);

  color: #8e8e8e;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-end;
  grid-column: 3;

  > a {
    color: black;
  }
`;

export const HomeIcon = styled(AiFillHome)`
  display: block;
  width: 28px;
  height: 28px;
  margin-right: 8px;

  cursor: pointer;
`;

export const UserAvatar = styled.img`
  width: 22px;
  height: 22px;

  border-radius: 50%;

  cursor: pointer;
`;

export const CloseButton = styled(RiCloseFill)`
  position: absolute;
  top: 15px;
  right: 15px;

  width: 35px;
  height: 35px;

  color: #fff;

  cursor: pointer;
`;
