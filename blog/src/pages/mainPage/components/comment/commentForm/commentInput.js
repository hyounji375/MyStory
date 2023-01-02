import { Input } from "antd";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UseInput from "../../../../../hooks/useInput";
import { ADD_COMMENT_REQUEST } from "../../../../../reducer/postRD";
import { CommentBody } from "./commentFormST";

const CommentInput = ({ post }) => {
  const dispatch = useDispatch();
  const { addcommentDone } = useSelector((state) => state.postReducer);
  const [comment, onChangeComment, setComment] = UseInput("");

  const AddComment = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: ADD_COMMENT_REQUEST,
        data: {
          postId: post.id,
          content: comment,
        },
      });
    },
    [dispatch, post.id, comment]
  );

  useEffect(() => {
    if (addcommentDone) {
      setComment("");
    }
  }, [addcommentDone, setComment]);
  return (
    <>
      <CommentBody>
        <Input type="text" value={comment} onChange={onChangeComment} />
        <button onClick={AddComment}>등록</button>
      </CommentBody>
    </>
  );
};
export default CommentInput;
