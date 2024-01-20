import { CardTagColors } from '../../enums/CardTagColorsEnum';
import { AverageReview } from '../AverageReview';

export interface AverageReviewCardProps {
  averageReview: AverageReview;
}

export interface AverageReviewBadge {
  name: string;
  status: CardTagColors;
}
