import { useState, useCallback } from 'react';
import { Review } from '../interfaces/Review';
import { AverageReview } from '../interfaces/AverageReview';

interface UseSearchReturn {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchReviews: (reviews: Review[], query?: string) => Review[];
  searchAverageReviews: (averageReviews: AverageReview[], query?: string) => AverageReview[];
  clearSearch: () => void;
}

export const useSearch = (): UseSearchReturn => {
  const [searchQuery, setSearchQueryState] = useState<string>('');

  const setSearchQuery = useCallback((query: string) => {
    setSearchQueryState(query);
  }, []);

  const clearSearch = useCallback(() => {
    setSearchQueryState('');
  }, []);

  const searchReviews = useCallback((reviews: Review[], query: string = ''): Review[] => {
    const searchTerm = query.toLowerCase().trim();

    if (!searchTerm) {
      return reviews;
    }

    const filtered = reviews.filter((review) => {
      const searchableText = [
        review.ruCode,
        review.universityName,
        review.comment,
        review.city || '',
        ...review.tags.map((tag) => tag.name)
      ]
        .join(' ')
        .toLowerCase();

      return searchableText.includes(searchTerm);
    });

    return filtered;
  }, []);

  const searchAverageReviews = useCallback(
    (averageReviews: AverageReview[], query: string = ''): AverageReview[] => {
      const searchTerm = query.toLowerCase().trim();

      if (!searchTerm) {
        return averageReviews;
      }

      const filtered = averageReviews.filter((averageReview) => {
        const searchableText = [
          averageReview.ruCode,
          averageReview.universityName,
          averageReview.city
        ]
          .join(' ')
          .toLowerCase();

        return searchableText.includes(searchTerm);
      });

      return filtered;
    },
    []
  );

  return {
    searchQuery,
    setSearchQuery,
    searchReviews,
    searchAverageReviews,
    clearSearch
  };
};
