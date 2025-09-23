import { ReactNode } from "react";

interface DisplayTextProps {
  children?: ReactNode;
}

export default function DisplayText({ children }: DisplayTextProps) {
  return <h1 className="text-display">{children}</h1>;
}
