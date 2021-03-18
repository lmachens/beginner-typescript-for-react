export const searchCharactersByName = async (name) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${name}`
  );

  if (!response.ok) {
    throw new Error(`${response.status}`);
  }

  const data = await response.json();
  return data.results;
};
