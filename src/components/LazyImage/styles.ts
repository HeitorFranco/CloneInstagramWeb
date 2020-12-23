import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-height: 700px;
  min-height: 400px;
  position: relative;

  @media (max-width: 660px) {
    min-height: 0px;
  }
`;

export const Small = styled.img`
  width: 100%;
  max-height: 700px;
  min-height: 400px;
  object-fit: contain;

  filter: blur(6px);
  position: absolute;
  top: 0;
  left: 0;
  @media (max-width: 660px) {
    min-height: 0px;
  }
  z-index: 0;
`;

export const Original = styled.img`
  width: 100%;
  max-height: 700px;
  min-height: 400px;
  object-fit: contain;

  @media (max-width: 660px) {
    min-height: 0px;
  }
`;
