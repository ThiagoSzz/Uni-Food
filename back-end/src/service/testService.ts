import { getAllReviews } from "../database/commands";

export class TestService {
  public testServiceFunc = async () => {
    const result = await getAllReviews();

    console.log('First 10 reviews:', result.slice(0, 10));
  };
}
