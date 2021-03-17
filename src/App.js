import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";

const Header = styled.header`
  background: var(--text-color);
  color: var(--background-color);
  font-size: 3rem;
  text-align: center;

  b {
    color: var(--primary-color);
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header>
        <h1>
          <b>Rick</b> vs <b>Morty</b>
        </h1>
      </Header>
      <main></main>
    </>
  );
}

export default App;
