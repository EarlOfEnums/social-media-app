import { useState } from "react";

export default function usePost() {
  const [post, setPost] = useState<iPost>({
    id: "",
    comments: [],
    postDateTime: new Date(),
  });
  const [editing, setEditing] = useState(false);

  // Update Post functions
  const _updatePost = (post: iPost) => {
    setPost({ ...post, updateDateTime: new Date() });
  };
  const updateTitle = (newTitle: string) => {
    _updatePost({ ...post, title: newTitle });
  };
  const updateMessage = (newMessage: string) => {
    _updatePost({ ...post, message: newMessage });
  };
  const updateImage = (newImage: string) => {
    _updatePost({ ...post, image: newImage });
  };
  const addComment = (newComment: iComment) => {
    _updatePost({ ...post, comments: [...post.comments, newComment] });
  };
  const updateLikes = (newLikes: number) => {
    _updatePost({ ...post, likes: newLikes });
  };

  //Update comments functions
  const updateCommentMessage = (newMessage: string, commentIndex: number) => {
    let newComments = [...post.comments];
    newComments[commentIndex].message = newMessage;
    _updatePost({ ...post, comments: [...newComments] });
  };
  const updateCommentLikes = (newLikes: number, commentIndex: number) => {
    let newComments = [...post.comments];
    newComments[commentIndex].likes = newLikes;
    _updatePost({ ...post, comments: [...newComments] });
  };
  //TODO: Implement comments on comments. Note: will probably be easiest to implement with recursion
  // const addCommentToComment = (newComment: iComment, parent: string) => {
  //     if (parent.includes('.')) {

  //     } else {
  //       const newComments = [...post.comments[Number(parent)].comments, newComment];
  //       _updatePost({...post, comments: ...post.comments[Number(parent)]
  //     }
  // };

  return {
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
  };
}

export interface iPost {
  id: string;
  title?: string;
  message?: string;
  image?: string;
  comments: iComment[];
  likes?: number;
  postDateTime: Date;
  updateDateTime?: Date;
}

export interface iComment {
  id: string;
  message?: string;
  likes?: number;
}
