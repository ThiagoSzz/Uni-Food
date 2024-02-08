import express from 'express';
import { Review } from '../interfaces/Review';
import { Tag, TagTypes } from '../interfaces/Tags';
import { CreateReviewService } from '../service/createReviewService';
import { GetReviewsService } from '../service/getReviewsService';

const GET_REVIEWS = '/get-reviews';
const CREATE_REVIEW = '/create-review';

const router = express.Router();

const getReviewsService = new GetReviewsService();
const createReviewsService = new CreateReviewService();

router.get(GET_REVIEWS, async (req: express.Request, res: express.Response) => {
  try {
    const result = await getReviewsService.getReviews();

    const transformedResult = result.map((review: Review) => ({
      ruCode: review.rucode,
      universityName: review.universityname.trim(),
      mealPeriod: review.mealperiod.trim(),
      comment: review.comment,
      tags: review.tags.map(([name, type]: any) => ({
        name: name.trim(),
        type: type.trim() as TagTypes
      })) as Tag[],
      rating: parseInt(review.rating),
      courseName: review.coursename,
      coursePeriod: review.courseperiod,
      dietaryPreference: review.dietarypreference,
      city: review.city.trim()
    }));

    res.status(200).json(transformedResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post(CREATE_REVIEW, async (req: express.Request, res: express.Response) => {
  try {
    const {
      siglaRU,
      siglaUniversidade,
      emailUsuario,
      periodoNota,
      notaEstrelas,
      comentario,
      tags,
      duracaoNota
    } = req.body;

    await createReviewsService.createReview(
      siglaRU,
      siglaUniversidade,
      emailUsuario,
      periodoNota,
      notaEstrelas,
      comentario,
      tags,
      duracaoNota
    );

    res.status(200).json({ success: true, message: 'Review created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
