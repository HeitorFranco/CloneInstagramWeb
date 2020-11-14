import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
`;
export const Content = styled.div`
  //width: min(950px, 100%);
  //margin: 20px auto;
  padding-top: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 660px) {
    padding: 50px 0;
  }
`;
