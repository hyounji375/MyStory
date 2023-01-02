import styled from "styled-components";

export const CommentBox = styled.div`
  display: flex;
  margin: 5px;

  & div {
    margin: 5px 10px;
    font-size: 13px;
  }
`;

export const DeleteBtn = styled.button`
  position: absolute;
  right: 350px;
  font-size: 13px;
  text-align: center;

  :hover {
    color: ${(props) => props.theme.color2};
    font-weight: bold;
  }
`;

export const UserDiv = styled.div`
  font-weight: bold;
`;

export const ContentDiv = styled.div`
  width: 560px;
`;
