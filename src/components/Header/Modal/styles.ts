import styled from "styled-components";
import { BiUserCircle } from "react-icons/bi";

export const Container = styled.div`
  width: 200px;
  background-color: #fff;
  position: absolute;
  top: 106%;
  margin-left: -150px;

  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.0975);
  border-radius: 6px;
  border: 0 solid #000;
  transform-origin: top center;
  z-index: 3;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  padding: 8px 16px 8px 16px;
  font-size: 14px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom: 1px solid #dbdbdb;

  cursor: pointer;

  &:hover {
    background-color: #fafafa;
  }
`;

export const ProfileIcon = styled(BiUserCircle)`
  font-size: 20px;
  margin-right: 10px;
`;

export const Logoff = styled.div`
  padding: 10px 16px 10px 16px;
  cursor: pointer;
  margin-bottom: 3px;

  &:hover {
    background-color: #fafafa;
  }
  border-radius: 6px;

  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;
