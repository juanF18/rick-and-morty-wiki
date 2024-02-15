import { Character } from "../../interfaces";
import { CharacterItem } from "../molecules";

interface CharacterListElementsProps {
  charactersList: Character[];
}

export function CharacterListElements({
  charactersList,
}: CharacterListElementsProps) {
  return (
    <div className="mx-50 grid grid-cols-4 gap-4 p-10 bg-slate-600">
      {charactersList.map((character) => (
        <CharacterItem character={character} />
      ))}
    </div>
  );
}
