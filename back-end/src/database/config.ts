import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import { logger } from "../config/logger";

config();

const sql = neon(process.env.DATABASE_URL!);

export const sqlOperation = async (
  operation: string,
  values: any[],
  key: string
) => {
  logger.info(`SQL Operation is running${key ? ": " + `${key}` : ""}`);

  const result = await sql(operation, values);

  return result;
};
