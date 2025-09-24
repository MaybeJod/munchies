import { ReactNode } from "react";

interface DisplayTextProps {
  children?: ReactNode;
  className?: string;
}

export default function TitleText({ children, className }: DisplayTextProps) {
  return <h3 className={`text-title ${className}`}>{children}</h3>;
}
