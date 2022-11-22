import { useState, useEffect } from "react";
import { iPost } from "./usePost";
import usePost from "./usePost";

export default function useFeed() {
  const {
    post,
    editing,
    setPost,
    setEditing,
    updateTitle,
    updateMessage,
    updateImage,
    addComment,
    updateLikes,
    updateCommentLikes,
    updateCommentMessage,
  } = usePost();
  const [feed, setFeed] = useState<iPost[]>([]);
  const [fetching, setFetching] = useState(true);

  const addPost = () => {
    const newPost = { id: "", comments: [], postDateTime: new Date() };
    setFeed([...feed, newPost]);
  };
  const deletePost = (id: string) => {
    const newFeed = feed.filter((p) => p.id !== id);
    setFeed([...newFeed]);
  };
  useEffect(() => {
    fetch("http://localhost:3000/posts").then((posts: Response) => {
      posts
        .json()
        .then((posts) => setFeed(posts))
        .then(() => setFetching(false))
        .catch((reason: any) => console.log(reason));
    });
  }, []);
  return {
    feed,
    fetching,
    addPost,
    deletePost,
    setPost,
    setEditing,
    updateTitle,
    updateMessage,
    updateImage,
    addComment,
    updateLikes,
    updateCommentLikes,
    updateCommentMessage,
  };
}
