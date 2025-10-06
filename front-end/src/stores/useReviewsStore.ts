import { create } from 'zustand';
import { Review } from '../interfaces/Review';

export type ReviewsStore = {
  reviews: Review[];
  filterDialogState: boolean;
  setReviews: (value: Review[]) => void;
  addReview: (value: Review) => void;
  setFilterDialogState: (value: boolean) => void;
};

const initialFilterDialogState: boolean = false;

const useReviewsStore = create<ReviewsStore>((set, get) => ({
  reviews: [],
  setReviews: (value: Review[]) => set(() => ({ reviews: value })),
  addReview: (value: Review) =>
    set(() => ({
      reviews: [...get().reviews, value]
    })),
  filterDialogState: initialFilterDialogState,
  setFilterDialogState: (value: boolean) => set(() => ({ filterDialogState: value }))
}));

export default useReviewsStore;
