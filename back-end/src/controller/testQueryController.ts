import express from "express";
import { TestService } from "../service/testService";

const TEST_QUERY_API = "/testquery";
const router = express.Router();

const testService = new TestService(0);

router.get(TEST_QUERY_API, (req: express.Request, res: express.Response) => {
  const testParam = testService.testServiceFunc(
    req.query.testParam!.toString()
  );

  const testReturnedValue = `testQueryResponse is ${testParam}`;
  res.json({ testReturnedValue });
});

export default router;
