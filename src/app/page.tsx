"use client";

import CategoryCard from "./components/CategoryCard";
import Filter from "./components/Filter";
import Logo from "./components/svgs/Logo";
import RestaurantCard from "./components/RestaurantCard";
import H1Text from "./components/typography/H1Text";
import BodyText from "./components/typography/BodyText";
import useMediaQuery from "./hooks/useMediaQuery";

import { MergedRestaurantData, GetAllFilters } from "./api/restaurants";
import { useEffect, useState } from "react";
import { FilterState } from "./types/filter";

interface Restaurant {
  id: string;
  image_url: string;
  delivery_time_minutes: number;
  name: string;
  isOpen: boolean;
  priceRange: string;
  filterName: string[];
}

interface FilterDataItem {
  id: string;
  name: string;
  image_url: string;
}

interface MobileLayoutProps {
  restaurants: Restaurant[];
  filterData: FilterDataItem[];
  onFilterChange: (filters: FilterState) => void;
  onCategoryClick: (categoryName: string) => void;
  filters: FilterState;
}

interface WebLayoutProps {
  restaurants: Restaurant[];
  filterData: FilterDataItem[];
  onFilterChange: (filters: FilterState) => void;
  onCategoryClick: (categoryName: string) => void;
  filters: FilterState;
  categoryText: string[];
  priceText: string[];
}

const DELIVERY_TIME_RANGES = [
  { text: "0-10 min", min: 0, max: 10 },
  { text: "10-30 min", min: 11, max: 30 },
  { text: "30-60 min", min: 31, max: 60 },
  { text: "1 hour+", min: 61, max: Infinity },
];

//function to use the shared data
function getDeliveryTimeOptions(): string[] {
  return DELIVERY_TIME_RANGES.map((range) => range.text);
}

//function that reuses the same data structure
function categorizeDeliveryTime(minutes: number): string {
  const range = DELIVERY_TIME_RANGES.find(
    (range) => minutes >= range.min && minutes <= range.max
  );

  return range ? range.text : "Unknown";
}

const EmptyState = ({
  onClearFilters,
  hasActiveFilters,
}: {
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}) => {
  return (
    <div className="w-full text-center py-16">
      <div className="max-w-md mx-auto">
        <H1Text className="mb-2">No restaurants found</H1Text>
        <BodyText className="mb-6">
          {hasActiveFilters
            ? "Try adjusting your filters to see more restaurants"
            : "No restaurants available at the moment"}
        </BodyText>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="bg-white text-black border-stroke border px-6 py-2 rounded-[8px] hover:bg-green hover:text-white hover:border-stroke transition-colors"
          >
            Clear all filters
          </button>
        )}
      </div>
    </div>
  );
};

const MobileLayout = ({
  restaurants,
  filterData,
  onFilterChange,
  onCategoryClick,
  filters,
}: MobileLayoutProps) => {
  return (
    <main className="flex flex-col gap-6">
      <Logo fill="#000" width="200" height="24" />
      <Filter
        deliveryTimeText={getDeliveryTimeOptions()}
        onFilterChange={onFilterChange}
        activeFilters={filters}
      />

      <div className="-mx-6 px-6 md:px-0 flex gap-2.5 scroll-pl-6 snap-x snap-mandatory overflow-x-scroll">
        {filterData.map((filter) => (
          <CategoryCard
            key={filter.id}
            title={filter.name}
            img={filter.image_url}
            isActive={filters.categories.includes(filter.name)}
            onClick={() => onCategoryClick(filter.name)}
          />
        ))}
      </div>

      <div className="flex flex-col gap-5">
        <H1Text>Restaurant&apos;s</H1Text>
        <div className="flex flex-wrap gap-2.5">
          {restaurants.length > 0 ? (
            restaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                img={restaurant.image_url}
                isOpen={restaurant.isOpen}
                DeliveryTime={categorizeDeliveryTime(
                  restaurant.delivery_time_minutes
                )}
                name={restaurant.name}
              />
            ))
          ) : (
            <EmptyState
              onClearFilters={() =>
                onFilterChange({
                  categories: [],
                  deliveryTime: [],
                  priceRange: [],
                })
              }
              hasActiveFilters={
                filters.categories.length > 0 ||
                filters.deliveryTime.length > 0 ||
                filters.priceRange.length > 0
              }
            />
          )}
        </div>
      </div>
    </main>
  );
};

