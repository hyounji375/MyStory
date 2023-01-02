import { Wrapper, Text, Template, SignBtn, PWMessage } from "./templateST";
import { Input } from "antd";
import { MainBtn } from "../../../components/button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UseInput from "../../../hooks/useInput";
import { useCallback, useEffect, useState } from "react";
import { SIGN_REQUEST } from "../../../reducer/userRD";

const SignTemplate = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const { signDone, signError } = useSelector((state) => state.userReducer);

  const [email, onChangeEmail] = UseInput("");
  const [name, onChangeName] = UseInput("");
  const [password, onChangePassword] = UseInput("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState(false);

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const emailResult = email.includes("@");
    const passwordResult = password.length > 5;
    if (email === "" || password === "") {
      setDisabled(true);
    } else {
      if (emailResult && passwordResult && confirmPassword === password) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }
  }, [email, password, confirmPassword]);

  const onChangeConfirmPassword = useCallback(
    (e) => {
      setConfirmPassword(e.target.value);
      setCheckPassword(e.target.value !== password);
    },
    [password]
  );

  useEffect(() => {
    if (signError) {
      alert(signError);
    }
  }, [signError]);

  useEffect(() => {
    if (signDone) {
      alert("회원가입이 완료되었습니다.");
      navigator("/");
    }
  }, [signDone, navigator]);

  const onRegister = useCallback(
    (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
        return setCheckPassword(true);
      }
      dispatch({
        type: SIGN_REQUEST,
        data: { email, name, password },
      });
    },
    [dispatch, confirmPassword, email, name, password]
  );

  return (
    <Template>
      <Wrapper>
        <Text>
          이메일
          <Input
            type="text"
            placeholder="이메일을 입력해주세요."
            autoComplete="off"
            required
            value={email}
            onChange={onChangeEmail}
          />
        </Text>
        <Text>
          이름
          <Input
            type="text"
            placeholder="이름을 입력해주세요."
            autoComplete="off"
            required
            value={name}
            onChange={onChangeName}
          />
        </Text>
        <Text>
          비밀번호
          <Input
            type="password"
            placeholder="비밀번호를 여섯 자리 이상 입력해주세요."
            autoComplete="off"
            required
            value={password}
            onChange={onChangePassword}
          />
        </Text>
        <Text>
          비밀번호 확인
          <Input
            type="password"
            placeholder="비밀번호를 다시 입력해주세요."
            autoComplete="off"
            required
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
          />
        </Text>
        {checkPassword && confirmPassword && (
          <PWMessage>비밀번호가 일치하지 않습니다.</PWMessage>
        )}
      </Wrapper>
      <SignBtn>
        <MainBtn
          children={"회원가입"}
          onClick={onRegister}
          disabled={disabled}
        />
      </SignBtn>
    </Template>
  );
};
export default SignTemplate;
