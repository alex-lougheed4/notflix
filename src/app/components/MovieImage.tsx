import Image from 'next/image';

export type MovieImageProps = {
  image: string;
  name: string;
  width: number;
  height: number;
};

export const MovieImage = ({ image, name, width, height }: MovieImageProps) => {
  return <Image src={image} alt={name} fill className="object-contain group-hover:opacity-90" />;
};
