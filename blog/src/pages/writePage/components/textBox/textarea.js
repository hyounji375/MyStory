import { MainBtn } from "../../../../components/button";
import { TextForm, BtnST } from "./textareaST";
import { useDispatch, useSelector } from "react-redux";
import UseInput from "../../../../hooks/useInput";
import { useCallback, useEffect } from "react";
import { ADD_POST_REQUEST } from "../../../../reducer/postRD";
import { useNavigate } from "react-router-dom";

const Textarea = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const [content, onChangeContent, setContent] = UseInput("");
  const { addpostDone, addpostError } = useSelector(
    (state) => state.postReducer
  );

  useEffect(() => {
    if (addpostDone) {
      setContent("");
    }
  }, [addpostDone, setContent]);

  useEffect(() => {
    if (addpostError !== null) {
      alert(addpostError);
    }
  }, [addpostError]);

  const onAddPost = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: ADD_POST_REQUEST,
        data: content,
      });
      navigator("/main");
    },
    [dispatch, content, navigator]
  );

  return (
    <>
      <TextForm>
        <textarea
          cols="100"
          rows="20"
          value={content}
          onChange={onChangeContent}
          autoComplete="off"
        />
        <BtnST>
          <MainBtn children={"등록"} onClick={onAddPost} />
        </BtnST>
      </TextForm>
    </>
  );
};
export default Textarea;
