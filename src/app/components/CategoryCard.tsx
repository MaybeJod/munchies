import Image from "next/image";
import TitleText from "./typography/TitleText";

interface CardPropts {
  children?: React.ReactNode;
  title?: string;
  img?: string;
}

export default function categoryCard({ title, img }: CardPropts) {
  return (
    <div className="min-w-40 min-h-20 border-[0.6px] border-stroke rounded-[8px] pl-3 inline-flex justify-between shadow-[-4px_2px_10px_0px_rgba(0,_0,_0,_0.1), -16px_9px_18px_0px_rgba(0,_0,_0,_0.1)]/1 snap-center">
      <TitleText className="pt-4">{title}</TitleText>
      {/* <div>{children}</div> */}

      <Image
        src={`${img}`}
        width={80}
        height={80}
        alt="burger"
        loading="lazy"
        quality={75}
        className="relative left-2 overflow-hidden"
      />
    </div>
  );
}
