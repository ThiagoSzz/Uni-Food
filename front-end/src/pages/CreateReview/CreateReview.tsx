/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import {
  FlexBox,
  FlexBoxDirection,
  Title,
  Text,
  TitleLevel,
  ObjectPage,
  ObjectPageSection,
  MessageStrip,
  MessageStripDesign
} from '@ui5/webcomponents-react';
import { useTranslation } from 'react-i18next';

import { useStyles } from './CreateReview.jss';
import '@ui5/webcomponents-icons/dist/AllIcons';
import { CustomShellBar } from '../../components/ShellBar/CustomShellBar/CustomShellBar';
import { ReviewInfoForm } from '../../components/ReviewInfoForm/ReviewInfoForm';
import { FloatingBar } from '../../components/FloatingBar/FloatingBar';
import useNewReviewStore from '../../stores/useNewReviewStore';
import useReviewsStore from '../../stores/useReviewsStore';
import { useCreateReviewMutation } from '../../hooks/mutations/useCreateReviewMutation';
import { AppRoute } from '../../enums/AppRoutesEnum';
import { useNavigate } from 'react-router-dom';

export const CreateReview: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const setSearchQuery = useReviewsStore((value) => value.setSearchQuery);
  const [newReview, clearNewReview, validationErrors, isReviewCreated, setIsReviewCreated] =
    useNewReviewStore((value) => [
      value.newReview,
      value.clearNewReview,
      value.validationErrors,
      value.isReviewCreated,
      value.setIsReviewCreated
    ]);

  const [showMessageStrip, setShowMessageStrip] = useState<boolean>(false);
  const [feedbackMessageStrip, setFeedbackMessageStrip] = useState<{
    show: boolean;
    message?: string;
    value?: MessageStripDesign;
  }>({
    show: false
  });

  const createReviewsMutation = useCreateReviewMutation();

  const insertNewReview = async () => {
    let hasFailed = false;

    await createReviewsMutation
      .mutateAsync({
        siglaRU: newReview.ruCode,
        siglaUniversidade: newReview.universityName,
        periodoNota: newReview.mealPeriod,
        notaEstrelas: newReview.rating,
        comentario: newReview.comment,
        tags: newReview.tags,
        duracaoNota: 90
      })
      .catch((error) => {
        hasFailed = true;
        setIsReviewCreated(false);
        setFeedbackMessageStrip({
          show: true,
          message: t('createReview.unexpectedError', { message: error.message }),
          value: MessageStripDesign.Negative
        });
        return;
      })
      .then(() => {
        if (!hasFailed) navigateToHomePage();
      });
  };

  const navigateToHomePage = () => {
    navigate(AppRoute.Home);
  };

  useEffect(() => {
    if (isReviewCreated) {
      setFeedbackMessageStrip({
        show: true,
        message: t('createReview.creatingRedirect'),
        value: MessageStripDesign.Information
      });
      insertNewReview();
    }
  }, [isReviewCreated]);

  useEffect(() => {
    if (validationErrors.length > 0) {
      setShowMessageStrip(true);

      const timeoutId = setTimeout(() => {
        setShowMessageStrip(false);
      }, 5000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [validationErrors]);

  useEffect(() => {
    setSearchQuery('');
    clearNewReview();
  }, []);

  return (
    <FlexBox direction={FlexBoxDirection.Column}>
      <CustomShellBar createReviewDisabled />

      <FlexBox direction={FlexBoxDirection.Row} className={classes.boxesContainer}>
        <FlexBox className={classes.box} direction={FlexBoxDirection.Row}>
          <FlexBox className={classes.boxTextContainer} direction={FlexBoxDirection.Column}>
            <Title level={TitleLevel.H4}>{t('createReview.header')}</Title>
            <Text className={classes.boxSubtitle}>{t('createReview.subtitle')}</Text>
          </FlexBox>
        </FlexBox>
      </FlexBox>

      {validationErrors && showMessageStrip ? (
        <FlexBox direction={FlexBoxDirection.Row} className={classes.messageStripBox}>
          <FlexBox
            id="messageStripContainer"
            className={classes.messageStripContainer}
            direction={FlexBoxDirection.Column}
          >
            <MessageStrip
              design={MessageStripDesign.Negative}
              className={classes.messageStrip}
              onClose={() => setShowMessageStrip(false)}
            >
              {validationErrors[0]}
            </MessageStrip>
          </FlexBox>
        </FlexBox>
      ) : (
        <></>
      )}

      {feedbackMessageStrip.show ? (
        <FlexBox direction={FlexBoxDirection.Row} className={classes.messageStripBox}>
          <FlexBox
            id="feedbackMessageStripContainer"
            className={classes.messageStripContainer}
            direction={FlexBoxDirection.Column}
          >
            <MessageStrip
              design={feedbackMessageStrip.value}
              className={classes.messageStrip}
              onClose={() => setFeedbackMessageStrip({ show: false })}
            >
              {feedbackMessageStrip.message}
            </MessageStrip>
          </FlexBox>
        </FlexBox>
      ) : (
        <></>
      )}

      <ObjectPage className={classes.objectPage}>
        <ObjectPageSection
          id="reviewInfo"
          titleText={t('createReview.section1')}
          className={classes.objectPageSection}
        >
          <FlexBox direction={FlexBoxDirection.Column}>
            <Title level={TitleLevel.H4}>{t('createReview.section1')}</Title>
            <Text className={classes.text}>{t('createReview.needInfo')}</Text>
            <FlexBox direction={FlexBoxDirection.Column}>
              <ReviewInfoForm />
            </FlexBox>
          </FlexBox>
        </ObjectPageSection>
      </ObjectPage>
      <FloatingBar />
    </FlexBox>
  );
};
