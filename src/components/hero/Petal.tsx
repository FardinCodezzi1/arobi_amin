interface PetalProps {
  size: number;
  className?: string;
}

export function Petal({ size, className }: PetalProps) {
  return (
    <div
      aria-hidden
      className={`bg-petal-gradient opacity-80 blur-[1px] ${className ?? ""}`}
      style={{ width: size, height: size * 1.4, borderRadius: "50% 0 50% 50%" }}
    />
  );
}