const WebLayout = ({
  restaurants,
  filterData,
  categoryText,
  priceText,
  onFilterChange,
  onCategoryClick,
  filters,
}: WebLayoutProps) => {
  return (
    <main className="pt-14 pl-10 overflow-clip min-h-full">
      <Logo fill="#000" width="200" height="24" className="mb-12" />
      <div className="flex gap-5 w-full">
        <aside>
          <Filter
            foodCategoryText={categoryText}
            deliveryTimeText={getDeliveryTimeOptions()}
            priceRangeText={priceText}
            onFilterChange={onFilterChange}
            activeFilters={filters}
          />
        </aside>
        {/* main section */}
        <div className="flex flex-col gap-10 min-w-0 flex-1">
          {/* category cards */}
          <div className="flex gap-2.5 scroll-pl-6 snap-x snap-mandatory overflow-x-scroll -mr-10 pr-10">
            {filterData.map((filter) => (
              <CategoryCard
                key={filter.id}
                title={filter.name}
                img={filter.image_url}
                isActive={filters.categories.includes(filter.name)}
                onClick={() => onCategoryClick(filter.name)}
              />
            ))}
          </div>

          {/* restaurants */}
          <div className="flex flex-col gap-8">
            <H1Text>Restaurant&apos;s</H1Text>
            <div className="max-w-7xl flex flex-wrap gap-4">
              {restaurants.length > 0 ? (
                restaurants.map((restaurant) => (
                  <RestaurantCard
                    key={restaurant.id}
                    img={restaurant.image_url}
                    isOpen={restaurant.isOpen}
                    DeliveryTime={categorizeDeliveryTime(
                      restaurant.delivery_time_minutes
                    )}
                    name={restaurant.name}
                  />
                ))
              ) : (
                <EmptyState
                  onClearFilters={() =>
                    onFilterChange({
                      categories: [],
                      deliveryTime: [],
                      priceRange: [],
                    })
                  }
                  hasActiveFilters={
                    filters.categories.length > 0 ||
                    filters.deliveryTime.length > 0 ||
                    filters.priceRange.length > 0
                  }
                />
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

  // State management with proper types
  const [allRestaurants, setAllRestaurants] = useState<Restaurant[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>(
    []
  );
  const [filterData, setFilterData] = useState<FilterDataItem[]>([]);
  const [categoryText, setCategoryText] = useState<string[]>([]);
  const [priceText, setPriceText] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    deliveryTime: [], // Changed to array
    priceRange: [], // Changed to array
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [restaurantsData, filtersData] = await Promise.all([
          MergedRestaurantData(),
          GetAllFilters(),
        ]);

        setAllRestaurants(restaurantsData);
        setFilteredRestaurants(restaurantsData);
        setFilterData(filtersData);

        // Extract category names
        const categories = filtersData.map(
          (filter: { name: string }) => filter.name
        );
        setCategoryText(categories);

        // Extract unique price ranges
        const prices = [
          ...new Set(
            restaurantsData.map((r: { priceRange: string }) => r.priceRange)
          ),
        ];
        setPriceText(prices);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Apply filters whenever filters state changes
  useEffect(() => {
    const applyFilters = () => {
      try {
        // Convert delivery time text to ranges
        const deliveryTimeRanges: { min: number; max: number }[] = [];
        filters.deliveryTime.forEach((timeText) => {
          switch (timeText) {
            case "0-10 min":
              deliveryTimeRanges.push({ min: 0, max: 10 });
              break;
            case "10-30 min":
              deliveryTimeRanges.push({ min: 11, max: 30 });
              break;
            case "30-60 min":
              deliveryTimeRanges.push({ min: 31, max: 60 });
              break;
            case "1 hour+":
              deliveryTimeRanges.push({ min: 61, max: Infinity });
              break;
          }
        });

        // Filter restaurants
        let filtered = allRestaurants;

        // Filter by categories
        if (filters.categories.length > 0) {
          filtered = filtered.filter((restaurant) => {
            if (
              !restaurant.filterName ||
              !Array.isArray(restaurant.filterName)
            ) {
              return false;
            }
            return filters.categories.some((cat) =>
              restaurant.filterName.some(
                (restaurantCat: string) =>
                  restaurantCat &&
                  restaurantCat.toLowerCase() === cat.toLowerCase()
              )
            );
          });
        }

        // Filter by price range (multiple selection)
        if (filters.priceRange.length > 0) {
          filtered = filtered.filter((restaurant) =>
            filters.priceRange.includes(restaurant.priceRange)
          );
        }

        // Filter by delivery time (multiple selection)
        if (deliveryTimeRanges.length > 0) {
          filtered = filtered.filter((restaurant) => {
            const deliveryTime = restaurant.delivery_time_minutes;
            return deliveryTimeRanges.some(
              (range) => deliveryTime >= range.min && deliveryTime <= range.max
            );
          });
        }

        setFilteredRestaurants(filtered);
      } catch (error) {
        console.error("Error applying filters:", error);
      }
    };

    if (allRestaurants.length > 0) {
      applyFilters();
    }
  }, [filters, allRestaurants]);

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  const handleCategoryClick = (categoryName: string) => {
    const currentCategories = filters.categories;
    const newCategories = currentCategories.includes(categoryName)
      ? currentCategories.filter((cat) => cat !== categoryName)
      : [...currentCategories, categoryName];

    setFilters({
      ...filters,
      categories: newCategories,
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return isDesktop ? (
    <WebLayout
      restaurants={filteredRestaurants}
      filterData={filterData}
      categoryText={categoryText}
      priceText={priceText}
      onFilterChange={handleFilterChange}
      onCategoryClick={handleCategoryClick}
      filters={filters}
    />
  ) : (
    <MobileLayout
      restaurants={filteredRestaurants}
      filterData={filterData}
      onFilterChange={handleFilterChange}
      onCategoryClick={handleCategoryClick}
      filters={filters}
    />
  );
}
