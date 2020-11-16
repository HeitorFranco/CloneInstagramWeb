import styled from "styled-components";
import { AiOutlineSearch, AiFillHome } from "react-icons/ai";

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
`;

export const Wrapper = styled.div`
  height: 100%;
  width: min(950px, 100%);

  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  margin-top: 11px;
  width: 105px;
`;

export const Logo = styled.img`
  width: 100%;
`;

export const Center = styled.div`
  position: relative;
  @media (max-width: 500px) {
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
