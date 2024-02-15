import { ChangeEvent } from "react";

interface FieldProps {
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
export function Field({ value, handleChange }: FieldProps) {
  return (
    <input
      className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
      type="text"
      placeholder="Buscar..."
      value={value}
      onChange={handleChange}
    />
  );
}
