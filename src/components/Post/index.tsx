import React, { useState, ChangeEvent, FormEvent, useRef } from "react";

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

import IPost from "../../interfaces/Post";

const Post: React.FC<IPost> = ({
  id,
  description,
  likes,
  url,
  comments,
  user,
  myLike,
}) => {
  const [like, setLike] = useState(myLike);
  const [comment, setComment] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await api.post("/comments", {
      content: comment,
      postId: id,
    });

    setComment("");
  };

  const handleLike = async () => {
    await api
      .post("/likes", {
        postId: id,
      })
      .then(({ data }) => {
        if (data.myLike) {
          setLike(true);
        } else {
          setLike(false);
        }
      });
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
      <ImageContent src={url} />
      <Icons>
        <LikeIcon onClick={handleLike} like={like} />
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
