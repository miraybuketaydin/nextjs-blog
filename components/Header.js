import Link from "next/link";
import styled from "styled-components";

const HeaderDiv = styled.div`
  color: #f00;
  border: 10px solid #f00;
  padding: 30px;
  background-color: #f00;
`;

export default () => (
  <div>
    Header Componenti başlangıcı
    <HeaderDiv>
      <a href="/" passHref>
        Ana Sayfa
      </a>
    </HeaderDiv>
    <div>
      <a href="/about" passHref>
        Hakkımızda
      </a>
    </div>
  </div>
);
