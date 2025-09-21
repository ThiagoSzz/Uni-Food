import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import router from './controller/reviewsController';
import { logger } from './config/logger';
import { closePool } from './database/config';

config();
const UNIFOOD = express();
const PORT = process.env.PORT || 8080;

UNIFOOD.use(express.json());
UNIFOOD.use(cors());

UNIFOOD.use('/', router);

const server = UNIFOOD.listen(PORT, () => {
  logger.info(`UniFood back-end is running at http://localhost:${PORT}`);
});

// Graceful shutdown
const gracefulShutdown = async () => {
  logger.info('Received shutdown signal, closing server gracefully...');

  server.close(async () => {
    logger.info('HTTP server closed');
    await closePool();
    process.exit(0);
  });

  // Force close after 10 seconds
  setTimeout(() => {
    logger.error('Could not close connections in time, forcefully shutting down');
    process.exit(1);
  }, 10000);
};

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);
