import {
  Card,
  CardHeader,
  Avatar,
  List,
  ListSeparators,
  StandardListItem,
  ListItemType,
  RatingIndicator,
  FlexBox,
  Badge,
  TitleLevel,
  Title,
  Text
} from '@ui5/webcomponents-react';
import { CardTagColors } from '../../enums/CardTagColorsEnum';

import { useStyles } from './ReviewCard.jss';
import { ReviewCardProps } from '../../interfaces/props/ReviewCardProps';

export const ReviewCard = (props: ReviewCardProps) => {
  const { review } = props;

  const isAvatarGreen = Math.floor(Math.random() * 100) + 1 <= 50;
  const classes = useStyles({ isAvatarGreen });

  return (
    <Card
      className={classes.reviewCard}
      header={
        <CardHeader
          avatar={<Avatar icon="employee" className={classes.reviewCardAvatar} />}
          titleText={review.ruCode + ' - ' + review.universityName}
          subtitleText={review.city}
        />
      }
    >
      <List separators={ListSeparators.None}>
        <StandardListItem type={ListItemType.Inactive}>
          <RatingIndicator readonly value={review.rating} className={classes.reviewCardStars} />
        </StandardListItem>
        <StandardListItem
          type={ListItemType.Inactive}
          style={{ height: 'auto', marginTop: '20px' }}
        >
          <Title level={TitleLevel.H5}>Comentários</Title>
          <Text className={classes.reviewCardComments}>{review.comment}</Text>
        </StandardListItem>
        <StandardListItem
          type={ListItemType.Inactive}
          style={{ height: 'auto', marginTop: '20px' }}
        >
          <Title level={TitleLevel.H5}>Tags</Title>
          <FlexBox className={classes.badgesList}>
            {review.tags.map((tag) => {
              const isTagPositive = tag.type === 'positive';
              const isTagNegative = tag.type === 'negative';

              return (
                <Badge
                  className={classes.badge}
                  colorScheme={
                    isTagPositive
                      ? CardTagColors.Positive
                      : isTagNegative
                        ? CardTagColors.Negative
                        : CardTagColors.Neutral
                  }
                >
                  {tag.name}
                </Badge>
              );
            })}
          </FlexBox>
        </StandardListItem>
      </List>
    </Card>
  );
};
