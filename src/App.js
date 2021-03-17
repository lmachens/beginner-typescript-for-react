import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import SearchInput from "./components/SearchInput";
import { useEffect, useState } from "react";
import useAsync from "./hooks/useAsync";
import { searchCharactersByName } from "./utils/api";
import Character from "./components/Character";
import useThrottle from "./hooks/useThrottle";

const Header = styled.header`
  background: var(--text-color);
  color: var(--background-color);
  font-size: 3rem;
  text-align: center;

  b {
    color: var(--primary-color);
  }
`;

const Main = styled.main`
  display: grid;
  justify-items: center;
`;

const Status = styled.div`
  margin: 1em;
`;

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-left: -1em;
  margin-top: -1em;
  justify-content: center;

  > * {
    margin-left: 1em;
    margin-top: 1em;
  }
`;

function App() {
  const [characterName, setCharacterName] = useState("");
  const { data: characters, loading, error, doFetch } = useAsync(
    searchCharactersByName
  );
  const throttledCharacterName = useThrottle(characterName);

  useEffect(() => {
    if (throttledCharacterName) {
      doFetch(throttledCharacterName);
    }
  }, [throttledCharacterName, doFetch]);

  return (
    <>
      <GlobalStyle />
      <Header>
        <h1>
          <b>Rick</b> vs <b>Morty</b>
        </h1>
      </Header>
      <Main>
        <SearchInput
          value={characterName}
          onChange={(event) => setCharacterName(event.target.value)}
        />
        {loading && <Status>Loading...⏰</Status>}
        {error && <Status>Nothing found 😢</Status>}
        <Section>
          {characters?.map((character) => (
            <Character key={character.id} {...character} />
          ))}
        </Section>
      </Main>
    </>
  );
}

export default App;
