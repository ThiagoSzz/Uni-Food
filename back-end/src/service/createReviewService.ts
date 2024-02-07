import { getNextReviewId, getRuId, insertNewRating, insertNewReview } from '../database/commands';

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
    const [{ cod_ru: ruId }] = await getRuId(ruCode, universityName);

    const [{ nextval: ratingId }] = await getNextReviewId();

    await insertNewRating(ratingId, userEmail, mealPeriod, rating, comment, tags, ratingDuration);

    await insertNewReview(ratingId, userEmail, ruId);
  };
}
