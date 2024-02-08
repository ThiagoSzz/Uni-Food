/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Badge, Card, CardHeader, FlexBox, Icon, Label, Text } from '@ui5/webcomponents-react';
import { IconBadgeColors } from '../../enums/IconBadgeColorsEnum';
import { useStyles } from '../AverageReviewsCard/AverageReviewsCard.jss';
import { CardTagColors } from '../../enums/CardTagColorsEnum';
import {
  AverageReviewBadge,
  AverageReviewCardProps
} from '../../interfaces/props/AverageReviewCardProps';

export const AverageReviewsCard = (props: AverageReviewCardProps) => {
  const { averageReview } = props;
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
        <CardHeader
          avatar={
            <>
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
            </>
          }
          titleText={averageReview.ruCode + ' - ' + averageReview.universityName}
          subtitleText={averageReview.city}
        />
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
