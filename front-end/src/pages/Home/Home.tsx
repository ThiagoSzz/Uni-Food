/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import {
  BusyIndicator,
  FlexBox,
  FlexBoxDirection,
  Text,
  Title,
  TitleLevel
} from '@ui5/webcomponents-react';

import { useStyles } from './Home.jss';
import '@ui5/webcomponents-icons/dist/AllIcons';
import { CustomShellBar } from '../../components/ShellBar/CustomShellBar/CustomShellBar';
import { ReviewCard } from '../../components/ReviewCard/ReviewCard';
import { AverageReviewsCard } from '../../components/AverageReviewsCard/AverageReviewsCard';
import { FilterPopover } from '../../components/FilterPopover/FilterPopover';
import { getReviewsList } from '../../fixtures/ReviewsFixture';
import { CreateReviewInfoBox } from '../../components/CreateReviewInfoBox/CreateReviewInfoBox';
import { SearchReviewInfoBox } from '../../components/SearchReviewInfoBox/SearchReviewInfoBox';
import { ReviewsSearchBar } from '../../components/ReviewsSearchBar/ReviewsSearchBar';
import useNewReviewStore from '../../stores/useNewReviewStore';
import useAverageReviewsStore from '../../stores/useAverageReviewsStore';
import useReviewsStore from '../../stores/useReviewsStore';
import { useAverageReviews } from '../../hooks/useAverageReviews';

export const Home: React.FC = () => {
  const classes = useStyles();

  const clearValidationErrors = useNewReviewStore((value) => value.clearValidationErrors);
  const [reviews, numReviews, setReviews] = useReviewsStore((value) => [
    value.reviews,
    value.numReviews,
    value.setReviews
  ]);
  const [averageReviews, numAverageReviews, setAverageReviews] = useAverageReviewsStore((value) => [
    value.averageReviews,
    value.numAverageReviews,
    value.setAverageReviews
  ]);

  const [isLoadingReviews, setIsLoadingReviews] = useState<boolean>(true);
  const [isLoadingAverageReviews, setIsLoadingAverageReviews] = useState<boolean>(true);

  const { getUniversityRuStandings, groupReviewsByRuAndUniversity } = useAverageReviews();

  useEffect(() => {
    setIsLoadingReviews(true);
    setIsLoadingAverageReviews(true);

    clearValidationErrors();

    const reviewsFixture = getReviewsList();
    setReviews(reviewsFixture);
  }, []);

  useEffect(() => {
    const bestAndWorst = getUniversityRuStandings(reviews);
    const groupedReviews = groupReviewsByRuAndUniversity(reviews, bestAndWorst);

    setAverageReviews(groupedReviews);
  }, [reviews]);

  useEffect(() => {
    if (averageReviews.length > 0) {
      setIsLoadingReviews(false);
      setIsLoadingAverageReviews(false);
    }
  }, [averageReviews]);

  return (
    <FlexBox direction={FlexBoxDirection.Column}>
      <CustomShellBar searchDisabled />

      <FlexBox direction={FlexBoxDirection.Column}>
        <FlexBox direction={FlexBoxDirection.Row} className={classes.boxesContainer}>
          <CreateReviewInfoBox />
          <SearchReviewInfoBox />
        </FlexBox>

        <FlexBox className={classes.boxesContainer}>
          <ReviewsSearchBar />
          <FilterPopover />
        </FlexBox>

        <FlexBox className={classes.textContainer}>
          <FlexBox className={classes.centeredContainer}>
            <Title className={classes.sectionText} level={TitleLevel.H4}>
              Médias por Restaurante Universitário
            </Title>
            <Text className={classes.sectionText}>({numAverageReviews} RUs)</Text>
          </FlexBox>
        </FlexBox>

        <FlexBox className={classes.averageReviewsContainer}>
          <BusyIndicator
            delay={0}
            active={isLoadingAverageReviews}
            className={classes.busyIndicator}
          />
          {!isLoadingAverageReviews &&
            averageReviews.map((averageReview, index) => {
              return (
                <AverageReviewsCard
                  key={index}
                  ruCode={averageReview.ruCode}
                  universityName={averageReview.universityName}
                  universityLocation={averageReview.city}
                  averageRating={averageReview.averageRating}
                  reviewsAmount={averageReview.reviewsAmount}
                  isRising={averageReview.isRising}
                  isDescending={averageReview.isDescending}
                  isBestReviewed={averageReview.isBestReviewed}
                  isWorstReviewed={averageReview.isWorstReviewed}
                />
              );
            })}
        </FlexBox>

        <FlexBox className={classes.textContainer}>
          <FlexBox className={classes.centeredContainer}>
            <Title className={classes.sectionText} level={TitleLevel.H4}>
              Avaliações por Refeição
            </Title>
            <Text className={classes.sectionText}>({numReviews} avaliações)</Text>
          </FlexBox>
        </FlexBox>

        <FlexBox className={classes.reviewsContainer}>
          <BusyIndicator
            delay={0}
            active={isLoadingReviews}
            className={classes.busyIndicator}
            style={{ marginBottom: '300px' }}
          />
          {!isLoadingReviews &&
            reviews.map((review, index) => {
              return <ReviewCard key={index} review={review} />;
            })}
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};
