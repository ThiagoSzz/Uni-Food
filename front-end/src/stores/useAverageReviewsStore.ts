import { create } from 'zustand';
import { AverageReview } from '../interfaces/AverageReview';

export type AverageReviewsStore = {
  averageReviews: AverageReview[];
  searchQuery: string;
  filteredAverageReviews: AverageReview[];
  shouldFilterAverageReviews: boolean;
  setSearchQuery: (value: string) => void;
  setAverageReviews: (value: AverageReview[]) => void;
  addAverageReview: (value: AverageReview) => void;
  setFilteredAverageReviews: (value: AverageReview[]) => void;
  getFilteredAverageReviews: () => void;
  setShouldFilterAverageReviews: (value: boolean) => void;
};

const initialShouldFilterAverageReviews: boolean = false;

const useAverageReviewsStore = create<AverageReviewsStore>((set, get) => ({
  averageReviews: [],
  setAverageReviews: (value: AverageReview[]) =>
    set(() => ({ averageReviews: value, numAverageReviews: value.length })),
  addAverageReview: (value: AverageReview) =>
    set(() => ({
      averageReviews: [...get().averageReviews, value],
      numAverageReviews: [...get().averageReviews, value].length
    })),
  searchQuery: '',
  setSearchQuery: (value: string) => set(() => ({ searchQuery: value })),
  shouldFilterAverageReviews: initialShouldFilterAverageReviews,
  setShouldFilterAverageReviews: (value: boolean) =>
    set(() => ({ shouldFilterAverageReviews: value })),
  filteredAverageReviews: [],
  setFilteredAverageReviews: (value: AverageReview[]) =>
    set(() => ({ filteredAverageReviews: value })),
  getFilteredAverageReviews: () => {
    const averageReviews = get().averageReviews;
    const searchQuery = get().searchQuery;
    const shouldFilterAverageReviews = get().shouldFilterAverageReviews;
    const setFilteredAverageReviews = get().setFilteredAverageReviews;

    if (searchQuery.length > 0 && shouldFilterAverageReviews) {
      const filteredAverageReviews = averageReviews.filter((averageReview) => {
        const averageReviewString =
          `${averageReview.ruCode} ${averageReview.universityName} ${averageReview.city}`.toLowerCase();

        return averageReviewString.includes(searchQuery);
      });

      if (filteredAverageReviews.length !== 0) {
        setFilteredAverageReviews(filteredAverageReviews);
      } else {
        setFilteredAverageReviews(averageReviews);
      }
    } else {
      setFilteredAverageReviews(averageReviews);
    }
  }
}));

export default useAverageReviewsStore;
