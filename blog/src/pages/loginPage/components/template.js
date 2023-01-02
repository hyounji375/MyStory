import { MainBtn } from "../../../components/button";
import { Wrapper, Template, BtnWraaper } from "./templateST";
import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UseInput from "../../../hooks/useInput";
import { useCallback, useEffect } from "react";
import { LOGIN_REQUEST } from "../../../reducer/userRD";

const LoginTemplate = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const [email, onChangeEmail] = UseInput("");
  const [password, onChangePassword] = UseInput("");

  const { info, loginError } = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (info) {
      navigator("/main");
    }
  }, [info, navigator]);

  useEffect(() => {
    if (loginError) {
      alert(loginError);
    }
  }, [loginError]);

  const onLogin = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: LOGIN_REQUEST,
        data: { email: email, password: password },
      });
    },
    [dispatch, email, password]
  );

  const LoginEnter = useCallback(
    (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        dispatch({
          type: LOGIN_REQUEST,
          data: { email: email, password: password },
        });
      }
    },
    [dispatch, email, password]
  );

  return (
    <Template>
      <Wrapper>
        <p>
          <Input
            type="text"
            placeholder="이메일을 입력해주세요."
            autoComplete="off"
            size="large"
            prefix={<UserOutlined />}
            value={email}
            onChange={onChangeEmail}
          />
        </p>
      </Wrapper>
      <Wrapper>
        <p>
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            autoComplete="off"
            size="large"
            prefix={<UserOutlined />}
            value={password}
            onChange={onChangePassword}
            onKeyPress={LoginEnter}
          />
        </p>
      </Wrapper>
      <BtnWraaper>
        <MainBtn children={"로그인"} onClick={onLogin} />
        <Link to="/sign">
          <MainBtn children={"회원가입"} />
        </Link>
      </BtnWraaper>
    </Template>
  );
};
export default LoginTemplate;
