import { create } from 'zustand';
import { Review } from '../interfaces/Review';

export type ReviewsStore = {
  reviews: Review[];
  filterPopoverState: boolean;
  searchQuery: string;
  filteredReviews: Review[];
  shouldFilterReviews: boolean;
  shouldShowNoFilteredReviewsMessage: boolean;
  setSearchQuery: (value: string) => void;
  setReviews: (value: Review[]) => void;
  addReview: (value: Review) => void;
  setFilterPopoverState: (value: boolean) => void;
  setFilteredReviews: (value: Review[]) => void;
  getFilteredReviews: () => void;
  setShouldFilterReviews: (value: boolean) => void;
  setShouldShowNoFilteredReviewsMessage: (value: boolean) => void;
};

const initialFilterPopoverState: boolean = false;
const initialShouldFilterReviews: boolean = true;
const initialShouldShowNoFilteredReviewsMessage: boolean = false;

const useReviewsStore = create<ReviewsStore>((set, get) => ({
  reviews: [],
  setReviews: (value: Review[]) => set(() => ({ reviews: value, numReviews: value.length })),
  addReview: (value: Review) =>
    set(() => ({
      reviews: [...get().reviews, value],
      numReviews: [...get().reviews, value].length
    })),
  filterPopoverState: initialFilterPopoverState,
  setFilterPopoverState: (value: boolean) => set(() => ({ filterPopoverState: value })),
  searchQuery: '',
  setSearchQuery: (value: string) => set(() => ({ searchQuery: value })),
  shouldFilterReviews: initialShouldFilterReviews,
  setShouldFilterReviews: (value: boolean) => set(() => ({ shouldFilterReviews: value })),
  filteredReviews: [],
  setFilteredReviews: (value: Review[]) => set(() => ({ filteredReviews: value })),
  getFilteredReviews: () => {
    const reviews = get().reviews;
    const searchQuery = get().searchQuery;
    const shouldFilterReviews = get().shouldFilterReviews;
    const setFilteredReviews = get().setFilteredReviews;
    const setShouldShowNoFilteredReviewsMessage = get().setShouldShowNoFilteredReviewsMessage;

    setShouldShowNoFilteredReviewsMessage(false);

    if (searchQuery.length > 0 && shouldFilterReviews) {
      const filteredReviews = reviews.filter((review) => {
        const reviewString = `${review.ruCode} ${review.universityName} ${
          review.comment
        } ${review.tags.map((tag) => tag.name).join(' ')} ${review.city}`.toLowerCase();

        return reviewString.includes(searchQuery);
      });

      if (filteredReviews.length !== 0) {
        setFilteredReviews(filteredReviews);
      } else {
        setShouldShowNoFilteredReviewsMessage(true);
        setFilteredReviews(reviews);
      }
    } else {
      setFilteredReviews(reviews);
    }
  },
  shouldShowNoFilteredReviewsMessage: initialShouldShowNoFilteredReviewsMessage,
  setShouldShowNoFilteredReviewsMessage: (value: boolean) =>
    set(() => ({ shouldShowNoFilteredReviewsMessage: value }))
}));

export default useReviewsStore;
