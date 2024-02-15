import { useEffect, useState } from "react";
import { Character } from "../../interfaces";
import { getCharacters } from "../../services/endpoints";
import { CharacterItem } from "../molecules";

export function CharacterListElements() {
  const [characters, setCharacters] = useState<Character[]>([]);
  useEffect(() => {
    getCharacters()
      .then((characters) => {
        setCharacters(characters);
      })
      .then((err) => console.log(err));
  }, []);
  return (
    <div className="mx-50 grid grid-cols-4 gap-4 p-10 bg-slate-600">
      {characters.map((character) => (
        <CharacterItem character={character} />
      ))}
    </div>
  );
}
