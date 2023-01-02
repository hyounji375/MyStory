import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LOGOUT_REQUEST } from "../../reducer/userRD";
import { HeaderWrapper, HeaderLogo, HeaderList } from "./style";

const Header = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const { info } = useSelector((state) => state.userReducer);

  const onLogout = useCallback(() => {
    dispatch({
      type: LOGOUT_REQUEST,
    });
    navigator("/");
  }, [dispatch, navigator]);

  return (
    <HeaderWrapper>
      <HeaderLogo>
        <Link to="/main">my Stroy</Link>
      </HeaderLogo>
      <div>
        {info ? (
          <HeaderList>
            <li>
              <Link to="/write">글쓰기</Link>
            </li>

            <li>
              <button onClick={onLogout}>로그아웃</button>
            </li>
          </HeaderList>
        ) : (
          <HeaderList>
            <li>
              <Link to="/sign">회원가입</Link>
            </li>
            <li>
              <Link to="/">로그인</Link>
            </li>
          </HeaderList>
        )}
      </div>
    </HeaderWrapper>
  );
};
export default Header;
