import { ReactNode } from "react";

interface BodyTextProps {
  children?: ReactNode;
}

export default function BodyText({ children }: BodyTextProps) {
  return <p className="text-body">{children}</p>;
}
