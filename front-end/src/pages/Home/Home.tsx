/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { FlexBox, FlexBoxDirection, Text, Title, TitleLevel } from '@ui5/webcomponents-react';

import { useStyles } from './Home.jss';
import '@ui5/webcomponents-icons/dist/AllIcons';
import { CustomShellBar } from '../../components/ShellBar/CustomShellBar/CustomShellBar';
import { ReviewCard } from '../../components/ReviewCard/ReviewCard';
import { AverageReviewsCard } from '../../components/AverageReviewsCard/AverageReviewsCard';
import { FilterPopover } from '../../components/FilterPopover/FilterPopover';
import { getAverageReviewsList, getReviewsList } from '../../fixtures/ReviewsFixture';
import { CreateReviewInfoBox } from '../../components/CreateReviewInfoBox/CreateReviewInfoBox';
import { SearchReviewInfoBox } from '../../components/SearchReviewInfoBox/SearchReviewInfoBox';
import { ReviewsSearchBar } from '../../components/ReviewsSearchBar/ReviewsSearchBar';

export const Home: React.FC = () => {
  const classes = useStyles();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const averageReviews = getAverageReviewsList();
  const reviews = getReviewsList();

  return (
    <FlexBox direction={FlexBoxDirection.Column}>
      <CustomShellBar searchDisabled />

      <FlexBox direction={FlexBoxDirection.Column}>
        <FlexBox direction={FlexBoxDirection.Row} className={classes.boxesContainer}>
          <CreateReviewInfoBox />
          <SearchReviewInfoBox />
        </FlexBox>

        <FlexBox className={classes.boxesContainer}>
          <ReviewsSearchBar setIsPopoverOpen={setIsPopoverOpen} />
          <FilterPopover isPopoverOpen={isPopoverOpen} setIsPopoverOpen={setIsPopoverOpen} />
        </FlexBox>

        <FlexBox className={classes.textContainer}>
          <FlexBox className={classes.centeredContainer}>
            <Title className={classes.sectionText} level={TitleLevel.H4}>
              Médias por Restaurante Universitário
            </Title>
            <Text className={classes.sectionText}>({averageReviews.length} RUs)</Text>
          </FlexBox>
        </FlexBox>

        <FlexBox className={classes.averageReviewsContainer}>
          {averageReviews.map((averageReview, index) => {
            return (
              <AverageReviewsCard
                key={index}
                ruCode={averageReview.ruCode}
                universityName={averageReview.universityName}
                universityLocation={averageReview.universityLocation}
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
            <Text className={classes.sectionText}>({reviews.length} avaliações)</Text>
          </FlexBox>
        </FlexBox>

        <FlexBox className={classes.reviewsContainer}>
          {reviews.map((review, index) => {
            return (
              <ReviewCard
                key={index}
                ruCode={review.ruCode}
                universityName={review.universityName}
                universityLocation={review.universityLocation}
                rating={review.rating}
                comment={review.comment}
                tags={review.tags}
              />
            );
          })}
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};
