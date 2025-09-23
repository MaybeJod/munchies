import { ReactNode } from "react";

interface SubtitleTextProps {
  children?: ReactNode;
}

export default function SubtitleText({ children }: SubtitleTextProps) {
  return <h4 className="text-subtitle">{children}</h4>;
}
