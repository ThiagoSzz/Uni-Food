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
  ObjectPageMode,
  MessageStrip,
  MessageStripDesign
} from '@ui5/webcomponents-react';

import { useStyles } from './CreateReview.jss';
import '@ui5/webcomponents-icons/dist/AllIcons';
import { CustomShellBar } from '../../components/ShellBar/CustomShellBar/CustomShellBar';
import { ReviewInfoForm } from '../../components/ReviewInfoForm/ReviewInfoForm';
import { OptionalInfoForm } from '../../components/OptionalInfoForm/OptionalInfoForm';
import { SelectTagsDialog } from '../../components/SelectTagsDialog/SelectTagsDialog';
import { FloatingBar } from '../../components/FloatingBar/FloatingBar';
import useNewReviewStore from '../../stores/useNewReviewStore';
import { Tag } from '../../interfaces/Tags';
import useReviewsStore from '../../stores/useReviewsStore';

export const CreateReview: React.FC = () => {
  const classes = useStyles();

  const setSearchQuery = useReviewsStore((value) => value.setSearchQuery);
  const [clearNewReview, validationErrors] = useNewReviewStore((value) => [
    value.clearNewReview,
    value.validationErrors
  ]);

  const [isSelectTagsDialogOpen, setIsSelectTagsDialogOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [showMessageStrip, setShowMessageStrip] = useState<boolean>(false);

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
            <Title level={TitleLevel.H4}>
              Compartilhe seu feedback de uma refeição feita em um RU!
            </Title>
            <Text className={classes.boxSubtitle}>
              Suas avaliações irão ajudar outros universitários a decidir qual é o melhor RU para
              frequentar.
            </Text>
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

      <ObjectPage className={classes.objectPage} mode={ObjectPageMode.IconTabBar}>
        <ObjectPageSection
          id="reviewInfo"
          titleText="Informações da Avaliação"
          className={classes.objectPageSection}
        >
          <FlexBox direction={FlexBoxDirection.Column}>
            <Title level={TitleLevel.H4}>1. Informações da Avaliação</Title>
            <Text className={classes.text}>
              Precisamos de algumas informações para poder identificar o RU da sua avaliação.
            </Text>
            <FlexBox direction={FlexBoxDirection.Column}>
              <ReviewInfoForm
                setIsSelectTagsDialogOpen={setIsSelectTagsDialogOpen}
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
              />
            </FlexBox>
          </FlexBox>
        </ObjectPageSection>

        <ObjectPageSection
          id="optionalInfo"
          titleText="Informações Opcionais"
          className={classes.objectPageSection}
        >
          <FlexBox direction={FlexBoxDirection.Column}>
            <Title level={TitleLevel.H4}>2. Informações Opcionais</Title>
            <Text className={classes.text}>Queremos saber um pouco mais sobre seu perfil.</Text>
            <FlexBox direction={FlexBoxDirection.Column}>
              <OptionalInfoForm />
            </FlexBox>
          </FlexBox>
        </ObjectPageSection>
      </ObjectPage>

      <SelectTagsDialog
        isSelectTagsDialogOpen={isSelectTagsDialogOpen}
        setIsSelectTagsDialogOpen={setIsSelectTagsDialogOpen}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />
      <FloatingBar />
    </FlexBox>
  );
};
