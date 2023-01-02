import { useCallback, useEffect, useState } from "react";
import Content from "./content/content";
import PostForm from "./postForm/form";
import Pagination from "../paginagion/pagination";
import axios from "axios";

const Post = () => {
  const [post, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:3030/post");
      setPost(res.data);
    };
    getData();
  }, []);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = post.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = useCallback(
    (pageNumber) => {
      setCurrentPage(pageNumber);
      window.scrollTo(0, 0);
    },
    [setCurrentPage]
  );

  return (
    <>
      <PostForm>
        {currentPost.length > 0 &&
          currentPost.map((P, index) => <Content key={index} post={P} />)}
      </PostForm>
      <Pagination
        postPerPage={postPerPage}
        totalPost={post.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
};
export default Post;
