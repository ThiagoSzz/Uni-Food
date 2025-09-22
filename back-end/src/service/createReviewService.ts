import cache from 'memory-cache';
import {
  getNextReviewId,
  getOrCreateRuId,
  insertNewRating,
  insertNewReview
} from '../database/commands';

export class CreateReviewService {
  public createReview = async (
    ruCode: string,
    universityName: string,
    userEmail: string,
    mealPeriod: string,
    rating: number,
    comment: string,
    tags: any[],
    ratingDuration: number
  ) => {
    cache.del('get-reviews');

    const ruResult = await getOrCreateRuId(ruCode, universityName);

    if (!ruResult || ruResult.length === 0) {
      throw new Error(
        `Failed to create or find restaurant for RU code: ${ruCode} and university: ${universityName}`
      );
    }

    const [{ cod_ru: ruId }] = ruResult;

    const [{ nextval: ratingId }] = await getNextReviewId();

    await insertNewRating(ratingId, userEmail, mealPeriod, rating, comment, tags, ratingDuration);

    await insertNewReview(ratingId, userEmail, ruId);
  };
}
