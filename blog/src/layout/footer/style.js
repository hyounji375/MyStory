import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 140px;
  position: fixed;
  bottom: 0;
  z-index: 1000;
  background-color: ${(props) => props.theme.color4};
`;

export const FooterTamplate = styled.div`
  width: 1080px;
  margin: 0.5rem auto;
  min-width: 360px;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  flex-direction: auto;
  flex-wrap: auto;
`;

export const Footertxt = styled.div`
  width: 70%;
  color: #555;

  & p {
    width: 70%;
    font-weight: auto;
    font-size: 0.825rem;
    color: auto;
    margin-top: 5px;
  }
`;

export const FooterRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: auto;
  flex-direction: auto;
  flex-wrap: auto;

  & > ul {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: auto;
    flex-direction: auto;
    flex-wrap: auto;
    padding: 0 2rem;
    background-color: ${(props) => props.theme.color2};
    border-radius: 0.5rem;
  }

  & > ul > li {
    padding: 0.25rem 0.5rem;
    font-weight: 300;
    font-size: 1.3rem;
    color: #ffffff;

    & > span {
      font-weight: 500;
    }

    :first-child {
      padding-right: 2rem;
    }

    :hover {
      color: #555;
    }
  }
`;
