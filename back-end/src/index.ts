import express from "express";
import cors from "cors";
import { config } from "dotenv";
import router from "./controller/testQueryController";

config();
const UNIFOOD = express();
const PORT = process.env.PORT || 8080;

UNIFOOD.use(express.json());
UNIFOOD.use(cors());

UNIFOOD.use("/", router);

UNIFOOD.listen(PORT, () => {
  console.log(`UniFood back-end is running at http://localhost:${PORT}`);
});
