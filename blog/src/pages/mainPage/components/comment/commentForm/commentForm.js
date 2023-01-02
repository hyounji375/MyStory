import { CommentFormCSS, CommentHeader } from "./commentFormST";

const CommentForm = ({ onClick, comment }) => {
  return (
    <CommentFormCSS onClick={onClick}>
      <CommentHeader>
        <div>댓글 {comment.length}개</div>
        <div>댓글 달기</div>
      </CommentHeader>
    </CommentFormCSS>
  );
};
export default CommentForm;
