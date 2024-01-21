import {
  BestAndWorstRatingsByRU,
  UniversityRuStandings,
  CommonRuAndUniversityInfo,
  BestAndWorstRatings,
  AverageReview
} from '../interfaces/AverageReview';
import { Review } from '../interfaces/Review';

export const useAverageReviews = () => {
  const getUniversityRuStandings = (reviews: Review[]): BestAndWorstRatingsByRU => {
    const initialStandings: Record<string, UniversityRuStandings> = {};

    reviews.forEach((review) => {
      let universityStanding = initialStandings[review.universityName];

      if (!universityStanding) {
        initialStandings[review.universityName] = {
          bestRU: review.ruCode,
          bestRating: review.rating,
          worstRU: review.ruCode,
          worstRating: review.rating
        };
      } else {
        if (review.rating > universityStanding.bestRating) {
          universityStanding.bestRU = review.ruCode;
          universityStanding.bestRating = review.rating;
        } else if (review.rating < universityStanding.worstRating) {
          universityStanding.worstRU = review.ruCode;
          universityStanding.worstRating = review.rating;
        }
      }
    });

    const finalStandings: Record<string, BestAndWorstRatings> = {};
    for (let university in initialStandings) {
      finalStandings[university] = {
        bestRU: initialStandings[university].bestRU,
        worstRU: initialStandings[university].worstRU
      };
    }

    return finalStandings;
  };

  const groupReviewsByRuAndUniversity = (
    reviews: Review[],
    bestAndWorst: BestAndWorstRatingsByRU
  ): AverageReview[] => {
    const groupedReviews = reviews.reduce(
      (ruForUniversityInfo, currentReview) => {
        const key = `${currentReview.ruCode}-${currentReview.universityName}`;

        if (!ruForUniversityInfo[key]) {
          ruForUniversityInfo[key] = {
            ruCode: currentReview.ruCode,
            universityName: currentReview.universityName,
            city: currentReview.city,
            totalRating: 0,
            reviewsAmount: 0
          };
        }

        ruForUniversityInfo[key].totalRating += currentReview.rating;
        ruForUniversityInfo[key].reviewsAmount += 1;

        return ruForUniversityInfo;
      },
      {} as Record<string, CommonRuAndUniversityInfo>
    );

    const ruAndUniversityInfo: AverageReview[] = Object.values(groupedReviews).map(
      ({ totalRating, ...other }) => {
        const { bestRU, worstRU } = bestAndWorst[other.universityName];

        return {
          ...other,
          averageRating: totalRating / other.reviewsAmount,
          isRising: totalRating / other.reviewsAmount >= 3.9,
          isDescending: totalRating / other.reviewsAmount <= 2.6,
          isBestReviewed: bestRU === other.ruCode,
          isWorstReviewed: worstRU === other.ruCode && !(bestRU === other.ruCode)
        };
      }
    );

    return ruAndUniversityInfo;
  };

  return { getUniversityRuStandings, groupReviewsByRuAndUniversity };
};
