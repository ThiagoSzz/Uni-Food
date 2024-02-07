import { create } from 'zustand';
import { Review } from '../interfaces/Review';
import { DietaryPreference } from '../enums/DietaryPreferenceEnum';
import { MealPeriod } from '../enums/MealPeriodEnum';

export type ReviewsStore = {
  reviews: Review[];
  filterDialogState: boolean;
  searchQuery: string;
  filteredReviews: Review[];
  shouldFilterReviews: boolean;
  shouldShowNoFilteredReviewsMessage: boolean;
  setSearchQuery: (value: string) => void;
  setReviews: (value: Review[]) => void;
  addReview: (value: Review) => void;
  setFilterDialogState: (value: boolean) => void;
  setFilteredReviews: (value: Review[]) => void;
  getFilteredReviews: () => void;
  setShouldFilterReviews: (value: boolean) => void;
  setShouldShowNoFilteredReviewsMessage: (value: boolean) => void;
  addFilters: (
    courseName: string,
    dietaryPreference: DietaryPreference,
    mealPeriod: MealPeriod
  ) => void;
  resetFilters: () => void;
};

const initialFilterDialogState: boolean = false;
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
  filterDialogState: initialFilterDialogState,
  setFilterDialogState: (value: boolean) => set(() => ({ filterDialogState: value })),
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
    set(() => ({ shouldShowNoFilteredReviewsMessage: value })),
  addFilters: (
    courseName: string,
    dietaryPreference: DietaryPreference,
    mealPeriod: MealPeriod
  ) => {
    const reviews = get().filteredReviews;
    const shouldFilterReviews = get().shouldFilterReviews;
    const setFilteredReviews = get().setFilteredReviews;
    const setShouldShowNoFilteredReviewsMessage = get().setShouldShowNoFilteredReviewsMessage;

    setShouldShowNoFilteredReviewsMessage(false);

    if (
      (courseName.length > 0 ||
        dietaryPreference !== DietaryPreference.UNDEFINED ||
        mealPeriod !== MealPeriod.UNDEFINED) &&
      shouldFilterReviews
    ) {
      let filteredReviews;

      if (courseName.length > 0) {
        filteredReviews = reviews.filter((review) => {
          return review.courseName.toLowerCase() === courseName.toLowerCase();
        });
      }

      if (!filteredReviews) filteredReviews = reviews;

      if (dietaryPreference !== DietaryPreference.UNDEFINED) {
        filteredReviews = filteredReviews.filter((review) => {
          return review.dietaryPreference.toLowerCase() === dietaryPreference.toLowerCase();
        });
      }

      if (!filteredReviews) filteredReviews = reviews;

      if (mealPeriod !== MealPeriod.UNDEFINED) {
        filteredReviews = filteredReviews.filter((review) => {
          return review.mealPeriod.toLowerCase() === mealPeriod.toLowerCase();
        });
      }

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
  resetFilters: () =>
    set(() => ({
      filteredReviews: get().reviews,
      searchQuery: '',
      shouldShowNoFilteredReviewsMessage: false
    }))
}));

export default useReviewsStore;
