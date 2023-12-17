import express from "express";
import testQueryController from "../controller/testQueryController";

const router = express.Router();

router.use("/testquery", testQueryController);

export default router;
