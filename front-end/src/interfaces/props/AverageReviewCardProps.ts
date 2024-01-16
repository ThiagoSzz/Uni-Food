import { CardTagColors } from "../../enums/CardTagColorsEnum";

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

export interface AverageReviewBadge {
  name: string;
  status: CardTagColors;
}
