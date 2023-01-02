import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 4rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: ${(props) => props.theme.color1};
`;

export const HeaderLogo = styled.div`
  margin-left: 3rem;
  font-weight: bold;
  color: ${(props) => props.theme.color4};
  font-size: 1.5rem;
  cursor: pointer;
`;

export const HeaderList = styled.ul`
  display: flex;
  align-content: auto;
  flex-direction: auto;
  flex-wrap: auto;
  float: right;
  color: ${(props) => props.theme.color4};
  position: relative;
  align-items: center;
  height: 2.5rem;
  font-size: 0.825rem;

  & > li {
    cursor: pointer;
    margin: 5px;
    font-weight: bold;
  }

  & > a > li {
    cursor: pointer;

    ::after {
      content: "|";
      clear: both;
      margin: 0 0.5rem;
    }
  }

  & > a:last-child > li {
    ::after {
      content: "";
      clear: both;
    }
  }
`;
