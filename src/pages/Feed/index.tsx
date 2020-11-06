import React, { useCallback, useEffect, useState } from "react";
import Header from "../../components/Header";
import Post from "../../components/Post";

import { Container, Content } from "./styles";

import api from "../../services/api";

interface IPost {
  id: number;
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

  url: string;
}

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [endReached, setEndReached] = useState(false);
  const [page, setPage] = useState(1);

  const getPosts = async (pageNumber: number = page) => {
    const res = await api.get(`posts?page=${pageNumber}&limit=2`, {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA0NjExMzQ3LCJleHAiOjE2MDQ2OTc3NDd9.pAD_1gNXOK2CvcsihKMazDB0unXzq2HMV3Kv_Ig0z00",
      },
    });
    setPosts([...posts, ...res.data.posts]);
    setPage(page + 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight * 0.9
      ) {
        setEndReached(true);
      } else {
        setEndReached(false);
      }
    });
    getPosts(1);
  }, []);

  useEffect(() => {
    getPosts();
  }, [endReached]);

  return (
    <Container>
      <Header />
      <Content>
        {posts &&
          posts.map((post, index) => (
            <Post
              key={index}
              description={post.description}
              likes={post.likes}
              urlImage={post.url}
              comments={post.comments}
            />
          ))}
      </Content>
    </Container>
  );
};

export default Feed;
