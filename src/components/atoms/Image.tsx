interface ImageProps {
  src: string;
  alt: string;
  size: number;
}
export function Image({ alt, size, src }: ImageProps) {
  return (
    <img
      className={`w-[${size}px] h-[${size}px] rounded-full`}
      src={src}
      alt={alt}
    />
  );
}
