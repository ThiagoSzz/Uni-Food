import { create } from 'zustand';
import { MealPeriod } from '../enums/MealPeriodEnum';
import { Review } from '../interfaces/Review';
import { ValidationError } from '../enums/NewReviewValidationErrorsEnum';
import { Tag } from '../interfaces/Tags';

export type NewReviewStore = {
  ruCode: string;
  universityName: string;
  mealPeriod: MealPeriod;
  comment: string;
  tags: Tag[];
  rating: number;
  newReview: Review | undefined;
  validationErrors: ValidationError[];
  isReviewCreated: boolean;
  setRuCode: (value: string) => void;
  setUniversityName: (value: string) => void;
  setMealPeriod: (value: MealPeriod) => void;
  setComment: (value: string) => void;
  setTags: (value: Tag[]) => void;
  setRating: (value: number) => void;
  setNewReview: (value: Review) => void;
  createNewReview: () => void;
  clearNewReview: () => void;
  clearValidationErrors: () => void;
  validateFields: () => boolean;
  hasFilledFields: () => boolean;
  setIsReviewCreated: (value: boolean) => void;
};

const toString = function (this: Review): string {
  return `
    Review:
    - RU Code: ${this.ruCode}
    - University Name: ${this.universityName}
    - Meal Period: ${this.mealPeriod}
    - Comment: ${this.comment}
    - Tags: ${JSON.stringify(this.tags)}
    - Rating: ${this.rating}
  `;
};

const useNewReviewStore = create<NewReviewStore>((set, get) => ({
  ruCode: '',
  setRuCode: (value: string) => set(() => ({ ruCode: value })),
  universityName: '',
  setUniversityName: (value: string) => set(() => ({ universityName: value })),
  mealPeriod: MealPeriod.UNDEFINED,
  setMealPeriod: (value: MealPeriod) => set(() => ({ mealPeriod: value })),
  comment: '',
  setComment: (value: string) => set(() => ({ comment: value })),
  tags: [],
  setTags: (value: Tag[]) => set(() => ({ tags: value })),
  rating: 0,
  setRating: (value: number) => set(() => ({ rating: value })),
  newReview: undefined,
  setNewReview: (value: Review) => set(() => ({ newReview: value })),
  createNewReview: () => {
    const newReview: Review = {
      ruCode: get().ruCode,
      universityName: get().universityName,
      mealPeriod: get().mealPeriod,
      comment: get().comment,
      tags: get().tags,
      rating: get().rating,
      toString
    };

    const setNewReview = get().setNewReview;
    setNewReview(newReview);
  },
  clearNewReview: () => {
    const {
      setRuCode,
      setUniversityName,
      setMealPeriod,
      setComment,
      setTags,
      setRating,
      setNewReview
    } = get();

    setRuCode('');
    setUniversityName('');
    setMealPeriod(MealPeriod.UNDEFINED);
    setComment('');
    setTags([]);
    setRating(0);

    setNewReview(undefined);
  },
  validationErrors: [],
  clearValidationErrors: () => set((state) => ({ validationErrors: [] })),
  validateFields: () => {
    const { ruCode, universityName, mealPeriod, comment, tags, rating } = get();

    const errors: ValidationError[] = [];

    if (!ruCode) {
      errors.push(ValidationError.RUCodeRequired);
    }

    if (!universityName) {
      errors.push(ValidationError.UniversityNameRequired);
    }

    if (![MealPeriod.BREAKFAST, MealPeriod.LUNCH, MealPeriod.DINNER].includes(mealPeriod)) {
      errors.push(ValidationError.InvalidMealPeriod);
    }

    if (comment.length < 10 || comment.length > 340) {
      errors.push(ValidationError.InvalidCommentLength);
    }

    if (tags.length < 2 || tags.length > 5) {
      errors.push(ValidationError.InvalidTagsCount);
    }

    if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
      errors.push(ValidationError.RatingRequired);
    }

    set(() => ({ validationErrors: errors }));

    return errors.length === 0;
  },
  hasFilledFields: () => {
    const newReview: Review = {
      ruCode: get().ruCode,
      universityName: get().universityName,
      mealPeriod: get().mealPeriod,
      comment: get().comment,
      tags: get().tags,
      rating: get().rating
    };

    if (
      newReview.ruCode !== '' ||
      newReview.universityName !== '' ||
      newReview.mealPeriod !== MealPeriod.UNDEFINED ||
      newReview.comment !== '' ||
      newReview.tags.length !== 0 ||
      newReview.rating !== 0
    ) {
      return true;
    } else {
      return false;
    }
  },
  isReviewCreated: false,
  setIsReviewCreated: (value: boolean) => set(() => ({ isReviewCreated: value }))
}));

export default useNewReviewStore;
