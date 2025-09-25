import BodyText from "./typography/BodyText";

interface ChipProps {
  text: string;
  isOpen: boolean;
  dot: boolean;
}

export default function Chip({ text, isOpen, dot }: ChipProps) {
  let dotColor: string;

  if (isOpen === true) {
    dotColor = "bg-green";
  } else {
    dotColor = "bg-black";
  }

  return (
    <div className="inline-flex h-7 items-center-safe rounded-[5rem] border-[0.0375rem] border-stroke py-2 px-3 gap-1">
      {dot === true ? (
        <>
          <div className={`w-2 h-2 ${dotColor} rounded-full`}></div>
          <BodyText>{text}</BodyText>
        </>
      ) : (
        <BodyText>{text}</BodyText>
      )}
    </div>
  );
}
