import { ReactNode } from "react";

interface DisplayTextProps {
  children?: ReactNode;
  className?: string;
}

export default function DisplayText({ children, className }: DisplayTextProps) {
  return <h1 className={`text-display ${className}`}>{children}</h1>;
}
