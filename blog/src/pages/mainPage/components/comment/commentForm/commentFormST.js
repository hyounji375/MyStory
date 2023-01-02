import styled from "styled-components";

export const CommentFormCSS = styled.div`
  overflow: hidden;
  width: 100%;
  margin-top: 2rem;
`;

export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;
  font-size: 13px;
  cursor: pointer;
`;

export const CommentBody = styled.div`
  width: 100%;
  margin: 15px 3px;

  & input {
    width: 650px;
  }

  & button {
    width: 105px;
    height: 31px;
    text-align: center;
    font-weight: bold;
    background-color: ${(props) => props.theme.color1};
    border-radius: 6px;
    :hover {
      opacity: 0.7;
    }
  }
`;
