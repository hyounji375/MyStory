import {
  ContentBox,
  ProfileImg,
  Info,
  BtnBox,
  PostContetn,
  Textarea,
  UpdateBtnBox,
} from "./contentST";
import dayjs from "dayjs";
import { SubBtn } from "../../../../../components/button";
import CommentForm from "../../comment/commentForm/commentForm";
import CommentContent from "../../comment/content/content";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import {
  REMOVE_POST_REQUEST,
  UPDATE_POST_REQUEST,
} from "../../../../../reducer/postRD";
import { ChangeTF } from "../../../../../hooks/changeTF";
import UseInput from "../../../../../hooks/useInput";
import CommentInput from "../../comment/commentForm/commentInput";

dayjs.locale("ko");

const Content = ({ post }) => {
  console.log(post);
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.userReducer);
  const [editPost, onEditPost, setEditPost] = ChangeTF(false);
  const [content, onChangeContent] = UseInput(post.content);
  const [commentBox, onCommentBox] = ChangeTF(false);

  const onRemovePost = useCallback(() => {
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: { id: post.id },
    });
  }, [dispatch, post.id]);

  const onUpdatePost = useCallback(() => {
    dispatch({
      type: UPDATE_POST_REQUEST,
      data: {
        postId: post.id,
        content: content,
      },
    });
    setEditPost((prev) => !prev);
  }, [dispatch, content, post.id, setEditPost]);

  return (
    <ContentBox>
      <div>
        <div>
          <Info>
            <ProfileImg src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/profle-512.png" />
            <div>{post.User.name}</div>
            <div>{dayjs().format("A HH:mm")}</div>
            <BtnBox>
              {info && info.id === post.UserId && (
                <SubBtn children={"수정"} onClick={onEditPost}></SubBtn>
              )}
              {info && info.id === post.UserId && (
                <SubBtn children={"삭제"} onClick={onRemovePost}></SubBtn>
              )}
            </BtnBox>
          </Info>
          {editPost ? (
            <>
              <Textarea
                cols="80"
                row="5"
                value={content}
                onChange={onChangeContent}
              />
              <UpdateBtnBox>
                <SubBtn onClick={onUpdatePost}>완료</SubBtn>
              </UpdateBtnBox>
            </>
          ) : (
            <PostContetn>{post.content}</PostContetn>
          )}
        </div>
      </div>
      <CommentForm onClick={onCommentBox} comment={post.Comments} />
      {commentBox && (
        <>
          {info && <CommentInput post={post} />}
          <CommentContent comment={post.Comments} postId={post.id} />
        </>
      )}
    </ContentBox>
  );
};
export default Content;
