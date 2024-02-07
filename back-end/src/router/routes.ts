import express from 'express';
import getReviewsController from '../controller/reviewsController';

const router = express.Router();

router.use('/reviews', getReviewsController);

export default router;
