import { Pool, PoolClient } from 'pg';
import { config } from 'dotenv';
import { logger } from '../config/logger';

config();

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  user: process.env.DB_USER || 'unifood_user',
  password: process.env.DB_PASSWORD || 'unifood_password',
  database: process.env.DB_NAME || 'unifood_db',
  max: 20, // Maximum number of connections in the pool
  idleTimeoutMillis: 30000, // Close connections after 30 seconds of inactivity
  connectionTimeoutMillis: 2000 // Return an error if connection takes longer than 2 seconds
});

pool.on('error', (err) => {
  logger.error('Unexpected error on idle client', err);
  process.exit(-1);
});

export const sqlOperation = async (operation: string, values: any[]) => {
  let client: PoolClient | undefined;

  try {
    client = await pool.connect();
    const result = await client.query(operation, values);
    return result.rows;
  } catch (error) {
    logger.error('Database operation error:', error);
    throw error;
  } finally {
    if (client) {
      client.release();
    }
  }
};

export const closePool = async () => {
  try {
    await pool.end();
    logger.info('Database pool closed');
  } catch (error) {
    logger.error('Error closing database pool:', error);
  }
};
