/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from 'react';
import {
  BusyIndicator,
  FlexBox,
  FlexBoxDirection,
  Text,
  Title,
  TitleLevel,
  IllustratedMessage,
  IllustrationMessageSize,
  IllustrationMessageType
} from '@ui5/webcomponents-react';

import { useStyles } from './Home.jss';
import '@ui5/webcomponents-icons/dist/AllIcons';
import { CustomShellBar } from '../../components/ShellBar/CustomShellBar/CustomShellBar';
import { FilterDialog } from '../../components/FiltersDialog/FiltersDialog';
import { CreateReviewInfoBox } from '../../components/CreateReviewInfoBox/CreateReviewInfoBox';
import { SearchReviewInfoBox } from '../../components/SearchReviewInfoBox/SearchReviewInfoBox';
import { ReviewsSearchBar } from '../../components/ReviewsSearchBar/ReviewsSearchBar';
import useNewReviewStore from '../../stores/useNewReviewStore';
import useAverageReviewsStore from '../../stores/useAverageReviewsStore';
import useReviewsStore from '../../stores/useReviewsStore';
import { useAverageReviews } from '../../hooks/useAverageReviews';
import { useGetReviewsMutation } from '../../hooks/queries/useGetReviews';
import { getReviewsList } from '../../fixtures/ReviewsFixture';
import { useMessageStrip } from '../../hooks/useMessageStrip';

import '@ui5/webcomponents-fiori/dist/illustrations/NoData.js';
import { ReviewCard } from '../../components/ReviewCard/ReviewCard';
import { AverageReviewsCard } from '../../components/AverageReviewsCard/AverageReviewsCard';
import { MessageStripContainer } from '../../components/MessageStripContainer/MessageStripContainer';
import { useTranslation } from 'react-i18next';

const USE_BACKEND_REVIEWS = true;
const NUM_DISPLAYED_REVIEWS = 40;

