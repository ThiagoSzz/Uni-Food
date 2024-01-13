/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useStyles } from './CreateReviewInfoBox.jss';
import '@ui5/webcomponents-icons/dist/AllIcons';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../enums/AppRoutesEnum';
import {
  FlexBox,
  FlexBoxDirection,
  Title,
  Text,
  TitleLevel,
  Button,
  ButtonDesign
} from '@ui5/webcomponents-react';

export const CreateReviewInfoBox = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const navigateToCreateReviewPage = () => {
    navigate(AppRoute.CreateReview);
  };

  return (
    <FlexBox className={classes.box} direction={FlexBoxDirection.Row}>
      <FlexBox className={classes.boxTextContainer} direction={FlexBoxDirection.Column}>
        <Title level={TitleLevel.H4}>Avalie sua experiência em um RU!</Title>
        <Text className={classes.boxSubtitle}>
          Ajude outros universitários a escolher o melhor RU para frequentar.
        </Text>
      </FlexBox>
      <FlexBox className={classes.boxButtonContainer}>
        <Button
          className={classes.boxButton}
          design={ButtonDesign.Emphasized}
          icon="navigation-right-arrow"
          iconEnd
          onClick={() => navigateToCreateReviewPage()}
        >
          Criar avaliação
        </Button>
      </FlexBox>
    </FlexBox>
  );
};
