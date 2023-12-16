import express from "express";

const TEST_QUERY_API = "/testquery";
const router = express.Router();

router.get(TEST_QUERY_API, (req: express.Request, res: express.Response) => {
  const testParam = req.query.testParam;
  const testReturnedValue = `testQueryResponse is ${testParam}`;
  res.json({ testReturnedValue });
});

export default router;
