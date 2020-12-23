import React, { useCallback, useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import Post from "../../components/Post";

import { Container, Content } from "./styles";

import io from "socket.io-client";
import api from "../../services/api";

import { AuthContext } from "../../contexts/AuthContext";

import IComment from "../../interfaces/Comment";
import IPost from "../../interfaces/Post";

const Feed: React.FC = () => {
  const { id } = useContext(AuthContext);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [endReached, setEndReached] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(999);

  const getPosts = async (pageNumber: number = page) => {
    if (pageNumber * 2 <= totalPosts) {
      const res = await api.get(`posts?page=${pageNumber}&limit=4`);
      setTotalPosts(res.data.total);
      setPosts([...posts, ...res.data.posts]);
      setPage(page + 1);
      setEndReached(false);
    }
  };

  useEffect(() => {
    const socket = io.connect(`${process.env.REACT_APP_API_URL}`, {
      transports: ["websocket"],
    });
    getPosts(1);
    socket.on("newPost", (data: IPost) => {
      setPosts((prevPosts) => [...prevPosts, data]);
    });
    socket.on("newComment", (data: IComment) => {
      setPosts((prevPosts) => {
        return prevPosts.map((post) => {
          if (post.id === data.post.id) {
            post.comments?.push(data);
          }
          return post;
        });
      });
    });
    socket.on("deleteLike", (data: any) => {
      setPosts((prevPosts) => {
        return prevPosts.map((post) => {
          if (post.id === data.id) {
            data.myLike = post.myLike;
            if (id === data.myLikeId) {
              data.myLike = false;
            }
            post = data;
          }
          return post;
        });
      });
    });

    socket.on("newLike", (data: any) => {
      setPosts((prevPosts) => {
        return prevPosts.map((post) => {
          if (post.id === data.id) {
            data.myLike = post.myLike;
            if (id === data.myLikeId) {
              data.myLike = true;
            }

            post = data;
          }
          return post;
        });
      });
    });

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

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (endReached) {
      getPosts();
    }
  }, [endReached]);

  return (
    <Container>
      <Header />
      <Content>
        {posts &&
          posts.map((post, index) => (
            <Post
              id={post.id}
              key={index}
              description={post.description}
              likes={post.likes}
              url={post.url}
              url_compressed={post.url_compressed}
              comments={post.comments}
              user={post.user}
              myLike={post.myLike || false}
            />
          ))}
      </Content>
    </Container>
  );
};

export default Feed;
