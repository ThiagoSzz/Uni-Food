import { DietaryPreference } from '../enums/DietaryPreferenceEnum';
import { MealPeriod } from '../enums/MealPeriodEnum';
import { Tag } from './Tags';

export interface Review {
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
  toString?: () => string;
}
