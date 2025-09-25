// URL: https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/

async function GetAllRestaurants() {
  const res = await fetch(
    "https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/restaurants"
  );

  const data = await res.json();

  console.log(data);
  return data.restaurants;
}

async function GetRestaurantById(id: string) {
  const res = await fetch(
    `https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/restaurants/${id}`
  );

  const data = await res.json();

  console.log(data);
  return data;
}

async function GetAllFilters() {
  const res = await fetch(
    "https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/filter"
  );

  const data = await res.json();

  // console.log(data);
  return data.filters;
}

async function GetFilterById(id: string) {
  const res = await fetch(
    `https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/filter/${id}`
  );

  const data = await res.json();

  // console.log(data);
  return data;
}

async function GetOpenStatusById(id: string) {
  const res = await fetch(
    `https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/open/${id}`
  );

  const data = await res.json();

  console.log(data);
  return data;
}

async function GetPriceRangeById(id: string) {
  const res = await fetch(
    `https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/price-range/${id}`
  );

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
          console.log("hello" + restaurantData);
          return restaurantData;
        } catch (error) {
          console.log(error);
        }
      }
    )
  );

  console.log(completeRestaurantData);

  return completeRestaurantData;
}

export {
  MergedRestaurantData,
  GetAllRestaurants,
  GetRestaurantById,
  GetAllFilters,
  GetFilterById,
  GetOpenStatusById,
  GetPriceRangeById,
};
