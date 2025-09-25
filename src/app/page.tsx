"use client";

import CategoryCard from "./components/CategoryCard";
import Filter from "./components/Filter";
import Logo from "./components/svgs/Logo";
import RestaurantCard from "./components/RestaurantCard";
import H1Text from "./components/typography/H1Text";
import useMediaQuery from "./hooks/useMediaQuery";

import { MergedRestaurantData, GetAllFilters } from "./api/restaurants";

const filterData = await GetAllFilters();
const restaurants = await MergedRestaurantData();

const MobileLayout = () => {
  return (
    <main className="flex flex-col gap-6">
      <Logo fill="#000" width="200" height="24" />
      <Filter />

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
          <Filter />
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
