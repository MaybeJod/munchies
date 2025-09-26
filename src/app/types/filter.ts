export interface FilterState {
  categories: string[];
  deliveryTime: string[];
  priceRange: string[];
}

export interface FilterButton {
  buttonText: string;
  isActive: boolean;
  onClick: () => void;
}

export interface FilterProps {
  foodCategoryText?: string[];
  deliveryTimeText?: string[];
  priceRangeText?: string[];
  onFilterChange?: (filters: FilterState) => void;
  activeFilters?: FilterState;
}
