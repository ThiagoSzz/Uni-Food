import { getAllReviews } from "../src/database/commands";
import { TestService } from "../src/service/testService";
import { getMockedReviews } from "./fixtures/testDatabaseFixtures";

jest.mock("../src/database/commands");

describe("Database tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should execute call to get all reviews and return non-empty reviews", async () => {
    const mockedReviews = getMockedReviews();

    (getAllReviews as jest.Mock).mockResolvedValueOnce(mockedReviews);

    const testService = new TestService();
    await testService.testServiceFunc();

    expect(getAllReviews).toHaveBeenCalledTimes(1);
  });
});
