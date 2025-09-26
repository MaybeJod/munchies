import Image from "next/image";
import TitleText from "./typography/TitleText";

interface CategoryCardProp {
  title?: string;
  img?: string;
  isActive?: boolean;
  onClick?: () => void;
}

export default function categoryCard({
  title,
  img,
  isActive = false,
  onClick,
}: CategoryCardProp) {
  return (
    <button
      onClick={onClick}
      className={`min-w-40 min-h-20 border-[0.6px] border-stroke rounded-[8px] pl-3 inline-flex justify-between shadow-[-4px_2px_10px_0px_rgba(0,_0,_0,_0.1), -16px_9px_18px_0px_rgba(0,_0,_0,_0.1)]/1 snap-center transition-colors ${
        isActive
          ? "bg-green text-white"
          : "hover:bg-green hover:text-white bg-white"
      }`}
    >
      <TitleText className="pt-4">{title}</TitleText>

      <Image
        src={`${img}`}
        width={80}
        height={80}
        alt={`Illustation of ${title} on filter card`}
        loading="lazy"
        quality={75}
        className="relative left-2 overflow-hidden"
        style={{ width: "80px", height: "auto" }}
        priority={false}
      />
    </button>
  );
}
