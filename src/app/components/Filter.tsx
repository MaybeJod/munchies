"use client";

import BodyText from "./typography/BodyText";
import H1Text from "./typography/H1Text";
import SubtitleText from "./typography/SubtitleText";
import useMediaQuery from "../hooks/useMediaQuery";

const FilterButton = ({ buttonText }: { buttonText: string }) => {
  return (
    <button className="w-fit border-[0.6px] border-stroke rounded-[8px] py-2 px-3">
      <BodyText>{buttonText}</BodyText>
    </button>
  );
};

const MobileFilter = () => {
  return (
    // food category
    <div className="flex flex-col gap-2.5">
      <SubtitleText>Delivery time</SubtitleText>
      <div className="flex gap-2.5">
        <FilterButton buttonText="0-10 min" />
        <FilterButton buttonText="10-30 min" />
        <FilterButton buttonText="30-60 min" />
        <FilterButton buttonText="1 hour+" />
      </div>
    </div>
  );
};

const WebFilter = () => {
  return (
    <div className="shadow-[-4px_2px_10px_0px_rgba(0,_0,_0,_0.1), -16px_9px_18px_0px_rgba(0,_0,_0,_0.1)]/1 bg-white rounded-[10px] border-[0.6px] border-stroke p-6 flex flex-col gap-8 w-[239px] h-dvh">
      <H1Text>Filter</H1Text>
      {/* food category */}
      <div className="flex flex-col gap-4">
        <SubtitleText>food category</SubtitleText>
        <div className="flex flex-col gap-2.5">
          <FilterButton buttonText="Hamburger" />
          <FilterButton buttonText="Pizza" />
          <FilterButton buttonText="Tacos" />
          <FilterButton buttonText="Coffee" />
        </div>
      </div>

      {/* delivery time */}
      <div className="flex flex-col gap-4">
        <SubtitleText>delivery time</SubtitleText>
        <div className="flex gap-2 flex-wrap">
          <FilterButton buttonText="0-10 min" />
          <FilterButton buttonText="10-30 min" />
          <FilterButton buttonText="30-60 min" />
          <FilterButton buttonText="1 hour+" />
        </div>
      </div>

      {/* price range */}
      <div className="flex flex-col gap-4">
        <SubtitleText>price range</SubtitleText>
        <div className="flex gap-2.5">
          <FilterButton buttonText="$" />
          <FilterButton buttonText="$$" />
          <FilterButton buttonText="$$$" />
          <FilterButton buttonText="$$$$" />
        </div>
      </div>
    </div>
  );
};

export default function Filter() {
  const isDesktop = useMediaQuery("(min-width: 787px)");

  return isDesktop ? <WebFilter /> : <MobileFilter />;
}
