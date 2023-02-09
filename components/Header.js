import Link from "next/link";
import styled from "styled-components";

const HeaderDiv = styled.div`
  border: 10px solid #f00;
  padding: 30px;
  background-color: #f00;
  display: flex;
  gap: 20px;

  & > span {
    font-size: 30px;
  }
`;

const StyledA = styled.a`
  color: #fff;
  text-decoration: none;
  border: ${({ borderSize }) => `${borderSize}px`} solid yellow;
  font-size: ${({ big }) => (big ? "20px" : "12px")};
  &:hover {
    text-decoration: underline;
  }
`;

export default () => (
  <HeaderDiv>
    <StyledA href="/" passHref borderSize={20}>
      Ana Sayfa
    </StyledA>
    <StyledA href="/about" passHref borderSize={10} big>
      Hakkımızda
    </StyledA>
    <span>Ek Açıklamalar</span>
  </HeaderDiv>
);
