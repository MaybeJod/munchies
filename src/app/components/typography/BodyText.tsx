import { ReactNode } from "react";

interface BodyTextProps {
  children?: ReactNode;
  className?: string;
}

export default function BodyText({ children, className }: BodyTextProps) {
  return <p className={`text-body ${className}`}>{children}</p>;
}
