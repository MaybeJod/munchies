"use client";

import CategoryCard from "./components/CategoryCard";
import Filter from "./components/Filter";
import Logo from "./components/svgs/Logo";
import RestaurantCard from "./components/RestaurantCard";
import H1Text from "./components/typography/H1Text";
import useMediaQuery from "./hooks/useMediaQuery";

import {
  MergedRestaurantData,
  GetAllFilters,
  // FilterData,
} from "./api/restaurants";

const filterData = await GetAllFilters();
const restaurants = await MergedRestaurantData();

const categoryText = filterData.map((categoryName: { name: string }) => {
  return categoryName.name;
});

function deliveryTimeText() {
  const ranges = [
    { text: "0-10 min", min: 0, max: 10 },
    { text: "10-30 min", min: 11, max: 30 },
    { text: "30-60 min", min: 31, max: 60 },
    { text: "1 hour+", min: 61, max: Infinity },
  ];

  // Return all ranges regardless of availability
  const allRangeTexts = ranges.map((range) => range.text);

  return allRangeTexts;
}

let priceText = restaurants.map((priceRangeText: { priceRange: string }) => {
  return priceRangeText.priceRange;
});
priceText = [...new Set(priceText)];

const MobileLayout = () => {
  return (
    <main className="flex flex-col gap-6">
      <Logo fill="#000" width="200" height="24" />
      <Filter deliveryTimeText={deliveryTimeText()} />

      <div className="-mx-6 px-6 md:px-0 flex gap-2.5 scroll-pl-6 snap-x snap-mandatory overflow-x-scroll">
        {filterData.map(
          (filter: {
            id: string;
            name: string | undefined;
            image_url: string | undefined;
          }) => (
            <CategoryCard
              key={filter.id}
              title={filter.name}
              img={filter.image_url}
            />
          )
        )}
      </div>

      <div className="flex flex-col gap-5">
        <H1Text>Restuarant&apos;s</H1Text>
        <div className="flex flex-wrap gap-2.5 ">
          {restaurants.map(
            (restaurant: {
              id: string;
              image_url: string;
              delivery_time_minutes: number;
              name: string;
              isOpen: boolean;
            }) => (
              <RestaurantCard
                key={restaurant.id}
                img={restaurant.image_url}
                isOpen={restaurant.isOpen}
                DeliveryTime={`${restaurant.delivery_time_minutes} min`}
                name={restaurant.name}
              />
            )
          )}
        </div>
      </div>
    </main>
  );
};

const WebLayout = () => {
  return (
    <main className="pt-14 pl-10 overflow-clip min-h-full">
      <Logo fill="#000" width="200" height="24" className="mb-12" />
      <div className="flex gap-5 w-full">
        <aside>
          <Filter
            foodCategoryText={categoryText}
            deliveryTimeText={deliveryTimeText()}
            priceRangeText={priceText}
          />
        </aside>
        {/* main section */}
        <div className="flex flex-col gap-10 min-w-0 flex-1">
          {/* category cards */}
          <div className="flex gap-2.5 scroll-pl-6 snap-x snap-mandatory overflow-x-scroll -mr-10 pr-10">
            {filterData.map(
              (filter: {
                id: string;
                name: string | undefined;
                image_url: string | undefined;
              }) => (
                <CategoryCard
                  key={filter.id}
                  title={filter.name}
                  img={filter.image_url}
                />
              )
            )}
          </div>

          {/* restaurants */}
          <div className="flex flex-col gap-8">
            <H1Text>Restaurant&apos;s</H1Text>
            <div className="max-w-full flex flex-wrap gap-4 ">
              {restaurants.map(
                (restaurant: {
                  id: string;
                  image_url: string;
                  delivery_time_minutes: number;
                  name: string;
                  isOpen: boolean;
                }) => (
                  <RestaurantCard
                    key={restaurant.id}
                    img={restaurant.image_url}
                    isOpen={restaurant.isOpen}
                    DeliveryTime={`${restaurant.delivery_time_minutes} min`}
                    name={restaurant.name}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 787px)");

  return isDesktop ? <WebLayout /> : <MobileLayout />;
  // return <WebLayout />;
}
