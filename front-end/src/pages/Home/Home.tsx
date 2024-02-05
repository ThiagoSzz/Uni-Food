/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import {
  BusyIndicator,
  FlexBox,
  FlexBoxDirection,
  Text,
  Title,
  TitleLevel,
  MessageStrip,
  MessageStripDesign
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
import { useGetReviewsMutation } from '../../hooks/queries/useGetReviews';
import { getReviewsList } from '../../fixtures/ReviewsFixture';

const USE_BACKEND_REVIEWS = true;
const NUM_DISPLAYED_REVIEWS = 40;

export const Home: React.FC = () => {
  const classes = useStyles();

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
  const [feedbackMessageStrip, setFeedbackMessageStrip] = useState<{
    show: boolean;
    message?: string;
    value?: MessageStripDesign;
  }>({
    show: false
  });

  const { getUniversityRuStandings, groupReviewsByRuAndUniversity } = useAverageReviews();

  const reviewsMutation = useGetReviewsMutation();

  const fetchReviews = async () => {
    await reviewsMutation.mutateAsync().then((result) => {
      const reviews = result.data;

      setReviews(reviews);
      setFilteredReviews(reviews);
    });
  };

  useEffect(() => {
    if (shouldShowNoFilteredReviewsMessage) {
      setFeedbackMessageStrip({
        show: true,
        message: 'Nenhuma avaliação foi filtrada com sua pesquisa.',
        value: MessageStripDesign.Information
      });

      const timeoutId = setTimeout(() => {
        setFeedbackMessageStrip({ show: false });
      }, 5000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [shouldShowNoFilteredReviewsMessage]);

  useEffect(() => {
    setFeedbackMessageStrip({ show: false });
  }, [searchQuery]);

  useEffect(() => {
    if (isReviewCreated) {
      setFeedbackMessageStrip({
        show: true,
        message: 'Sua avaliação foi criada com sucesso!',
        value: MessageStripDesign.Positive
      });

      setIsReviewCreated(false);
    }

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
    if (filteredAverageReviews.length > 0) {
      setIsLoadingReviews(false);
      setIsLoadingAverageReviews(false);
    }
  }, [filteredAverageReviews]);

  useEffect(() => {
    if (feedbackMessageStrip.show) {
      const timeoutId = setTimeout(() => {
        setFeedbackMessageStrip({ show: false });
      }, 5000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [feedbackMessageStrip.show]);

  return (
    <FlexBox direction={FlexBoxDirection.Column}>
      <CustomShellBar searchDisabled />

      <FlexBox direction={FlexBoxDirection.Column}>
        <FlexBox direction={FlexBoxDirection.Row} className={classes.boxesContainer}>
          <CreateReviewInfoBox />
          <SearchReviewInfoBox />
        </FlexBox>
        {feedbackMessageStrip.show ? (
          <FlexBox className={classes.messageStripContainer}>
            <MessageStrip
              className={classes.messageStrip}
              onClose={() => setFeedbackMessageStrip({ show: false })}
              design={feedbackMessageStrip.value}
            >
              <Text style={{ fontSize: '15px' }}>{feedbackMessageStrip.message}</Text>
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
            <Text className={classes.sectionText}>
              ({!isLoadingAverageReviews ? filteredAverageReviews.length : '??'} RUs)
            </Text>
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
            <Text className={classes.sectionText}>
              ({!isLoadingReviews ? filteredReviews.length : '??'} avaliações)
            </Text>
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
            filteredReviews.slice(0, NUM_DISPLAYED_REVIEWS).map((review, index) => {
              return <ReviewCard key={index} review={review} />;
            })}
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};
