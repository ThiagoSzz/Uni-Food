/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import {
  Badge,
  Card,
  FlexBox,
  FlexBoxDirection,
  Icon,
  Label,
  Text,
  Title
} from '@ui5/webcomponents-react';
import { IconBadgeColors } from '../../enums/IconBadgeColorsEnum';
import { useStyles } from '../AverageReviewsCard/AverageReviewsCard.jss';
import { CardTagColors } from '../../enums/CardTagColorsEnum';
import Highlighter from 'react-highlight-words';
import { AverageReview } from '../../interfaces/AverageReview';

interface AverageReviewCardProps {
  averageReview: AverageReview;
  highlightMatches?: string;
}

interface AverageReviewBadge {
  name: string;
  status: CardTagColors;
}

export const AverageReviewsCard = ({
  averageReview,
  highlightMatches = ''
}: AverageReviewCardProps) => {
  const classes = useStyles();

  const [cardTags, setCardTags] = useState<AverageReviewBadge[]>([]);

  useEffect(() => {
    const updatedCardTags: AverageReviewBadge[] = [];

    if (averageReview.isBestReviewed) {
      updatedCardTags.push({ name: 'Melhor da universidade', status: CardTagColors.Positive });
    } else if (averageReview.isWorstReviewed) {
      updatedCardTags.push({ name: 'Pior da universidade', status: CardTagColors.Negative });
    }

    if (averageReview.averageRating >= 3.3) {
      updatedCardTags.push({ name: 'Bem avaliado', status: CardTagColors.Positive });
    } else if (averageReview.averageRating <= 2.4) {
      updatedCardTags.push({ name: 'Mal avaliado', status: CardTagColors.Negative });
    } else {
      updatedCardTags.push({ name: 'Na média', status: CardTagColors.Neutral });
    }

    setCardTags(updatedCardTags);
  }, [averageReview]);

  return (
    <Card
      className={classes.averageCard}
      header={
        <FlexBox className={classes.cardHeader}>
          <Icon className={classes.cardIcon} name="competitor" />
          <div
            className={classes.iconBadge}
            style={{
              backgroundColor: averageReview.isRising
                ? IconBadgeColors.Positive
                : averageReview.isDescending
                  ? IconBadgeColors.Negative
                  : IconBadgeColors.Neutral
            }}
          >
            <Icon
              className={classes.badgeIcon}
              name={
                averageReview.isRising
                  ? 'trend-up'
                  : averageReview.isDescending
                    ? 'trend-down'
                    : 'bo-strategy-management'
              }
            ></Icon>
          </div>
          <FlexBox direction={FlexBoxDirection.Column} className={classes.cardHeaderTextContainer}>
            <Title level="H6">
              <Highlighter
                searchWords={[highlightMatches, highlightMatches.split(' ').join(' - ')]}
                textToHighlight={averageReview.ruCode + ' - ' + averageReview.universityName}
                highlightClassName={classes.searchHighlight}
              />
            </Title>
            <Text className={classes.cardHeaderSubtitle}>
              <Highlighter
                searchWords={[highlightMatches]}
                textToHighlight={averageReview.city}
                highlightClassName={classes.searchHighlight}
              />
            </Text>
          </FlexBox>
        </FlexBox>
      }
    >
      <FlexBox className={classes.ratingContainer}>
        <Icon name="favorite" className={classes.rating}></Icon>
        <Label className={classes.ratingLabelTitle}>{averageReview.averageRating}</Label>
        <Text className={classes.ratingLabelSubtitle}>
          ({averageReview.reviewsAmount} avaliações)
        </Text>
      </FlexBox>

      <FlexBox className={classes.badgesContainer}>
        {cardTags.length > 0 &&
          cardTags.map((tag, index) => {
            return (
              <Badge key={index} colorScheme={tag.status}>
                {tag.name}
              </Badge>
            );
          })}
      </FlexBox>
    </Card>
  );
};
