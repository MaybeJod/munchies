"use client";

import CategoryCard from "./components/CategoryCard";
import Filter from "./components/Filter";
import Logo from "./components/svgs/Logo";
import RestaurantCard from "./components/RestaurantCard";
import H1Text from "./components/typography/H1Text";
import useMediaQuery from "./hooks/useMediaQuery";

const MobileLayout = () => {
  return (
    <main className="flex flex-col gap-6">
      <Logo fill="#000" width="200" height="24" />
      <Filter />

      <div className="-mx-6 px-6 md:px-0 flex gap-2.5 scroll-pl-6 snap-x snap-mandatory overflow-x-scroll">
        <CategoryCard title="Hamburger" img="/images/burger.png" />
        <CategoryCard title="Pizza" img="/images/pizza.png" />
        <CategoryCard title="Taco" img="/images/taco.png" />
        <CategoryCard title="Coffee" img="/images/coffee.png" />
        <CategoryCard title="Fries" img="/images/fries.png" />
        <CategoryCard title="Mexican" img="/images/buritto.png" />
        <CategoryCard title="Breakfast" img="/images/breakfast.png" />
      </div>

      <div className="flex flex-col gap-5">
        <H1Text>Restuarant&apos;s</H1Text>
        <div className="flex flex-wrap gap-2.5 ">
          <RestaurantCard
            img="/images/fries.png"
            isOpen={true}
            DeliveryTime="1-40 min"
          />
          <RestaurantCard
            img="/images/coffee.png"
            isOpen={false}
            DeliveryTime="1-40 min"
          />
          <RestaurantCard
            img="/images/coffee.png"
            isOpen={false}
            DeliveryTime="1-40 min"
          />
          <RestaurantCard
            img="/images/coffee.png"
            isOpen={true}
            DeliveryTime="1-40 min"
          />
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
            <CategoryCard title="Hamburger" img="/images/burger.png" />
            <CategoryCard title="Pizza" img="/images/pizza.png" />
            <CategoryCard title="Taco" img="/images/taco.png" />
            <CategoryCard title="Coffee" img="/images/coffee.png" />
            <CategoryCard title="Fries" img="/images/fries.png" />
            <CategoryCard title="Mexican" img="/images/buritto.png" />
            <CategoryCard title="Breakfast" img="/images/breakfast.png" />
          </div>

          {/* restaurants */}
          <div className="flex flex-col gap-8">
            <H1Text>Restuarant&apos;s</H1Text>
            <div className="max-w-full flex flex-wrap gap-4 ">
              <RestaurantCard
                img="/images/fries.png"
                isOpen={true}
                DeliveryTime="1-40 min"
              />
              <RestaurantCard
                img="/images/coffee.png"
                isOpen={false}
                DeliveryTime="1-40 min"
              />
              <RestaurantCard
                img="/images/coffee.png"
                isOpen={false}
                DeliveryTime="1-40 min"
              />
              <RestaurantCard
                img="/images/coffee.png"
                isOpen={true}
                DeliveryTime="1-40 min"
              />
              <RestaurantCard
                img="/images/coffee.png"
                isOpen={true}
                DeliveryTime="1-40 min"
              />
              <RestaurantCard
                img="/images/coffee.png"
                isOpen={true}
                DeliveryTime="1-40 min"
              />
              <RestaurantCard
                img="/images/coffee.png"
                isOpen={true}
                DeliveryTime="1-40 min"
              />
              <RestaurantCard
                img="/images/coffee.png"
                isOpen={true}
                DeliveryTime="1-40 min"
              />
              <RestaurantCard
                img="/images/coffee.png"
                isOpen={true}
                DeliveryTime="1-40 min"
              />
              <RestaurantCard
                img="/images/coffee.png"
                isOpen={true}
                DeliveryTime="1-40 min"
              />
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
}
