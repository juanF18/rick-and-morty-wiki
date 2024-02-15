interface PropertyProps {
  name: string;
  text: string | number;
}
export function Property({ text, name }: PropertyProps) {
  return (
    <h5 className="font-serif">
      <strong>{name}: </strong> {text}
    </h5>
  );
}
