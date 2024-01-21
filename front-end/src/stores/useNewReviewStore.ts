import { create } from 'zustand';
import { DietaryPreference } from '../enums/DietaryPreferenceEnum';
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
  courseName: string;
  coursePeriod: string;
  dietaryPreference: DietaryPreference;
  city: string;
  newReview: Review | undefined;
  validationErrors: ValidationError[];
  setRuCode: (value: string) => void;
  setUniversityName: (value: string) => void;
  setMealPeriod: (value: MealPeriod) => void;
  setComment: (value: string) => void;
  setTags: (value: Tag[]) => void;
  setRating: (value: number) => void;
  setCourseName: (value: string) => void;
  setCoursePeriod: (value: string) => void;
  setDietaryPreference: (value: DietaryPreference) => void;
  setCity: (value: string) => void;
  setNewReview: (value: Review) => void;
  createNewReview: () => void;
  clearNewReview: () => void;
  clearValidationErrors: () => void;
  validateFields: () => boolean;
  hasFilledFields: () => boolean;
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
    - Course Name: ${this.courseName}
    - Course Period: ${this.coursePeriod}
    - Dietary Preference: ${this.dietaryPreference}
    - City: ${this.city}
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
  courseName: '',
  setCourseName: (value: string) => set(() => ({ courseName: value })),
  coursePeriod: '',
  setCoursePeriod: (value: string) => set(() => ({ coursePeriod: value })),
  dietaryPreference: DietaryPreference.UNDEFINED,
  setDietaryPreference: (value: DietaryPreference) => set(() => ({ dietaryPreference: value })),
  city: '',
  setCity: (value: string) => set(() => ({ city: value })),
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
      courseName: get().courseName,
      coursePeriod: get().coursePeriod,
      dietaryPreference: get().dietaryPreference,
      city: get().city,
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
      setCourseName,
      setCoursePeriod,
      setDietaryPreference,
      setCity,
      setNewReview
    } = get();

    setRuCode('');
    setUniversityName('');
    setMealPeriod(MealPeriod.UNDEFINED);
    setComment('');
    setTags([]);
    setRating(0);
    setCourseName('');
    setCoursePeriod('');
    setDietaryPreference(DietaryPreference.UNDEFINED);
    setCity('');

    setNewReview(undefined);
  },
  validationErrors: [],
  clearValidationErrors: () => set((state) => ({ validationErrors: [] })),
  validateFields: () => {
    const {
      ruCode,
      universityName,
      mealPeriod,
      comment,
      tags,
      rating,
      courseName,
      coursePeriod,
      dietaryPreference,
      city
    } = get();

    const errors: ValidationError[] = [];

    if (!ruCode) {
      errors.push(ValidationError.RUCodeRequired);
    }

    let updatedRUCode = ruCode;
    if (ruCode && !updatedRUCode.toUpperCase().startsWith('RU')) {
      updatedRUCode = `RU${updatedRUCode.slice(2)}`;

      if (!updatedRUCode.startsWith('RU')) {
        errors.push(ValidationError.RUCodeFormat);
      }
    }
    set(() => ({ ruCode: updatedRUCode }));

    if (!universityName) {
      errors.push(ValidationError.UniversityNameRequired);
    }
    set(() => ({ universityName: universityName.toUpperCase() }));

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

    if (courseName && !coursePeriod) {
      errors.push(ValidationError.CoursePeriodRequired);
    }

    if (!courseName && coursePeriod) {
      errors.push(ValidationError.CourseNameRequired);
    }

    if (
      dietaryPreference &&
      ![DietaryPreference.OMNIVORE, DietaryPreference.VEGETARIAN, DietaryPreference.VEGAN].includes(
        dietaryPreference
      )
    ) {
      errors.push(ValidationError.InvalidDietaryPreference);
    }

    if (city && city.length > 50) {
      errors.push(ValidationError.InvalidCityLength);
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
      rating: get().rating,
      courseName: get().courseName,
      coursePeriod: get().coursePeriod,
      dietaryPreference: get().dietaryPreference,
      city: get().city
    };

    if (
      newReview.ruCode !== '' ||
      newReview.universityName !== '' ||
      newReview.mealPeriod !== '' ||
      newReview.comment !== '' ||
      newReview.tags.length !== 0 ||
      newReview.rating !== 0 ||
      newReview.courseName !== '' ||
      newReview.coursePeriod !== '' ||
      newReview.dietaryPreference !== '' ||
      newReview.city !== ''
    )
      return true;
    else return false;
  }
}));

export default useNewReviewStore;
