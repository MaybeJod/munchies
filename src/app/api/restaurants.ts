const BASE_URL = "https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api";

async function GetAllRestaurants() {
  const res = await fetch(`${BASE_URL}/restaurants`);

  const data = await res.json();

  // console.log(data);
  return data.restaurants;
}

async function GetRestaurantById(id: string) {
  const res = await fetch(`${BASE_URL}/restaurants/${id}`);

  const data = await res.json();

  // console.log(data);
  return data;
}

async function GetAllFilters() {
  const res = await fetch(`${BASE_URL}/filter`);

  const data = await res.json();

  // console.log(data);
  return data.filters;
}

async function GetFilterById(id: string) {
  const res = await fetch(`${BASE_URL}/filter/${id}`);

  const data = await res.json();

  // console.log(data);
  return data;
}

async function GetOpenStatusById(id: string) {
  const res = await fetch(`${BASE_URL}/open/${id}`);

  const data = await res.json();

  // console.log(data);
  return data;
}

async function GetPriceRangeById(id: string) {
  const res = await fetch(`${BASE_URL}/price-range/${id}`);

  const data = await res.json();

  // console.log(data);
  return data;
}

async function MergedRestaurantData() {
  const restaurants = await GetAllRestaurants();
  const completeRestaurantData = await Promise.all(
    restaurants.map(
      async (restaurant: {
        id: string;
        price_range_id: string;
        filter_ids: string[];
      }) => {
        try {
          const openStatus = await GetOpenStatusById(restaurant.id);
          const price = await GetPriceRangeById(restaurant.price_range_id);
          const filterData = await Promise.all(
            restaurant.filter_ids.map(async (filterId: string) => {
              const filterArray = await GetFilterById(filterId);
              const filterName = filterArray["name"];
              return filterName;
            })
          );

          const restaurantData = {
            ...restaurant,
            isOpen: openStatus.is_open,
            priceRange: price.range,
            filterName: filterData,
          };

          return restaurantData;
        } catch (error) {
          console.log(error);
        }
      }
    )
  );

  // console.log(completeRestaurantData);

  return completeRestaurantData;
}

interface FilterDataProps {
  price?: string;
  deliverTime?: number;
  category?: string[];
}

async function FilterData({ price, deliverTime, category }: FilterDataProps) {
  let data = await MergedRestaurantData();

  // Apply filters progressively
  if (price) {
    data = data.filter((restaurant) => {
      return restaurant.priceRange === price;
    });
  }

  if (deliverTime) {
    data = data.filter((restaurant) => {
      return restaurant.delivery_time_minutes === deliverTime;
    });
  }

  if (category && category.length > 0) {
    data = data.filter((restaurant) => {
      if (!restaurant.filterName || !Array.isArray(restaurant.filterName)) {
        return false;
      }

      return category.some((cat) =>
        restaurant.filterName.some(
          (restaurantCat: string) =>
            restaurantCat && restaurantCat.toLowerCase() === cat.toLowerCase()
        )
      );
    });
  }

  console.log("Filtered data:", data);

  return data;
}

// await FilterData({ deliverTime: 60, price: "$$$" });

export {
  MergedRestaurantData,
  GetAllRestaurants,
  GetRestaurantById,
  GetAllFilters,
  GetFilterById,
  GetOpenStatusById,
  GetPriceRangeById,
  FilterData,
};
