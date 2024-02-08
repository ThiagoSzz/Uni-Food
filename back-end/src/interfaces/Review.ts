import { DietaryPreference } from '../enums/DietaryPreferenceEnum';
import { MealPeriod } from '../enums/MealPeriodEnum';
import { Tag } from './Tags';

export interface Review {
  rucode: string;
  universityname: string;
  mealperiod: MealPeriod;
  comment: string;
  tags: Tag[];
  rating: string;
  coursename: string;
  courseperiod: string;
  dietarypreference: DietaryPreference;
  city: string;
}
