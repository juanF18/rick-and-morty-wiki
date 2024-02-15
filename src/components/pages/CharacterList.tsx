import { CharacterListElements } from "../organisms";
import { Header } from "../organisms/Header";

export function CharacterList() {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <div className="h-[80vh]">
        <CharacterListElements />
      </div>
    </div>
  );
}
