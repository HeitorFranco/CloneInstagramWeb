import styled from "styled-components";
import { Form } from "@unform/web";
import { RiCloseFill } from "react-icons/ri";

interface IInputBlock {
  hasValue: boolean;
}

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.8);
`;

export const Container = styled(Form)`
  width: min(400px, 100%);
  background-color: #fff;
  border: 1px solid #dbdbdb;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 60px 0;

  @media (max-width: 450px) {
    width: 100vw;
    height: 100vh;
  }
`;

export const InputBlock = styled.div<IInputBlock>`
  min-height: 42px;
  margin-bottom: 5px;

  input {
    position: relative;
    width: 270px;
    height: 42px;
    padding: 10px 0 7px 8px;
    font-size: 14px;

    color: #262626;

    outline: none;
    border: 1px solid #dbdbdb;
    border-radius: 2px;

    margin-top: 20px;

    &:focus {
      border: 1px solid #a8a8a8;
    }
  }
`;

export const InputFileLabel = styled.label`
  width: 270px;
  height: 36px;

  margin-top: 25px;
  margin-bottom: 20px;

  border: 2px solid #0095f6;
  outline: none;
  border-radius: 4px;

  color: #0095f6;
  font-weight: 500;
  font-size: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  input {
    display: none;
  }
`;

export const ButtonSubmit = styled.button`
  background-color: #0095f6;
  border: none;
  color: #fff;
  padding: 10px 35px;

  font-size: 16px;
  border-radius: 4px;
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

  @media (max-width: 450px) {
    color: #000;
  }
`;
