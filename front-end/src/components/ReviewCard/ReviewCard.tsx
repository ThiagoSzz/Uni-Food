import {
  Card,
  CardHeader,
  List,
  ListSeparators,
  StandardListItem,
  ListItemType,
  RatingIndicator,
  FlexBox,
  Badge,
  TitleLevel,
  Title,
  Text,
  Avatar,
  Button,
  ButtonDesign
} from '@ui5/webcomponents-react';
import { CardTagColors } from '../../enums/CardTagColorsEnum';

import { useStyles } from './ReviewCard.jss';
import { ReviewCardProps } from '../../interfaces/props/ReviewCardProps';
import { AvatarBackgroundColors, AvatarIconColors } from '../../enums/AvatarColorsEnum';
import { useEffect, useState } from 'react';
import { TagTypes } from '../../enums/TagTypes';
import { Tooltip } from 'react-tippy';

import 'react-tippy/dist/tippy.css';

export const ReviewCard = (props: ReviewCardProps) => {
  const { review } = props;

  const [avatarColors, setAvatarColors] = useState<{
    background: AvatarBackgroundColors;
    icon: AvatarIconColors;
  }>({
    background: undefined,
    icon: undefined
  });
  const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false);

  useEffect(() => {
    const backgroundKeys = Object.keys(AvatarBackgroundColors);
    const randomIndex = Math.floor(Math.random() * backgroundKeys.length);
    const randomKey = backgroundKeys[randomIndex];

    setAvatarColors({
      background: AvatarBackgroundColors[randomKey],
      icon: AvatarIconColors[randomKey]
    });
  }, []);

  const classes = useStyles({
    backgroundColor: avatarColors.background,
    iconColor: avatarColors.icon
  });

  return (
    <Card
      className={classes.reviewCard}
      header={
        <FlexBox>
          <CardHeader
            avatar={<Avatar icon="employee" className={classes.reviewCardAvatar} />}
            titleText={review.ruCode + ' - ' + review.universityName}
            subtitleText={review.city}
            className={classes.cardHeader}
          />
          <Tooltip
            html={
              <span>
                {review.courseName ? (
                  <p>
                    <strong>Curso: </strong>
                    {review.courseName}
                  </p>
                ) : (
                  <></>
                )}
                <p>
                  <strong>Período da refeição: </strong>
                  {review.mealPeriod}
                </p>
                <p>
                  <strong>Preferência alimentar: </strong>
                  {review.dietaryPreference}
                </p>
              </span>
            }
            open={isTooltipOpen}
            position="bottom"
            arrow
            arrowSize="small"
            className={classes.tooltip}
          >
            <Button
              icon="toaster-top"
              design={ButtonDesign.Default}
              onMouseEnter={() => setIsTooltipOpen(true)}
              onMouseLeave={() => setIsTooltipOpen(false)}
              style={{ cursor: 'default' }}
            />
          </Tooltip>
        </FlexBox>
      }
    >
      <List separators={ListSeparators.None}>
        <StandardListItem style={{ marginTop: '-5px' }} type={ListItemType.Inactive}>
          <RatingIndicator readonly value={review.rating} className={classes.reviewCardStars} />
        </StandardListItem>
        <StandardListItem type={ListItemType.Inactive} style={{ height: 'auto', marginTop: '0px' }}>
          <Title level={TitleLevel.H5}>Comentários</Title>
          <Text className={classes.reviewCardComments}>{review.comment}</Text>
        </StandardListItem>
        <StandardListItem type={ListItemType.Inactive} style={{ height: 'auto', marginTop: '5px' }}>
          <Title level={TitleLevel.H5}>Tags</Title>
          <FlexBox className={classes.badgesList}>
            {review.tags.map((tag, index) => {
              const isTagPositive = tag.type === TagTypes.Positive;
              const isTagNegative = tag.type === TagTypes.Negative;

              return (
                <Badge
                  key={index}
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
