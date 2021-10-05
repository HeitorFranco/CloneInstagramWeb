import styled from "styled-components";
import { Form } from "@unform/web";

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

  padding: 60px 0;
  @media (max-width: 450px) {
    border: none;
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

    &:focus {
      border: 1px solid #a8a8a8;
    }
  }
`;
