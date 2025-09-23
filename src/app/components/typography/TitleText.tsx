import { ReactNode } from "react";

interface DisplayTextProps {
  children?: ReactNode;
}

export default function TitleText({ children }: DisplayTextProps) {
  return <h3 className="text-title">{children}</h3>;
}
