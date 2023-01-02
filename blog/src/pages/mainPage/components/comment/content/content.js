import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_COMMENT_REQUEST } from "../../../../../reducer/postRD";
import { CommentBox, UserDiv, ContentDiv, DeleteBtn } from "./contentST";

const CommentContent = ({ comment, postId }) => {
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.userReducer);

  const RemoveComment = useCallback(
    (commentId) => (e) => {
      e.preventDefault();
      dispatch({
        type: REMOVE_COMMENT_REQUEST,
        data: {
          postId: postId,
          commentId: commentId,
        },
      });
    },
    [dispatch, postId]
  );

  return (
    <>
      {comment &&
        comment.map((C) => (
          <CommentBox key={C.id}>
            <UserDiv>{C.User.name}</UserDiv>
            <ContentDiv>{C.content}</ContentDiv>
            {info && info.id === C.UserId && (
              <DeleteBtn onClick={RemoveComment(C.id)}>삭제</DeleteBtn>
            )}
          </CommentBox>
        ))}
    </>
  );
};
export default CommentContent;
