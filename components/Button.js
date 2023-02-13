import styled from "styled-components";

const StyledA = styled.a`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export default function Button ({ href, children }) {
  return (
    <a href={href} passHref>
      <StyledA borderSize={2}>{children}</StyledA>
    </a>
  );
};
