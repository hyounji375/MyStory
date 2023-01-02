import styled from "styled-components";

export const MainBtnST = styled.button`
  width: 350px;
  height: 35px;
  text-align: center;
  margin: 5px 1rem;
  font-weight: bold;
  background-color: ${(props) => props.theme.color1};
  border-radius: 6px;
  ${(props) => props.disabled && "opacity: 0.5"}
`;

export const SubBtnST = styled.button`
  width: 50px;
  height: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 12px;
  background-color: ${(props) => props.theme.color1};
  border-radius: 6px;
  :hover {
    opacity: 0.7;
  }
`;
