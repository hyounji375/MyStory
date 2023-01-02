import styled from "styled-components";
import { flexCenter } from "../../../style/common";

export const Template = styled.div`
  width: 500px;
  height: 340px;
  margin: 1.5rem auto;
`;
export const Wrapper = styled.div`
  position: relative;
  padding: 5px 30px;
`;

export const Text = styled.p`
  margin: 10px 0;
  height: 2rem;
  line-height: 2rem;

  & input {
    width: 300px;
    height: 2rem;
    float: right;
  }
`;

export const PWMessage = styled.div`
  color: red;
  font-size: 12px;
  text-align: center;
  margin-left: 15px;
`;

export const SignBtn = styled.div`
  ${flexCenter}
`;
