import { ReactNode } from "react";

interface H1TextProps {
  children?: ReactNode;
}

export default function H1Text({ children }: H1TextProps) {
  return <h2 className="text-h1">{children}</h2>;
}
