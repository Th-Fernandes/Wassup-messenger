import Image from "next/image";

interface ImgProps {
  src: string;
  alt: string;
  className?: string;
  width: number | `${number}` | undefined
  height: number | `${number}` | undefined;
}



export function NextImage({src, alt, className, width, height}: ImgProps) {
  return (
    <Image 
      className={className}
      src={src}
      alt={alt}
      sizes="auto"
      width={width || 64}
      height={height || 64}
    />
  );
}