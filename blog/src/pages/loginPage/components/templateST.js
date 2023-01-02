import styled from "styled-components";
import { flexCenter } from "../../../style/common";

export const Template = styled.div`
  width: 500px;
  height: fit-content;
  margin: 2.5rem auto;
`;

export const Wrapper = styled.div`
  margin: 20px;
  ${flexCenter}
  & input {
    width: 300px;
  }
`;

export const BtnWraaper = styled.div`
  margin: 5px 3.5rem;
`;
