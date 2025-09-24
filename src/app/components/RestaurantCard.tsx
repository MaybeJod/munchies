import Image from "next/image";
import Chip from "./Chip";
import Arrow from "./svgs/arrow";
import H1Text from "./typography/H1Text";
import BodyText from "./typography/BodyText";

interface RestaurantCardProp {
  isOpen: boolean;
  DeliveryTime?: string;
  img: string;
}

export default function RestaurantCard({
  isOpen,
  DeliveryTime,
  img,
}: RestaurantCardProp) {
  if (isOpen === true) {
    console.log(isOpen);
  }

  if (DeliveryTime === "string") {
    console.log(DeliveryTime);
  }

  return (
    // open
    <div className="w-[327px] h-[202px] border-[0.6px] border-stroke rounded-[8px] bg-white p-4 flex flex-col justify-between overflow-hidden shadow-[-4px_2px_10px_0px_rgba(0,_0,_0,_0.1), -16px_9px_18px_0px_rgba(0,_0,_0,_0.1)]/1">
      {isOpen === true ? (
        <>
          {/* header */}
          <div className="flex justify-between">
            <div className="flex content-center gap-2">
              <Chip dot={true} isOpen={true} text="Open" />
              <Chip dot={false} isOpen={true} text={`${DeliveryTime}`} />
            </div>
            <Image
              src={`${img}`}
              width={140}
              height={140}
              alt="food"
              className="relative left-12 bottom-12"
            />
          </div>
          {/* footer */}
          <div className="flex justify-between align-middle">
            <H1Text>Cortado Bar</H1Text>
            {/* cta */}
            <button className="bg-green w-8 h-8 grid content-center justify-items-center rounded-[88px]">
              <Arrow fill="#fff" />
            </button>
          </div>
        </>
      ) : (
        <div className="relative">
          {/* header */}
          <div className="flex justify-between">
            <div className="flex content-center gap-2">
              <Chip dot={true} isOpen={false} text="Closed" />
            </div>
            <Image
              src={`${img}`}
              width={140}
              height={140}
              alt="food"
              className="relative left-12 bottom-12 opacity-20"
            />
          </div>

          {/* footer */}
          <div className="flex justify-between align-middle">
            <H1Text className="opacity-20">Cortado Bar</H1Text>
            {/* cta */}
            <button className="bg-green w-8 h-8 grid content-center justify-items-center rounded-[88px] opacity-20">
              <Arrow fill="#fff" />
            </button>
          </div>
          {/* closed text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-off-white w-fit py-2 pl-2.5 pr-3 flex justify-center border-[0.6px] border-stroke rounded-[4px]">
              <BodyText>Opens tomorrow at 12 pm</BodyText>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
