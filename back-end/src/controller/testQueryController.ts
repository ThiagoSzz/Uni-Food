import express from "express";
import { TestService } from "../service/testService";

const TEST_QUERY_API = "/testquery";
const router = express.Router();

const testService = new TestService();

router.get(TEST_QUERY_API, (req: express.Request, res: express.Response) => {
  testService.testServiceFunc();

  const testReturnedValue = `Query executed`;
  res.status(200).json({ testReturnedValue });
});

export default router;
