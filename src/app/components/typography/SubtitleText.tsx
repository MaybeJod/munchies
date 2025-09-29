import { ReactNode } from "react";

interface SubtitleTextProps {
  children?: ReactNode;
  className?: string;
}

export default function SubtitleText({
  children,
  className,
}: SubtitleTextProps) {
  return (
    <h4
      className={`text-subtitle uppercase opacity-40 font-semibold ${className}`}
    >
      {children}
    </h4>
  );
}
