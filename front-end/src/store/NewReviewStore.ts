import { create } from 'zustand';
import { Tag } from '../interfaces/props/ReviewInfoFormProps';
import { DietaryPreference } from '../enums/DietaryPreferenceEnum';
import { MealPeriod } from '../enums/MealPeriodEnum';

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
};

const useNewReviewStore = create<NewReviewStore>((set, get) => ({
  ruCode: undefined,
  setRuCode: (value: string) => set(() => ({ ruCode: value })),
  universityName: undefined,
  setUniversityName: (value: string) => set(() => ({ universityName: value })),
  mealPeriod: undefined,
  setMealPeriod: (value: MealPeriod) => set(() => ({ mealPeriod: value })),
  comment: undefined,
  setComment: (value: string) => set(() => ({ comment: value })),
  tags: undefined,
  setTags: (value: Tag[]) => set(() => ({ tags: value })),
  rating: undefined,
  setRating: (value: number) => set(() => ({ rating: value })),
  courseName: undefined,
  setCourseName: (value: string) => set(() => ({ courseName: value })),
  coursePeriod: undefined,
  setCoursePeriod: (value: string) => set(() => ({ coursePeriod: value })),
  dietaryPreference: undefined,
  setDietaryPreference: (value: DietaryPreference) => set(() => ({ dietaryPreference: value })),
  city: undefined,
  setCity: (value: string) => set(() => ({ city: value }))
}));

export default useNewReviewStore;
