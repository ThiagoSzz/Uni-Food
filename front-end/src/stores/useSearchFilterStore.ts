import { create } from 'zustand';
import { DietaryPreference } from '../enums/DietaryPreferenceEnum';
import { MealPeriod } from '../enums/MealPeriodEnum';

export interface FilterCriteria {
  courseName: string;
  dietaryPreference: DietaryPreference;
  mealPeriod: MealPeriod;
}

export interface SearchFilterStore {
  searchQuery: string;
  shouldFilterReviews: boolean;
  shouldFilterAverageReviews: boolean;
  filterCriteria: FilterCriteria;
  setSearchQuery: (query: string) => void;
  clearSearch: () => void;
  setShouldFilterReviews: (value: boolean) => void;
  setShouldFilterAverageReviews: (value: boolean) => void;
  setFilterCriteria: (criteria: Partial<FilterCriteria>) => void;
  clearFilters: () => void;
  clearAllFilters: () => void;
}

const initialFilterCriteria: FilterCriteria = {
  courseName: '',
  dietaryPreference: DietaryPreference.UNDEFINED,
  mealPeriod: MealPeriod.UNDEFINED
};

const useSearchFilterStore = create<SearchFilterStore>((set, get) => ({
  searchQuery: '',
  shouldFilterReviews: true,
  shouldFilterAverageReviews: false,
  filterCriteria: initialFilterCriteria,
  setSearchQuery: (query: string) => set({ searchQuery: query }),
  clearSearch: () => set({ searchQuery: '' }),
  setShouldFilterReviews: (value: boolean) => set({ shouldFilterReviews: value }),
  setShouldFilterAverageReviews: (value: boolean) => set({ shouldFilterAverageReviews: value }),
  setFilterCriteria: (criteria: Partial<FilterCriteria>) =>
    set((state) => ({
      filterCriteria: { ...state.filterCriteria, ...criteria }
    })),
  clearFilters: () => set({ filterCriteria: initialFilterCriteria }),
  clearAllFilters: () =>
    set({
      searchQuery: '',
      filterCriteria: initialFilterCriteria
    })
}));

export default useSearchFilterStore;
