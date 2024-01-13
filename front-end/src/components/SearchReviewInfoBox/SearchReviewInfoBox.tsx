/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useStyles } from './SearchReviewInfoBox.jss';
import '@ui5/webcomponents-icons/dist/AllIcons';
import {
  FlexBox,
  FlexBoxDirection,
  Title,
  Text,
  TitleLevel,
  WrappingType
} from '@ui5/webcomponents-react';

export const SearchReviewInfoBox = () => {
  const classes = useStyles();

  return (
    <FlexBox className={classes.box}>
      <FlexBox className={classes.boxTextContainer} direction={FlexBoxDirection.Column}>
        <Title wrappingType={WrappingType.Normal} level={TitleLevel.H4}>
          Descubra avaliações dos RUs que você frequenta!
        </Title>
        <Text wrapping className={classes.boxSubtitle}>
          Procure por avaliações deixadas por outros usuários e filtre-as com base em diversas
          opções.
        </Text>
      </FlexBox>
    </FlexBox>
  );
};
