import { useEffect, useState } from "react";
import { getCharacters } from "./services/endpoints";
import { Character } from "./interfaces";

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  useEffect(() => {
    getCharacters()
      .then((characters) => {
        setCharacters(characters);
      })
      .then((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="w-[80%] h-10 border bg-orange-400">
        <h1 className="font-bold">Hola mundo</h1>
        {characters.map((character) => (
          <>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <h3>{character.gender}</h3>
          </>
        ))}
      </div>
    </>
  );
}

export default App;
