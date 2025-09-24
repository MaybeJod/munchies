import { ReactNode } from "react";

interface H1TextProps {
  children?: ReactNode;
  className?: string;
}

export default function H1Text({ children, className }: H1TextProps) {
  return <h2 className={`text-h1 ${className}`}>{children}</h2>;
}
