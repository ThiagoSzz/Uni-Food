import { QueryResult } from "pg";
import pool from "./config";

export const insert = async <T>(
  sql: string,
  values: any[] = []
): Promise<T> => {
  try {
    const result: QueryResult = await pool.query(sql, values);
    return result.rows[0];
  } catch (error) {
    console.error("Error in INSERT operation:", error);
    throw error;
  }
};

export const select = async <T>(
  sql: string,
  values: any[] = []
): Promise<T[]> => {
  try {
    const result: QueryResult = await pool.query(sql, values);
    return result.rows;
  } catch (error) {
    console.error("Error in SELECT operation:", error);
    throw error;
  }
};
