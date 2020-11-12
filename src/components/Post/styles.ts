import styled from "styled-components";
import { FiHeart } from "react-icons/fi";

export const Container = styled.article`
  width: 616px;
  max-height: 1100px;
  background-color: gray;
  background-color: #ffffff;

  border: 1px solid #dbdbdb;
  border-radius: 3px;

  display: flex;
  flex-direction: column;

  margin-bottom: 10px;

  @media (max-width: 660px) {
    width: 100%;
    border: none;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 64px;

  padding: 16px;
`;

export const ProfileData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    > span {
      color: #262626;
      font-size: 14px;
      letter-spacing: 0.1px;
      font-weight: 500;
    }
  }
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 12px;

  object-fit: cover;
`;

export const MoreIcon = styled.div``;

export const ImageContent = styled.img`
  width: 100%;
  max-height: 700px;
  min-height: 400px;
  object-fit: contain;

  @media (max-width: 660px) {
    min-height: 0px;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  > strong {
    margin-right: 4px;
  }
`;

export const LikeIcon = styled(FiHeart)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin-right: 10px;
`;

export const Description = styled.div`
  padding: 0 15px 5px 15px;
`;

export const Comments = styled.div`
  padding: 15px;
  flex: 1;
  > div {
    margin-bottom: 10px;
  }
`;
export const Comment = styled.form`
  min-height: 56px;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;

  display: flex;
  padding: 0px 20px;

  flex: 1;

  > input {
    width: 100%;
    max-height: 80px;

    outline: none;
    border: 0;
    flex: 1;
  }
  > button {
    border: 0;
    outline: 0;
    background: 0;
    font-size: 14px;
    font-weight: bold;
    margin-left: 20px;
    color: #0095f6;
    border: 0;
    outline: 0;
    font-size: 14px;
    color: #0095f6;
    cursor: pointer;
  }
  > button[disabled] {
    opacity: 0.3;
    cursor: initial;
  }
`;
