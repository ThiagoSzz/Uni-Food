import { MealPeriod } from '../enums/MealPeriodEnum';
import { getPositiveTags } from '../fixtures/TagStatesFixture';
import { Review } from '../interfaces/Review';
import { Tag } from '../interfaces/Tags';

const positiveTags = getPositiveTags();

const mapToReview = (item: any): Review => {
  const tagsArray = item.tags.split(',').map((tag: string) => tag.trim());

  const tags: Tag[] = tagsArray.map((tag: string) => {
    const type = positiveTags.includes(tag) ? 'positive' : 'negative';
    return { name: tag, type: type };
  });

  const review: Review = {
    ruCode: item.siglaRestaurante,
    universityName: item.siglaUniversidade,
    mealPeriod: item.periodoNota.trim() as MealPeriod,
    comment: item.comentario,
    tags: tags,
    rating: item.notaDada,
    courseName: undefined,
    coursePeriod: undefined,
    dietaryPreference: undefined,
    city: undefined
  };

  return review;
};

export const mapToReviews = (data: any[]): Review[] => {
  return data.map(mapToReview);
};
