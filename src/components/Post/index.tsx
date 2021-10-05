import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";

import {
  Container,
  Header,
  ProfileData,
  Avatar,
  MoreIcon,
  Icons,
  LikeIcon,
  Description,
  Comments,
  Comment,
} from "./styles";

import api from "../../services/api";

import IPost from "../../interfaces/Post";
import LazyImage from "../LazyImage";

const Post: React.FC<IPost> = ({
  id,
  description,
  likes,
  url,
  url_compressed,
  comments,
  user,
  myLike,
}) => {
  const [comment, setComment] = useState("");

  useEffect(() => {
    console.log(myLike);
  }, [myLike]);

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
    await api.post("/likes", {
      postId: id,
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
      <LazyImage source={url} smallSource={url_compressed} />
      <Icons>
        <LikeIcon onClick={handleLike} like={myLike} />
        <strong>{likes}</strong>like{likes > 1 && "s"}
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
