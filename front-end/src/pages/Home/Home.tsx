/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import {
  BusyIndicator,
  FlexBox,
  FlexBoxDirection,
  Text,
  Title,
  TitleLevel,
  MessageStrip
} from '@ui5/webcomponents-react';

import { useStyles } from './Home.jss';
import '@ui5/webcomponents-icons/dist/AllIcons';
import { CustomShellBar } from '../../components/ShellBar/CustomShellBar/CustomShellBar';
import { ReviewCard } from '../../components/ReviewCard/ReviewCard';
import { AverageReviewsCard } from '../../components/AverageReviewsCard/AverageReviewsCard';
import { FilterDialog } from '../../components/FiltersDialog/FiltersDialog';
import { CreateReviewInfoBox } from '../../components/CreateReviewInfoBox/CreateReviewInfoBox';
import { SearchReviewInfoBox } from '../../components/SearchReviewInfoBox/SearchReviewInfoBox';
import { ReviewsSearchBar } from '../../components/ReviewsSearchBar/ReviewsSearchBar';
import useNewReviewStore from '../../stores/useNewReviewStore';
import useAverageReviewsStore from '../../stores/useAverageReviewsStore';
import useReviewsStore from '../../stores/useReviewsStore';
import { useAverageReviews } from '../../hooks/useAverageReviews';
import { useReviewsMutation } from '../../hooks/useReviewsMutation';
import { mapToReviews } from '../../mappers/reviewsMapper';
import { getReviewsList } from '../../fixtures/ReviewsFixture';

const USE_BACKEND_REVIEWS = false;

export const Home: React.FC = () => {
  const classes = useStyles();

  const clearValidationErrors = useNewReviewStore((value) => value.clearValidationErrors);
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
  const [averageReviews, setAverageReviews, filteredAverageReviews, setFilteredAverageReviews] =
    useAverageReviewsStore((value) => [
      value.averageReviews,
      value.setAverageReviews,
      value.filteredAverageReviews,
      value.setFilteredAverageReviews
    ]);

  const [isLoadingReviews, setIsLoadingReviews] = useState<boolean>(true);
  const [isLoadingAverageReviews, setIsLoadingAverageReviews] = useState<boolean>(true);
  const [showMessageStrip, setShowMessageStrip] = useState<boolean>();

  const { getUniversityRuStandings, groupReviewsByRuAndUniversity } = useAverageReviews();

  const reviewsMutation = useReviewsMutation();

  const fetchReviews = async () => {
    try {
      const result = await reviewsMutation.mutateAsync();
      const reviews = mapToReviews(result.data);

      setReviews(reviews);
      setFilteredReviews(reviews);
    } catch (error) {}
  };

  useEffect(() => {
    if (shouldShowNoFilteredReviewsMessage) {
      setShowMessageStrip(true);

      const timeoutId = setTimeout(() => {
        setShowMessageStrip(false);
      }, 5000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [shouldShowNoFilteredReviewsMessage]);

  useEffect(() => {
    setShowMessageStrip(false);
  }, [searchQuery]);

  useEffect(() => {
    setIsLoadingReviews(true);
    setIsLoadingAverageReviews(true);
    clearValidationErrors();

    if (USE_BACKEND_REVIEWS) {
      fetchReviews();
    } else {
      const reviewsFixture = getReviewsList();

      setReviews(reviewsFixture);
      setFilteredReviews(reviewsFixture);
    }
  }, []);

  useEffect(() => {
    const bestAndWorstRusByUniversity = getUniversityRuStandings(reviews);
    const reviewsGroupedByRuAndUniversity = groupReviewsByRuAndUniversity(
      reviews,
      bestAndWorstRusByUniversity
    );

    setAverageReviews(reviewsGroupedByRuAndUniversity);
    setFilteredAverageReviews(reviewsGroupedByRuAndUniversity);
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
        {showMessageStrip ? (
          <FlexBox className={classes.messageStripContainer}>
            <MessageStrip
              className={classes.messageStrip}
              onClose={() => setShowMessageStrip(false)}
            >
              <Text style={{ fontSize: '15px' }}>
                Nenhuma avaliação foi filtrada com sua pesquisa.
              </Text>
            </MessageStrip>
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
              Médias por Restaurante Universitário
            </Title>
            <Text className={classes.sectionText}>({filteredAverageReviews.length} RUs)</Text>
          </FlexBox>
        </FlexBox>
        <FlexBox className={classes.averageReviewsContainer}>
          <BusyIndicator
            delay={0}
            active={isLoadingAverageReviews}
            className={classes.busyIndicator}
          />
          {!isLoadingAverageReviews &&
            filteredAverageReviews.map((averageReview, index) => {
              return <AverageReviewsCard key={index} averageReview={averageReview} />;
            })}
        </FlexBox>
        <FlexBox className={classes.textContainer}>
          <FlexBox className={classes.centeredContainer}>
            <Title className={classes.sectionText} level={TitleLevel.H4}>
              Avaliações por Refeição
            </Title>
            <Text className={classes.sectionText}>({filteredReviews.length} avaliações)</Text>
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
            filteredReviews.map((review, index) => {
              return <ReviewCard key={index} review={review} />;
            })}
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};
