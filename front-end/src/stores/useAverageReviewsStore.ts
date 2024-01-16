import { create } from 'zustand';
import { AverageReview } from '../interfaces/AverageReview';

export type AverageReviewsStore = {
  averageReviews: AverageReview[];
  numAverageReviews: number;
  setAverageReviews: (value: AverageReview[]) => void;
  addAverageReview: (value: AverageReview) => void;
};

const initialNumAverageReviews = 0;

const useAverageReviewsStore = create<AverageReviewsStore>((set, get) => ({
  averageReviews: [],
  numAverageReviews: initialNumAverageReviews,
  setAverageReviews: (value: AverageReview[]) =>
    set(() => ({ averageReviews: value, numAverageReviews: value.length })),
  addAverageReview: (value: AverageReview) =>
    set(() => ({
      averageReviews: [...get().averageReviews, value],
      numAverageReviews: [...get().averageReviews, value].length
    }))
}));

export default useAverageReviewsStore;
