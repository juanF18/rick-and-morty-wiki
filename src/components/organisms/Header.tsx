import { SearchField } from "../molecules";

export function Header() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[20vh] bg-gray-500 text-white">
      <h1 className="font-extrabold">Rick and Morty Character wiki</h1>
      <SearchField />
    </div>
  );
}
