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
  ButtonDesign,
  MessageStrip,
  MessageStripDesign
} from '@ui5/webcomponents-react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';
import { useMessageStrip } from '../../hooks/useMessageStrip';

export const CreateReviewInfoBox = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { isAuthenticated } = useAuth();
  const { message, showInfoMessage, hideMessage } = useMessageStrip(5000);

  const navigateToCreateReviewPage = () => {
    if (!isAuthenticated) {
      showInfoMessage(t('auth.loginRequired'));
      return;
    }
    navigate(AppRoute.CreateReview);
  };

  return (
    <>
      {message && (
        <MessageStrip
          design={MessageStripDesign.Information}
          onClose={hideMessage}
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            zIndex: 1000,
            margin: '0'
          }}
        >
          {message.text}
        </MessageStrip>
      )}
      <FlexBox className={classes.box} direction={FlexBoxDirection.Row}>
        <FlexBox className={classes.boxTextContainer} direction={FlexBoxDirection.Column}>
          <Title level={TitleLevel.H4}>{t('reviews.writeYourReview')}</Title>
          <Text className={classes.boxSubtitle}>{t('reviews.writeYourReviewDesc')}</Text>
        </FlexBox>
        <FlexBox className={classes.boxButtonContainer}>
          <Button
            className={classes.boxButton}
            design={ButtonDesign.Emphasized}
            icon="navigation-right-arrow"
            iconEnd
            onClick={() => navigateToCreateReviewPage()}
          >
            {t('review.form.submit')}
          </Button>
        </FlexBox>
      </FlexBox>
    </>
  );
};
