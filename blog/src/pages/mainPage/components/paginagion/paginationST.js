import styled from "styled-components";
import { flexCenter } from "../../../../style/common";

export const Wrapper = styled.nav`
  & ul {
    ${flexCenter};
  }
`;

export const PageBtn = styled.button`
  width: 30px;
  height: 30px;
  margin: 10px;
  color: white;
  font-weight: bold;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color2};

  :hover {
    color: ${(props) => props.theme.color2};
    background-color: ${(props) => props.theme.color3};
  }

  :active {
    color: white;
    background-color: ${(props) => props.theme.color1};
  }
`;

export const Underline = styled.div`
  width: 30px;
  height: 2px;
  margin: 0 10px;
  background-color: ${(props) => props.theme.color1};
`;

export const Blank = styled.div`
  height: 10px;
`;
