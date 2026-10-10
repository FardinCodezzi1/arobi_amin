import { useState, type ImgHTMLAttributes } from "react";

export interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
  className?: string;
}

export function Image({
  src,
  alt,
  width,
  height,
  sizes,
  priority = false,
  fill = false,
  className = "",
  style,
  ...rest
}: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  const fillClasses = fill ? "absolute inset-0 h-full w-full object-cover" : "";
  const transitionClass = "transition-opacity duration-500";
  const opacityClass = loaded ? "opacity-100" : "opacity-90";

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      onLoad={() => setLoaded(true)}
      className={`${fillClasses} ${transitionClass} ${opacityClass} ${className}`.trim()}
      style={style}
      {...rest}
    />
  );
}

export default Image;
