import Link from "next/link";
import Header from "./Header";
import styled from "styled-components";

const StyledHeader = styled(Header)`
  border: 10px solid yellow;
  background-color: red;
`;

export default ({ title, children }) => (
  <div>
    <h1>{title}</h1>
    <Header />
    <div style={{ padding: "20px", margin: "20px", backgroundColor: "tomato" }}>
      {children}
    </div>
    <footer>
      <a href="" target="_blank" rel="noopener noreferrer">
        Powered by vercel
      </a>
    </footer>
  </div>
);
