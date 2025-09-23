import BodyText from "./typography/BodyText";

interface ChipProps {
  text: string;
  isOpen: boolean;
  dot: boolean;
}

export default function Chip({ text, isOpen, dot }: ChipProps) {
  let color: string;

  if (isOpen === true) {
    color = "green";
    console.log(color);
  } else {
    color = "black";
    console.log(color);
  }

  return (
    <div className="inline-flex h-full items-center-safe rounded-[5rem] border-[0.0375rem] border-stroke py-2 px-3 gap-1">
      {dot === true ? (
        <>
          <div className={`w-2 h-2 bg-${color} rounded-full`}></div>
          <BodyText>{text}</BodyText>
        </>
      ) : (
        <BodyText>{text}</BodyText>
      )}
    </div>
  );
}
