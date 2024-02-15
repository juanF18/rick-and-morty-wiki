import { Character } from "../../interfaces";
import { Image, Property, Title } from "../atoms";

interface CharacterItemProps {
  character: Character;
}

export function CharacterItem({ character }: CharacterItemProps) {
  const { gender, image, name } = character;
  return (
    <div className="flex flex-col justify-start  rounded-sm bg-transparent text-white p-10">
      <Image alt={name} src={image} size={150} />
      <div className="w-full p-2 text-center">
        <Title text={name} />
        <Property name="Name" text={name} />
        <Property name="Gender" text={gender} />
      </div>
    </div>
  );
}
