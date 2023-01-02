import styled from "styled-components";

const BlogLogo = () => {
  return <Logo>my Story</Logo>;
};
export default BlogLogo;

export const Logo = styled.div`
  text-align: center;
  color: ${(props) => props.theme.color1};
  font-size: 2rem;
  margin: 1.5rem 0;
  font-weight: bold;
`;
