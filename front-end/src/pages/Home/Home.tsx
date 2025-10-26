/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback, useMemo } from 'react';
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
import useSearchFilterStore from '../../stores/useSearchFilterStore';
import { useAverageReviews } from '../../hooks/useAverageReviews';
import { getReviewsList } from '../../fixtures/ReviewsFixture';
import { useFeedbackMessage } from '../../hooks/useFeedbackMessage';
import { useSearch } from '../../hooks/useSearch';
import { useFilter } from '../../hooks/useFilter';

import '@ui5/webcomponents-fiori/dist/illustrations/NoData.js';
import { ReviewCard } from '../../components/ReviewCard/ReviewCard';
import { AverageReviewsCard } from '../../components/AverageReviewsCard/AverageReviewsCard';
import { FeedbackMessageDisplay } from '../../components/FeedbackMessageDisplay/FeedbackMessageDisplay';
import { useTranslation } from 'react-i18next';
import { DietaryPreference } from '../../enums/DietaryPreferenceEnum';
import { MealPeriod } from '../../enums/MealPeriodEnum';
import { useGetReviewsQuery } from '../../hooks/queries/useGetReviews';

const USE_BACKEND_REVIEWS = true;
const NUM_DISPLAYED_REVIEWS = 40;

export const Home: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [clearValidationErrors, isReviewCreated, setIsReviewCreated] = useNewReviewStore(
    (value) => [value.clearValidationErrors, value.isReviewCreated, value.setIsReviewCreated]
  );
  const [reviews, setReviews] = useReviewsStore((value) => [value.reviews, value.setReviews]);
  const [averageReviews, setAverageReviews] = useAverageReviewsStore((value) => [
    value.averageReviews,
    value.setAverageReviews
  ]);

  const { searchQuery, shouldFilterReviews, shouldFilterAverageReviews, filterCriteria } =
    useSearchFilterStore();

  const [isLoadingReviews, setIsLoadingReviews] = useState<boolean>(true);
  const [isLoadingAverageReviews, setIsLoadingAverageReviews] = useState<boolean>(true);
  const [hasNoData, setHasNoData] = useState<boolean>(false);

  const { showSuccessMessage, showErrorMessage, showInfoMessage } = useFeedbackMessage();

  const { searchReviews, searchAverageReviews } = useSearch();
  const { filterReviews } = useFilter();
  const { getUniversityRuStandings, groupReviewsByRuAndUniversity } = useAverageReviews();

  const reviewsQuery = useGetReviewsQuery({
    enabled: USE_BACKEND_REVIEWS,
    onSuccess: (data) => {
      setReviews(data);
    },
    onError: (error) => {
      showErrorMessage(t('messages.reviewsFetchError', { message: error.message }));
      setHasNoData(true);
    }
  });

  const isLoadingFromBackend = USE_BACKEND_REVIEWS ? reviewsQuery.isLoading : false;
  const isActuallyLoadingReviews = USE_BACKEND_REVIEWS ? isLoadingFromBackend : isLoadingReviews;

  const hasActiveFilters = useMemo(() => {
    return (
      filterCriteria.courseName.trim() !== '' ||
      filterCriteria.dietaryPreference !== DietaryPreference.UNDEFINED ||
      filterCriteria.mealPeriod !== MealPeriod.UNDEFINED
    );
  }, [filterCriteria]);

  const filteredReviews = useMemo(() => {
    if (!shouldFilterReviews) return reviews;

    let result = reviews;

    if (hasActiveFilters) {
      result = filterReviews(result, filterCriteria);
    }

    if (searchQuery.trim()) {
      result = searchReviews(result, searchQuery);
    }

    return result;
  }, [
    reviews,
    shouldFilterReviews,
    hasActiveFilters,
    filterReviews,
    filterCriteria,
    searchQuery,
    searchReviews
  ]);

  const filteredAverageReviews = useMemo(() => {
    if (!shouldFilterAverageReviews || !searchQuery.trim()) return averageReviews;

    return searchAverageReviews(averageReviews, searchQuery);
  }, [averageReviews, shouldFilterAverageReviews, searchQuery, searchAverageReviews]);

  const shouldShowNoFilteredReviewsMessage =
    shouldFilterReviews &&
    (hasActiveFilters || searchQuery.trim()) &&
    filteredReviews.length === 0 &&
    reviews.length > 0;

  const fetchReviews = useCallback(() => {
    if (USE_BACKEND_REVIEWS) {
      reviewsQuery.refetch();
    }
  }, [reviewsQuery]);

  useEffect(() => {
    clearValidationErrors();

    if (!USE_BACKEND_REVIEWS) {
      const reviewsFixture = getReviewsList();
      setReviews(reviewsFixture);
      setIsLoadingReviews(false);
    }
  }, [clearValidationErrors, setReviews]);

  useEffect(() => {
    if (shouldShowNoFilteredReviewsMessage) {
      showInfoMessage(t('messages.noFilteredReviews'));
    }
  }, [shouldShowNoFilteredReviewsMessage, showInfoMessage, t]);

  useEffect(() => {
    if (isReviewCreated) {
      showSuccessMessage(t('messages.reviewCreatedSuccess'));
      setIsReviewCreated(false);
    }
  }, [isReviewCreated, showSuccessMessage, t, setIsReviewCreated]);

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
    }
  }, [reviews]);

  useEffect(() => {
    if (averageReviews.length > 0 && isLoadingAverageReviews) {
      setIsLoadingReviews(false);
      setIsLoadingAverageReviews(false);
    }
  }, [averageReviews, isLoadingAverageReviews]);

  return (
    <FlexBox direction={FlexBoxDirection.Column}>
      <CustomShellBar searchDisabled />

      <FlexBox direction={FlexBoxDirection.Column}>
        <FlexBox direction={FlexBoxDirection.Row} className={classes.boxesContainer}>
          <CreateReviewInfoBox />
          <SearchReviewInfoBox />
        </FlexBox>
        <FeedbackMessageDisplay
          className={classes.messageStripContainer}
          messageClassName={classes.messageStrip}
        />
        <FlexBox
          className={classes.boxesContainer}
          style={{ marginTop: '10px', marginBottom: '0px' }}
        >
          <ReviewsSearchBar searchQuery={searchQuery} />
          <FilterDialog filterCriteria={filterCriteria} />
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
              return (
                <AverageReviewsCard
                  key={`average-${index}`}
                  averageReview={averageReview}
                  highlightMatches={shouldFilterAverageReviews ? searchQuery : ''}
                />
              );
            })}
        </FlexBox>
        <FlexBox className={classes.textContainer}>
          <FlexBox className={classes.centeredContainer}>
            <Title className={classes.sectionText} level={TitleLevel.H4}>
              {t('reviews.reviewsTitle')}
            </Title>
            <Text className={classes.sectionText}>
              {t('reviews.reviewsCounter', {
                count: !isActuallyLoadingReviews ? filteredReviews.length : 0
              })}
            </Text>
          </FlexBox>
        </FlexBox>
        <FlexBox className={classes.reviewsContainer}>
          <BusyIndicator
            delay={0}
            active={isActuallyLoadingReviews && !hasNoData}
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
          {!isActuallyLoadingReviews &&
            filteredReviews.slice(0, NUM_DISPLAYED_REVIEWS).map((review, index) => {
              return (
                <ReviewCard
                  key={`review-${index}`}
                  review={review}
                  highlightMatches={shouldFilterReviews ? searchQuery : ''}
                />
              );
            })}
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};
