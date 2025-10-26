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
import { useTranslation } from 'react-i18next';

export const SearchReviewInfoBox = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <FlexBox className={classes.box}>
      <FlexBox className={classes.boxTextContainer} direction={FlexBoxDirection.Column}>
        <Title wrappingType={WrappingType.Normal} level={TitleLevel.H4}>
          {t('reviews.searchReviews')}
        </Title>
        <Text wrapping className={classes.boxSubtitle}>
          {t('reviews.searchReviewsDesc')}
        </Text>
      </FlexBox>
    </FlexBox>
  );
};
