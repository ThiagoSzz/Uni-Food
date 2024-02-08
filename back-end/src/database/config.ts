import { neon } from '@neondatabase/serverless';
import { config } from 'dotenv';

config();

const sql = neon(process.env.DATABASE_URL!);

export const sqlOperation = async (operation: string, values: any[]) => {
  try {
    const result = await sql(operation, values);
    return result;
  } catch (error) {
    throw error;
  }
};
