import { getAllReviews } from "../database/commands";

export class TestService {
  public testServiceFunc = async () => {
    const result = await getAllReviews();
  };
}
