import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import router from './controller/reviewsController';
import { logger } from './config/logger';

config();
const UNIFOOD = express();
const PORT = process.env.PORT || 8080;

UNIFOOD.use(express.json());
UNIFOOD.use(cors());

UNIFOOD.use('/', router);

UNIFOOD.listen(PORT, () => {
  logger.info(`UniFood back-end is running at http://localhost:${PORT}`);
});

module.exports = UNIFOOD;
