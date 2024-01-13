export interface AverageReviewCardProps {
  ruCode: string;
  universityName: string;
  universityLocation: string;
  averageRating: number;
  reviewsAmount: number;
  isRising?: boolean;
  isDescending?: boolean;
  isBestReviewed?: boolean;
  isWorstReviewed?: boolean;
}

export interface CardTags {
  name: string;
  status: string;
}
