import React, { useState, ChangeEvent, FormEvent } from "react";

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

import api from "../../services/api";

interface IPost {
  id: number;
  description: string;
  likes: number;

  user: {
    id: number;
    name: string;
    email: string;
    photo_url: string;
  };

  comments?: Array<{
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

const Post: React.FC<IPost> = ({
  id,
  description,
  likes,
  urlImage,
  comments,
  user,
}) => {
  const [comment, setComment] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("teste");
    const res = await api.post("/comments", {
      content: comment,
      postId: id,
    });

    setComment("");
  };
  return (
    <Container>
      <Header>
        <ProfileData>
          <div>
            <Avatar src={user.photo_url} />
            <span>{user.name}</span>
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

      <Comment onSubmit={handleSubmit}>
        <input
          placeholder="Adicione um comentário..."
          multiple
          value={comment}
          onChange={handleChange}
        ></input>
        <button disabled={!comment}>Publicar</button>
      </Comment>
    </Container>
  );
};

export default Post;
