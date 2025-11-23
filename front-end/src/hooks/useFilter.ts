import { useCallback } from 'react';
import { Review } from '../interfaces/Review';
import { DietaryPreference } from '../enums/DietaryPreferenceEnum';
import { MealPeriod } from '../enums/MealPeriodEnum';

interface FilterCriteria {
  courseName: string;
  dietaryPreference: DietaryPreference;
  mealPeriod: MealPeriod;
}

interface UseFilterReturn {
  filterReviews: (reviews: Review[], criteria: Partial<FilterCriteria>) => Review[];
}

export const useFilter = (): UseFilterReturn => {
  const filterReviews = useCallback(
    (reviews: Review[], criteria: Partial<FilterCriteria>): Review[] => {
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
            review.dietaryPreference && review.dietaryPreference === criteria.dietaryPreference
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

  return {
    filterReviews
  };
};
