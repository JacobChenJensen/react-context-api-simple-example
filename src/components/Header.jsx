import { useContext } from "react";
import { PostsContext } from "../App";
export default function Header() {
  const { APP_NAME } = useContext(PostsContext);
  return <h1>{APP_NAME}</h1>;
}
