/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Badge, Card, CardHeader, FlexBox, Icon, Label, Text } from '@ui5/webcomponents-react';
import { IconBadgeColors } from '../../enums/IconBadgeColorsEnum';
import { useStyles } from '../AverageReviewsCard/AverageReviewsCard.jss';
import { CardTagColors } from '../../enums/CardTagColorsEnum';
import { AverageReviewCardProps, CardTags } from '../../interfaces/props/AverageReviewCardProps';

export const AverageReviewsCard = (props: AverageReviewCardProps) => {
  const {
    ruCode,
    universityName,
    universityLocation,
    isRising,
    averageRating,
    reviewsAmount,
    isDescending,
    isBestReviewed,
    isWorstReviewed
  } = props;
  const classes = useStyles();

  const [cardTags, setCardTags] = useState<Array<CardTags>>([]);

  useEffect(() => {
    const updatedCardTags = [];

    if (isBestReviewed) {
      updatedCardTags.push({ name: 'Melhor da universidade', status: CardTagColors.Positive });
    } else if (isWorstReviewed) {
      updatedCardTags.push({ name: 'Pior da universidade', status: CardTagColors.Negative });
    }

    if (averageRating >= 3.9) {
      updatedCardTags.push({ name: 'Bem avaliado', status: CardTagColors.Positive });
    } else if (averageRating <= 2.6) {
      updatedCardTags.push({ name: 'Mal avaliado', status: CardTagColors.Negative });
    } else {
      updatedCardTags.push({ name: 'Na média', status: CardTagColors.Neutral });
    }

    setCardTags(updatedCardTags);
  }, []);

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
                  backgroundColor: isRising
                    ? IconBadgeColors.Positive
                    : isDescending
                      ? IconBadgeColors.Negative
                      : IconBadgeColors.Neutral
                }}
              >
                <Icon
                  className={classes.badgeIcon}
                  name={
                    isRising ? 'trend-up' : isDescending ? 'trend-down' : 'bo-strategy-management'
                  }
                ></Icon>
              </div>
            </>
          }
          titleText={ruCode + ' - ' + universityName}
          subtitleText={universityLocation}
        />
      }
    >
      <FlexBox className={classes.ratingContainer}>
        <Icon name="favorite" className={classes.rating}></Icon>
        <Label className={classes.ratingLabelTitle}>{averageRating}</Label>
        <Text className={classes.ratingLabelSubtitle}>({reviewsAmount} avaliações)</Text>
      </FlexBox>

      <FlexBox className={classes.badgesContainer}>
        {cardTags.map((tag, index) => (
          <Badge key={index} colorScheme={tag.status} className={classes.badge}>
            {tag.name}
          </Badge>
        ))}
      </FlexBox>
    </Card>
  );
};
