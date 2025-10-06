import { useState, useCallback } from 'react';
import { Review } from '../interfaces/Review';
import { DietaryPreference } from '../enums/DietaryPreferenceEnum';
import { MealPeriod } from '../enums/MealPeriodEnum';

interface FilterCriteria {
  courseName: string;
  dietaryPreference: DietaryPreference;
  mealPeriod: MealPeriod;
}

interface UseFilterReturn {
  filterCriteria: FilterCriteria;
  setFilterCriteria: (criteria: Partial<FilterCriteria>) => void;
  filterReviews: (reviews: Review[], criteria?: Partial<FilterCriteria>) => Review[];
  clearFilters: () => void;
  hasActiveFilters: boolean;
  activeFiltersCount: number;
}

const initialFilterCriteria: FilterCriteria = {
  courseName: '',
  dietaryPreference: DietaryPreference.UNDEFINED,
  mealPeriod: MealPeriod.UNDEFINED
};

export const useFilter = (): UseFilterReturn => {
  const [filterCriteria, setFilterCriteriaState] = useState<FilterCriteria>(initialFilterCriteria);

  const setFilterCriteria = useCallback((criteria: Partial<FilterCriteria>) => {
    setFilterCriteriaState((prev) => ({ ...prev, ...criteria }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilterCriteriaState(initialFilterCriteria);
  }, []);

  const filterReviews = useCallback(
    (reviews: Review[], criteria: Partial<FilterCriteria> = {}): Review[] => {
      let filteredReviews = reviews;

      // Filter by course name
      if (criteria.courseName?.trim()) {
        filteredReviews = filteredReviews.filter((review) => {
          return (
            review.courseName &&
            review.courseName.toLowerCase().includes(criteria.courseName!.toLowerCase().trim())
          );
        });
      }

      // Filter by dietary preference
      if (
        criteria.dietaryPreference !== undefined &&
        criteria.dietaryPreference !== DietaryPreference.UNDEFINED
      ) {
        filteredReviews = filteredReviews.filter((review) => {
          return (
            review.dietaryPreference &&
            review.dietaryPreference.toLowerCase() === criteria.dietaryPreference!.toLowerCase()
          );
        });
      }

      // Filter by meal period
      if (criteria.mealPeriod !== undefined && criteria.mealPeriod !== MealPeriod.UNDEFINED) {
        filteredReviews = filteredReviews.filter((review) => {
          return (
            review.mealPeriod &&
            review.mealPeriod.toLowerCase() === criteria.mealPeriod!.toLowerCase()
          );
        });
      }

      return filteredReviews;
    },
    []
  );

  const hasActiveFilters =
    filterCriteria.courseName.trim() !== '' ||
    filterCriteria.dietaryPreference !== DietaryPreference.UNDEFINED ||
    filterCriteria.mealPeriod !== MealPeriod.UNDEFINED;

  const activeFiltersCount = [
    filterCriteria.courseName.trim() !== '',
    filterCriteria.dietaryPreference !== DietaryPreference.UNDEFINED,
    filterCriteria.mealPeriod !== MealPeriod.UNDEFINED
  ].filter(Boolean).length;

  return {
    filterCriteria,
    setFilterCriteria,
    filterReviews,
    clearFilters,
    hasActiveFilters,
    activeFiltersCount
  };
};
