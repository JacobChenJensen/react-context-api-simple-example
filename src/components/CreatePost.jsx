import { useState, useContext } from "react";
import { PostsContext } from "../App";

const INITIAL_POST = {
  title: "",
  content: "",
};

export default function CreatePost() {
  const storedPostTitle = localStorage.getItem("title") || INITIAL_POST.title;
  const storedPostContent =
    localStorage.getItem("content") || INITIAL_POST.content;
  const [post, setPost] = useState({
    title: storedPostTitle,
    content: storedPostContent,
  });
  const { posts, setPosts } = useContext(PostsContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
    localStorage.setItem([name], value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([...posts, post]);
    setPost(INITIAL_POST);
    localStorage.clear();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={post.title}
        ></input>
      </label>
      <br />
      <label>
        Content:
        <textarea
          name="content"
          onChange={handleChange}
          value={post.content}
          cols={50}
          rows={5}
        ></textarea>
      </label>
      <br />
      <input type="submit" value="Post!"></input>
    </form>
  );
}
