import styled from "styled-components";

export const ContentBox = styled.div`
  box-sizing: border-box;
  max-width: 800px;
  width: 100%;
  margin: 20px auto;
  border: 1px solid ${(props) => props.theme.color2};
  padding: 1rem;
`;

export const ProfileImg = styled.img`
  box-sizing: border-box;
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: middle;
  text-align: center;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;

  & div {
    margin: 0 5px 0 8px;
  }

  & :nth-child(2) {
    font-weight: bold;
  }
`;

export const PostContetn = styled.div`
  padding: 1rem;
`;

export const BtnBox = styled.div`
  float: right;
  position: absolute;
  right: 320px;
  & button {
    margin: 5px;
  }
`;

export const Textarea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.color2};
  resize: none;
  margin: 10px auto 0 auto;

  :focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.color3};
  }
`;

export const UpdateBtnBox = styled.div`
  float: right;
  margin-top: 5px;
`;
