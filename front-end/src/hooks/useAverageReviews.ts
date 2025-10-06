import { useCallback } from 'react';
import {
  BestAndWorstRatingsByRU,
  CommonRuAndUniversityInfo,
  AverageReview,
  BestAndWorstRatings
} from '../interfaces/AverageReview';
import { Review } from '../interfaces/Review';

export const useAverageReviews = () => {
  const getGroupedReviewsInfo = useCallback(
    (reviews: Review[]): Record<string, CommonRuAndUniversityInfo> => {
      return reviews.reduce(
        (ruForUniversityInfo, currentReview) => {
          const key = `${currentReview.ruCode}-${currentReview.universityName}`;

          if (!ruForUniversityInfo[key]) {
            ruForUniversityInfo[key] = {
              ruCode: currentReview.ruCode,
              universityName: currentReview.universityName,
              city: currentReview.city || '',
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
    },
    []
  );

  const getBestAndWorstRus = useCallback(
    (
      ruAndUniversityInfo: {
        ruCode: string;
        universityName: string;
        averageRating: number;
      }[]
    ): Record<string, BestAndWorstRatings> => {
      const universityStandings: Record<string, BestAndWorstRatings> = {};

      ruAndUniversityInfo.forEach((info) => {
        const key = info.universityName;

        if (!universityStandings[key]) {
          universityStandings[key] = {
            bestRU: info.ruCode,
            worstRU: info.ruCode
          };
        } else {
          const currentBestRating = ruAndUniversityInfo.find(
            (r) => r.universityName === key && r.ruCode === universityStandings[key].bestRU
          )?.averageRating;

          const currentWorstRating = ruAndUniversityInfo.find(
            (r) => r.universityName === key && r.ruCode === universityStandings[key].worstRU
          )?.averageRating;

          if (info.averageRating > currentBestRating) {
            universityStandings[key].bestRU = info.ruCode;
          }

          if (info.averageRating < currentWorstRating) {
            universityStandings[key].worstRU = info.ruCode;
          }
        }
      });

      return universityStandings;
    },
    []
  );

  const getUniversityRuStandings = useCallback(
    (reviews: Review[]): BestAndWorstRatingsByRU => {
      const groupedReviews = getGroupedReviewsInfo(reviews);

      const ruAndUniversityInfo = Object.values(groupedReviews).map(({ totalRating, ...other }) => {
        return {
          ruCode: other.ruCode,
          universityName: other.universityName,
          averageRating: parseFloat((totalRating / other.reviewsAmount).toFixed(1))
        };
      });

      return getBestAndWorstRus(ruAndUniversityInfo);
    },
    [getBestAndWorstRus, getGroupedReviewsInfo]
  );

  const groupReviewsByRuAndUniversity = useCallback(
    (reviews: Review[], bestAndWorst: BestAndWorstRatingsByRU): AverageReview[] => {
      const groupedReviews = getGroupedReviewsInfo(reviews);

      const ruAndUniversityInfo: AverageReview[] = Object.values(groupedReviews).map(
        ({ totalRating, ...other }) => {
          const { bestRU, worstRU } = bestAndWorst[other.universityName];

          const averageRating = parseFloat((totalRating / other.reviewsAmount).toFixed(1));

          return {
            ...other,
            averageRating: averageRating,
            isRising: averageRating >= 3.0,
            isDescending: averageRating < 3.0,
            isBestReviewed: bestRU === other.ruCode,
            isWorstReviewed: worstRU === other.ruCode
          };
        }
      );

      return ruAndUniversityInfo;
    },
    [getGroupedReviewsInfo]
  );

  return { getUniversityRuStandings, groupReviewsByRuAndUniversity };
};
