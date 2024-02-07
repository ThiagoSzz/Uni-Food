import { getAllReviews } from '../database/commands';

export class GetReviewsService {
  public getReviews = async () => {
    const result = await getAllReviews();

    return result;
  };
}
