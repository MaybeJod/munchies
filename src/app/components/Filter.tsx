"use client";

import BodyText from "./typography/BodyText";
import H1Text from "./typography/H1Text";
import SubtitleText from "./typography/SubtitleText";
import useMediaQuery from "../hooks/useMediaQuery";

interface FilterProps {
  foodCategoryText?: string[];
  deliveryTimeText?: string[];
  priceRangeText?: string[];
}

const FilterButton = ({ buttonText }: { buttonText: string }) => {
  return (
    <button className="w-fit border-[0.6px] border-stroke rounded-[8px] py-2 px-3">
      <BodyText>{buttonText}</BodyText>
    </button>
  );
};

const MobileFilter = ({ deliveryTimeText }: FilterProps) => {
  return (
    // food category
    <div className="flex flex-col gap-2.5">
      <SubtitleText>Delivery time</SubtitleText>
      <div className="flex gap-2.5">
        {deliveryTimeText?.map((timeText) => (
          <FilterButton key={timeText} buttonText={timeText} />
        ))}
      </div>
    </div>
  );
};

const WebFilter = ({
  foodCategoryText,
  deliveryTimeText,
  priceRangeText,
}: FilterProps) => {
  return (
    <div className="shadow-[-4px_2px_10px_0px_rgba(0,_0,_0,_0.1), -16px_9px_18px_0px_rgba(0,_0,_0,_0.1)]/1 bg-white rounded-[10px] border-[0.6px] border-stroke p-6 flex flex-col gap-8 w-[239px] h-dvh">
      <H1Text>Filter</H1Text>
      {/* food category */}
      <div className="flex flex-col gap-4">
        <SubtitleText>food category</SubtitleText>
        <div className="flex flex-col gap-2.5">
          {foodCategoryText?.map((categoryText) => (
            <FilterButton key={categoryText} buttonText={categoryText} />
          ))}
        </div>
      </div>

      {/* delivery time */}
      <div className="flex flex-col gap-4">
        <SubtitleText>delivery time</SubtitleText>
        <div className="flex gap-2 flex-wrap">
          {deliveryTimeText?.map((timeText) => (
            <FilterButton key={timeText} buttonText={timeText} />
          ))}
        </div>
      </div>

      {/* price range */}
      <div className="flex flex-col gap-4">
        <SubtitleText>price range</SubtitleText>
        <div className="flex flex-wrap gap-2.5">
          {priceRangeText?.map((priceText) => (
            <FilterButton key={priceText} buttonText={priceText} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Filter({
  deliveryTimeText,
  priceRangeText,
  foodCategoryText,
}: FilterProps) {
  const isDesktop = useMediaQuery("(min-width: 787px)");

  return isDesktop ? (
    <WebFilter
      foodCategoryText={foodCategoryText}
      deliveryTimeText={deliveryTimeText}
      priceRangeText={priceRangeText}
    />
  ) : (
    <MobileFilter deliveryTimeText={deliveryTimeText} />
  );
}
