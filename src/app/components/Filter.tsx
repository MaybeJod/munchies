"use client";

import BodyText from "./typography/BodyText";
import H1Text from "./typography/H1Text";
import SubtitleText from "./typography/SubtitleText";
import useMediaQuery from "../hooks/useMediaQuery";
import { FilterState } from "../types/filter";

interface FilterProps {
  foodCategoryText?: string[];
  deliveryTimeText?: string[];
  priceRangeText?: string[];
  onFilterChange?: (filters: FilterState) => void;
  activeFilters?: FilterState;
}

const FilterButton = ({
  buttonText,
  isActive,
  onClick,
}: {
  buttonText: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className={`w-fit border-[0.6px] border-stroke rounded-[8px] py-2 px-3 transition-colors ${
        isActive
          ? "bg-green text-white "
          : "border-stroke hover:bg-green hover:text-white"
      }`}
      onClick={onClick}
    >
      <BodyText>{buttonText}</BodyText>
    </button>
  );
};

const MobileFilter = ({
  deliveryTimeText,
  onFilterChange,
  activeFilters,
}: FilterProps) => {
  const handleDeliveryTimeClick = (timeText: string) => {
    if (!onFilterChange || !activeFilters) return;

    const currentTimes = activeFilters.deliveryTime;
    const newTimes = currentTimes.includes(timeText)
      ? currentTimes.filter((time) => time !== timeText)
      : [...currentTimes, timeText];

    onFilterChange({
      ...activeFilters,
      deliveryTime: newTimes,
    });
  };

  return (
    <div className="flex flex-col gap-2.5">
      <SubtitleText>Delivery time</SubtitleText>
      <div className="flex gap-2.5 flex-wrap">
        {deliveryTimeText?.map((timeText) => (
          <FilterButton
            key={timeText}
            buttonText={timeText}
            isActive={activeFilters?.deliveryTime.includes(timeText) || false}
            onClick={() => handleDeliveryTimeClick(timeText)}
          />
        ))}
      </div>
    </div>
  );
};

const WebFilter = ({
  foodCategoryText,
  deliveryTimeText,
  priceRangeText,
  onFilterChange,
  activeFilters,
}: FilterProps) => {
  const handleCategoryClick = (categoryText: string) => {
    if (!onFilterChange || !activeFilters) return;

    const currentCategories = activeFilters.categories;
    const newCategories = currentCategories.includes(categoryText)
      ? currentCategories.filter((cat) => cat !== categoryText)
      : [...currentCategories, categoryText];

    onFilterChange({
      ...activeFilters,
      categories: newCategories,
    });
  };

  const handleDeliveryTimeClick = (timeText: string) => {
    if (!onFilterChange || !activeFilters) return;

    const currentTimes = activeFilters.deliveryTime;
    const newTimes = currentTimes.includes(timeText)
      ? currentTimes.filter((time) => time !== timeText)
      : [...currentTimes, timeText];

    onFilterChange({
      ...activeFilters,
      deliveryTime: newTimes,
    });
  };

  const handlePriceRangeClick = (priceText: string) => {
    if (!onFilterChange || !activeFilters) return;

    const currentPrices = activeFilters.priceRange;
    const newPrices = currentPrices.includes(priceText)
      ? currentPrices.filter((price) => price !== priceText)
      : [...currentPrices, priceText];

    onFilterChange({
      ...activeFilters,
      priceRange: newPrices,
    });
  };

  // const clearAllFilters = () => {
  //   if (!onFilterChange) return;

  //   onFilterChange({
  //     categories: [],
  //     deliveryTime: [],
  //     priceRange: [],
  //   });
  // };

  // const hasActiveFilters =
  //   activeFilters &&
  //   (activeFilters.categories.length > 0 ||
  //     activeFilters.deliveryTime.length > 0 ||
  //     activeFilters.priceRange.length > 0);

  return (
    <div className="shadow-[-4px_2px_10px_0px_rgba(0,_0,_0,_0.1), -16px_9px_18px_0px_rgba(0,_0,_0,_0.1)]/1 bg-white rounded-[10px] border-[0.6px] border-stroke p-6 flex flex-col gap-8 w-[239px] h-dvh">
      <div className="flex justify-between items-center">
        <H1Text>Filter</H1Text>
      </div>

      {/* food category */}
      <div className="flex flex-col gap-4">
        <SubtitleText>food category</SubtitleText>
        <div className="flex flex-col gap-2.5">
          {foodCategoryText?.map((categoryText) => (
            <FilterButton
              key={categoryText}
              buttonText={categoryText}
              isActive={
                activeFilters?.categories.includes(categoryText) || false
              }
              onClick={() => handleCategoryClick(categoryText)}
            />
          ))}
        </div>
      </div>

      {/* delivery time */}
      <div className="flex flex-col gap-4">
        <SubtitleText>delivery time</SubtitleText>
        <div className="flex gap-2 flex-wrap">
          {deliveryTimeText?.map((timeText) => (
            <FilterButton
              key={timeText}
              buttonText={timeText}
              isActive={activeFilters?.deliveryTime.includes(timeText) || false}
              onClick={() => handleDeliveryTimeClick(timeText)}
            />
          ))}
        </div>
      </div>

      {/* price range */}
      <div className="flex flex-col gap-4">
        <SubtitleText>price range</SubtitleText>
        <div className="flex flex-wrap gap-2.5">
          {priceRangeText?.map((priceText) => (
            <FilterButton
              key={priceText}
              buttonText={priceText}
              isActive={activeFilters?.priceRange.includes(priceText) || false}
              onClick={() => handlePriceRangeClick(priceText)}
            />
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
  onFilterChange,
  activeFilters,
}: FilterProps) {
  const isDesktop = useMediaQuery("(min-width: 787px)");

  return isDesktop ? (
    <WebFilter
      foodCategoryText={foodCategoryText}
      deliveryTimeText={deliveryTimeText}
      priceRangeText={priceRangeText}
      onFilterChange={onFilterChange}
      activeFilters={activeFilters}
    />
  ) : (
    <MobileFilter
      deliveryTimeText={deliveryTimeText}
      onFilterChange={onFilterChange}
      activeFilters={activeFilters}
    />
  );
}
