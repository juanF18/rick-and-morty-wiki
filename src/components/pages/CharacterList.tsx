import { useEffect, useState } from "react";
import { CharacterListElements } from "../organisms";
import { Header } from "../organisms/Header";
import { getCharacters } from "../../services/endpoints";
import { Character } from "../../interfaces";

export function CharacterList() {
  const [characters, setCharacters] = useState<Character[]>([]);
  useEffect(() => {
    getCharacters()
      .then((characters) => {
        setCharacters(characters);
      })
      .then((err) => console.log(err));
  }, []);
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <div className="h-[80vh]">
        <CharacterListElements charactersList={characters} />
      </div>
    </div>
  );
}
