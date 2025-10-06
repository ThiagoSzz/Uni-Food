import { create } from 'zustand';
import { AverageReview } from '../interfaces/AverageReview';

export type AverageReviewsStore = {
  averageReviews: AverageReview[];
  setAverageReviews: (value: AverageReview[]) => void;
  addAverageReview: (value: AverageReview) => void;
};

const useAverageReviewsStore = create<AverageReviewsStore>((set, get) => ({
  averageReviews: [],
  setAverageReviews: (value: AverageReview[]) => set(() => ({ averageReviews: value })),
  addAverageReview: (value: AverageReview) =>
    set(() => ({
      averageReviews: [...get().averageReviews, value]
    }))
}));

export default useAverageReviewsStore;
