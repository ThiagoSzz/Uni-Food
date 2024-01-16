export interface AverageReview {
  ruCode: string;
  universityName: string;
  city: string;
  averageRating: number;
  reviewsAmount: number;
  isRising: boolean;
  isDescending: boolean;
  isBestReviewed: boolean;
  isWorstReviewed: boolean;
}

export interface BestAndWorstRatingsByRU {
  [key: string]: BestAndWorstRatings;
}

export interface BestAndWorstRatings {
  bestRU: string;
  worstRU: string;
}

export interface CommonRuAndUniversityInfo {
  ruCode: string;
  universityName: string;
  city: string;
  totalRating: number;
  reviewsAmount: number;
  averageRating?: number;
  isRising?: boolean;
  isDescending?: boolean;
}

export interface UniversityRuStandings {
  bestRU: string;
  bestRating: number;
  worstRU: string;
  worstRating: number;
}