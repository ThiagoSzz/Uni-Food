/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { FlexBox, FlexBoxDirection, Title, Text, TitleLevel } from '@ui5/webcomponents-react';

import { useStyles } from './CreateReview.jss';
import '@ui5/webcomponents-icons/dist/AllIcons';
import { CustomShellBar } from '../../components/ShellBar/CustomShellBar/CustomShellBar';
import { Tag } from '../../interfaces/props/ReviewInfoFormProps';
import { ReviewInfoForm } from '../../components/ReviewInfoForm/ReviewInfoForm';
import { OptionalInfoForm } from '../../components/OptionalInfoForm/OptionalInfoForm';
import { SelectTagsDialog } from '../../components/SelectTagsDialog/SelectTagsDialog';
import { FloatingBar } from '../../components/FloatingBar/FloatingBar';

export const CreateReview: React.FC = () => {
  const classes = useStyles();

  const [isSelectTagsDialogOpen, setIsSelectTagsDialogOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState<Array<Tag>>([]);

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

      <FlexBox
        direction={FlexBoxDirection.Row}
        className={classes.boxesContainer}
        style={{
          marginBottom: '80px'
        }}
      >
        <FlexBox className={classes.formBox} direction={FlexBoxDirection.Column}>
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

          <FlexBox direction={FlexBoxDirection.Column}>
            <Title level={TitleLevel.H4}>2. Informações Opcionais</Title>
            <Text className={classes.text}>Queremos saber um pouco mais sobre seu perfil.</Text>
            <FlexBox direction={FlexBoxDirection.Column}>
              <OptionalInfoForm />
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
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
