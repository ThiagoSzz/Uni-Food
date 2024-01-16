import { create } from 'zustand';
import { Review } from '../interfaces/Review';

export type ReviewsStore = {
  reviews: Review[];
  numReviews: number;
  setReviews: (value: Review[]) => void;
  addReview: (value: Review) => void;
};

const initialNumReviews = 0;

const useReviewsStore = create<ReviewsStore>((set, get) => ({
  reviews: [],
  numReviews: initialNumReviews,
  setReviews: (value: Review[]) => set(() => ({ reviews: value, numReviews: value.length })),
  addReview: (value: Review) =>
    set(() => ({
      reviews: [...get().reviews, value],
      numReviews: [...get().reviews, value].length
    }))
}));

export default useReviewsStore;
