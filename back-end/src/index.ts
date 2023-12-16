// require("dotenv").config();

import express from "express";
import cors from "cors";
import testQueryController from "./controller/testQueryController";
import { config } from "dotenv";

config();
const UNIFOOD = express();
const PORT = process.env.PORT;

UNIFOOD.use(express.json());
UNIFOOD.use(cors());

UNIFOOD.use("/", testQueryController);

UNIFOOD.listen(PORT, () => {
  console.log(`UniFood back-end is running at http://localhost:${PORT}`);
});
