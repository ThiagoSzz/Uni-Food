import {
  Card,
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
  ButtonDesign,
  FlexBoxDirection
} from '@ui5/webcomponents-react';
import { CardTagColors } from '../../enums/CardTagColorsEnum';

import { useStyles } from './ReviewCard.jss';
import { ReviewCardProps } from '../../interfaces/props/ReviewCardProps';
import { AvatarBackgroundColors, AvatarIconColors } from '../../enums/AvatarColorsEnum';
import { useEffect, useState } from 'react';
import { TagTypes } from '../../enums/TagTypes';
import { Tooltip } from 'react-tippy';

import 'react-tippy/dist/tippy.css';
import Highlighter from 'react-highlight-words';
import useReviewsStore from '../../stores/useReviewsStore';
import { useTranslation } from 'react-i18next';

export const ReviewCard = (props: ReviewCardProps) => {
  const { review } = props;
  const { t } = useTranslation();

  const [searchQuery, shouldFilterReviews] = useReviewsStore((value) => [
    value.searchQuery,
    value.shouldFilterReviews
  ]);

  const highlightMatches = shouldFilterReviews ? searchQuery : '';

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
          <FlexBox className={classes.cardHeader}>
            <Avatar icon="employee" className={classes.reviewCardAvatar} />
            <FlexBox
              direction={FlexBoxDirection.Column}
              className={classes.cardHeaderTextContainer}
            >
              <Title level="H6">
                <Highlighter
                  searchWords={[highlightMatches, highlightMatches.split(' ').join(' - ')]}
                  textToHighlight={review.ruCode + ' - ' + review.universityName}
                  highlightClassName={classes.searchHighlight}
                />
              </Title>
              <Text className={classes.cardHeaderSubtitle}>
                <Highlighter
                  searchWords={[highlightMatches]}
                  textToHighlight={review.city}
                  highlightClassName={classes.searchHighlight}
                />
              </Text>
            </FlexBox>
          </FlexBox>
          <Tooltip
            html={
              <span>
                {review.courseName ? (
                  <p>
                    <strong>{t('review.course')}: </strong>
                    {review.courseName}
                  </p>
                ) : (
                  <></>
                )}
                <p>
                  <strong>{t('review.mealPeriod')}: </strong>
                  {t(`meal.${review.mealPeriod.toLowerCase()}`)}
                </p>
                <p>
                  <strong>{t('review.diet')}: </strong>
                  {t(`diet.${review.dietaryPreference.toLowerCase()}`)}
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
          <Title level={TitleLevel.H5}>{t('review.comments')}</Title>
          <Text className={classes.reviewCardComments}>
            <Highlighter
              highlightClassName={classes.searchHighlight}
              searchWords={[highlightMatches]}
              textToHighlight={review.comment}
            />
          </Text>
        </StandardListItem>
        <StandardListItem type={ListItemType.Inactive} style={{ height: 'auto', marginTop: '5px' }}>
          <Title level={TitleLevel.H5}>{t('review.tags')}</Title>
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
                  <Highlighter
                    highlightClassName={classes.searchHighlight}
                    searchWords={[highlightMatches]}
                    textToHighlight={tag.name}
                  />
                </Badge>
              );
            })}
          </FlexBox>
        </StandardListItem>
      </List>
    </Card>
  );
};
