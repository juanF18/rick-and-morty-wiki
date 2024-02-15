import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Field } from "../atoms";

export function SearchField() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Search term:", searchTerm);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-[30%] flex flex-row justify-start pl-10"
    >
      <div className="flex items-center border-b-2 border-blue-500 py-2">
        <Field handleChange={handleChange} value={searchTerm} />
        <Button />
      </div>
    </form>
  );
}
