import styled, { css } from "styled-components";
import { Form } from "@unform/web";

interface IInputBlock {
  hasValue: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #f5f5f5;
  @media (max-width: 450px) {
    background-color: #ffffff;
  }
`;

export const Content = styled(Form)`
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

export const Logo = styled.img`
  width: 200px;
  margin-bottom: 35px;
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

export const Button = styled.button`
  width: 270px;
  height: 36px;

  background-color: #0095f6;
  outline: none;
  border: none;
  border-radius: 4px;

  color: #fff;
  font-weight: 500;
  font-size: 14px;

  margin-top: 20px;

  cursor: pointer;

  &:disabled {
    background-color: #afdcf9;
    cursor: initial;
  }
`;

export const Register = styled.span`
  font-size: 13px;
  margin-top: 25px;
  a {
    font-weight: 700;
    text-decoration: none;
    color: #0095f6;
  }
`;

export const Login = styled.span`
  font-size: 13px;
  margin-top: 25px;
  a {
    font-weight: 700;
    text-decoration: none;
    color: #0095f6;
  }
`;
