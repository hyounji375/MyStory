import styled from "styled-components";

export const TextForm = styled.div`
  box-sizing: border-box;
  margin: 90px auto 0 auto;
  width: 80%;
  height: fit-content;
  padding: 1rem;

  & textarea {
    box-sizing: border-box;
    width: 100%;
    height: 350px;
    padding: 1rem;
    border: 1px solid ${(props) => props.theme.color1};
    resize: none;
    margin: 0 auto;

    :focus {
      outline: none;
      border: 1px solid ${(props) => props.theme.color2};
    }
  }
`;

export const BtnST = styled.div`
  float: right;
  margin-top: 25px;
`;
