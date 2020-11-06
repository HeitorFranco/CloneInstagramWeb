import React, { useState, useEffect, useRef } from "react";

import {
  Container,
  Header,
  ProfileData,
  Avatar,
  MoreIcon,
  ImageContent,
  Icons,
  LikeIcon,
  Description,
  Comments,
  Comment,
} from "./styles";

interface IPost {
  description: string;
  likes: number;

  comments: Array<{
    id: number;
    content: string;
    user: {
      id: number;
      name: string;
      email: string;
    };
  }>;

  urlImage: string;
}

const Post: React.FC<IPost> = ({ description, likes, urlImage, comments }) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <Container>
      <Header>
        <ProfileData>
          <div>
            <Avatar src={urlImage} />
            <span>pichauoficial</span>
          </div>
          <div>
            <MoreIcon />
          </div>
        </ProfileData>
      </Header>
      <ImageContent src={urlImage} />
      <Icons>
        <LikeIcon />
        <strong>{likes}</strong>likes
      </Icons>
      <Description>
        <span>{description}</span>
      </Description>
      <Comments>
        {comments &&
          comments.map((comment, index) => (
            <div key={index}>
              <strong>{comment.user.name}</strong> {comment.content}
            </div>
          ))}
      </Comments>

      <Comment>
        <input placeholder="Adicione um comentário..." multiple></input>
        <button>Publicar</button>
      </Comment>
    </Container>
  );
};

export default Post;
