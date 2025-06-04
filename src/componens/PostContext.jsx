import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const PostContext = createContext();
const apiBaseUrl = "http://localhost:3000/posts";

function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get(`${apiBaseUrl}`).then((res) => {
      const postList = res.data.data;
      console.log(postList);

      setPosts(postList);
    });
  }, []);

  const postData = { posts };

  return (
    <PostContext.Provider value={postData}>{children}</PostContext.Provider>
  );
}

function usePosts() {
  return useContext(PostContext);
}
export { PostProvider, usePosts };
