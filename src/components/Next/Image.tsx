import Image from "next/image";

interface ImgProps {
  src: string;
  alt: string | undefined;
  className?: string;
  width: string | number;
  height: string | number;
}

export function NextImage({src, alt, className, width, height}:ImgProps) {
  return (
    <Image 
      sizes="auto"
      width={width || 64}
      height={height || 64}
      className={className}
      src={src}
      alt={alt}
    />
  );
}