import CategoryCard from "./components/CategoryCard";
import Filter from "./components/Filter";
import Logo from "./components/svgs/Logo";
import RestaurantCard from "./components/RestaurantCard";
import H1Text from "./components/typography/H1Text";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-6 md:grid md:grid-cols-12 md:grid-rows-6">
        <Logo fill="#000" width="200" height="24" />

        <Filter />

        <div className="-mx-6 px-6 md:px-0 flex gap-2.5 scroll-pl-6 snap-x snap-mandatory overflow-x-scroll">
          <CategoryCard title="Hamburger" img="/images/burger.png" />
          <CategoryCard title="Pizza" img="/images/pizza.png" />
          <CategoryCard title="Taco" img="/images/taco.png" />
        </div>

        <div className="flex flex-col gap-5">
          <H1Text>Restuarant&apos;s</H1Text>
          <div className="flex flex-col gap-2.5">
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
    </div>
  );
}