export const Home: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [clearValidationErrors, isReviewCreated, setIsReviewCreated] = useNewReviewStore(
    (value) => [value.clearValidationErrors, value.isReviewCreated, value.setIsReviewCreated]
  );
  const [
    reviews,
    setReviews,
    filteredReviews,
    setFilteredReviews,
    shouldShowNoFilteredReviewsMessage,
    searchQuery
  ] = useReviewsStore((value) => [
    value.reviews,
    value.setReviews,
    value.filteredReviews,
    value.setFilteredReviews,
    value.shouldShowNoFilteredReviewsMessage,
    value.searchQuery
  ]);
  const [setAverageReviews, filteredAverageReviews, setFilteredAverageReviews] =
    useAverageReviewsStore((value) => [
      value.setAverageReviews,
      value.filteredAverageReviews,
      value.setFilteredAverageReviews
    ]);

  const [isLoadingReviews, setIsLoadingReviews] = useState<boolean>(true);
  const [isLoadingAverageReviews, setIsLoadingAverageReviews] = useState<boolean>(true);
  const [hasNoData, setHasNoData] = useState<boolean>(false);

  const {
    message: feedbackMessage,
    showSuccessMessage,
    showErrorMessage,
    showInfoMessage,
    hideMessage: hideFeedbackMessage
  } = useMessageStrip(6000);

  const { getUniversityRuStandings, groupReviewsByRuAndUniversity } = useAverageReviews();

  const reviewsMutation = useGetReviewsMutation();

  const fetchReviews = useCallback(async () => {
    try {
      const result = await reviewsMutation.mutateAsync();
      const reviews = result.data;

      setReviews(reviews);
      setFilteredReviews(reviews);
    } catch (error) {
      showErrorMessage(t('messages.reviewsFetchError', { message: error.message }));
      setHasNoData(true);
    }
  }, [reviewsMutation]);

  // Effect for initial loading
  useEffect(() => {
    const loadInitialData = async () => {
      setIsLoadingReviews(true);
      setIsLoadingAverageReviews(true);
      clearValidationErrors();

      if (USE_BACKEND_REVIEWS) {
        await fetchReviews();
      } else {
        const reviewsFixture = getReviewsList();
        setReviews(reviewsFixture);
        setFilteredReviews(reviewsFixture);
      }
    };

    loadInitialData();
  }, []);

  useEffect(() => {
    if (shouldShowNoFilteredReviewsMessage) {
      showInfoMessage(t('messages.noFilteredReviews'));
    }
  }, [shouldShowNoFilteredReviewsMessage, showInfoMessage, t]);

  useEffect(() => {
    hideFeedbackMessage();
  }, [searchQuery, hideFeedbackMessage]);

  useEffect(() => {
    if (isReviewCreated) {
      showSuccessMessage(t('messages.reviewCreatedSuccess'));
      setIsReviewCreated(false);
    }
  }, [isReviewCreated, showSuccessMessage, t, setIsReviewCreated]);

  // Refetch reviews when a new review is created
  useEffect(() => {
    if (isReviewCreated && USE_BACKEND_REVIEWS) {
      fetchReviews();
    }
  }, [isReviewCreated, fetchReviews]);

  useEffect(() => {
    if (reviews.length > 0) {
      const bestAndWorstRusByUniversity = getUniversityRuStandings(reviews);
      const reviewsGroupedByRuAndUniversity = groupReviewsByRuAndUniversity(
        reviews,
        bestAndWorstRusByUniversity
      );

      setAverageReviews(reviewsGroupedByRuAndUniversity);
      setFilteredAverageReviews(reviewsGroupedByRuAndUniversity);
    }
  }, [reviews]);

  useEffect(() => {
    if (filteredAverageReviews.length > 0 && isLoadingAverageReviews) {
      setIsLoadingReviews(false);
      setIsLoadingAverageReviews(false);
    }
  }, [filteredAverageReviews, isLoadingAverageReviews]);

  return (
    <FlexBox direction={FlexBoxDirection.Column}>
      <CustomShellBar searchDisabled />

      <FlexBox direction={FlexBoxDirection.Column}>
        <FlexBox direction={FlexBoxDirection.Row} className={classes.boxesContainer}>
          <CreateReviewInfoBox />
          <SearchReviewInfoBox />
        </FlexBox>
        {feedbackMessage ? (
          <FlexBox className={classes.messageStripContainer}>
            <MessageStripContainer
              message={feedbackMessage}
              onClose={hideFeedbackMessage}
              className={classes.messageStrip}
            />
          </FlexBox>
        ) : (
          <></>
        )}
        <FlexBox
          className={classes.boxesContainer}
          style={{ marginTop: '10px', marginBottom: '0px' }}
        >
          <ReviewsSearchBar />
          <FilterDialog />
        </FlexBox>
        <FlexBox className={classes.textContainer}>
          <FlexBox className={classes.centeredContainer}>
            <Title className={classes.sectionText} level={TitleLevel.H4}>
              {t('reviews.averageReviewsTitle')}
            </Title>
            <Text className={classes.sectionText}>
              {t('reviews.averageReviewsCounter', {
                count: !isLoadingAverageReviews ? filteredAverageReviews.length : 0
              })}
            </Text>
          </FlexBox>
        </FlexBox>
        <FlexBox className={classes.averageReviewsContainer}>
          <BusyIndicator
            delay={0}
            active={isLoadingAverageReviews && !hasNoData}
            className={classes.busyIndicator}
          />
          {hasNoData && (
            <IllustratedMessage
              name={IllustrationMessageType.NoData}
              size={IllustrationMessageSize.Spot}
              titleText={t('reviews.noResults')}
              titleLevel={TitleLevel.H4}
              subtitleText={t('reviews.noResultsDesc')}
            />
          )}
          {!isLoadingAverageReviews &&
            filteredAverageReviews.map((averageReview, index) => {
              return <AverageReviewsCard key={`average-${index}`} averageReview={averageReview} />;
            })}
        </FlexBox>
        <FlexBox className={classes.textContainer}>
          <FlexBox className={classes.centeredContainer}>
            <Title className={classes.sectionText} level={TitleLevel.H4}>
              {t('reviews.reviewsTitle')}
            </Title>
            <Text className={classes.sectionText}>
              {t('reviews.reviewsCounter', {
                count: !isLoadingReviews ? filteredReviews.length : 0
              })}
            </Text>
          </FlexBox>
        </FlexBox>
        <FlexBox className={classes.reviewsContainer}>
          <BusyIndicator
            delay={0}
            active={isLoadingReviews && !hasNoData}
            className={classes.busyIndicator}
            style={{ marginBottom: '300px' }}
          />
          {hasNoData && (
            <IllustratedMessage
              name={IllustrationMessageType.NoData}
              size={IllustrationMessageSize.Scene}
              titleText={t('reviews.noResults')}
              titleLevel={TitleLevel.H3}
              subtitleText={t('reviews.noResultsDesc')}
              className={classes.reviewsIllustratedMessage}
            />
          )}
          {!isLoadingReviews &&
            filteredReviews.slice(0, NUM_DISPLAYED_REVIEWS).map((review, index) => {
              return <ReviewCard key={`review-${index}`} review={review} />;
            })}
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};
