import { useState } from 'react';
import { useStyles } from '../FloatingBar/FloatingBar.jss';
import { Button, ButtonDesign, Dialog, FlexBox, Text } from '@ui5/webcomponents-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../enums/AppRoutesEnum';
import useNewReviewStore from '../../stores/useNewReviewStore';

export const FloatingBar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [
    createNewReview,
    validateFields,
    clearValidationErrors,
    hasFilledFields,
    setIsReviewCreated
  ] = useNewReviewStore((value) => [
    value.createNewReview,
    value.validateFields,
    value.clearValidationErrors,
    value.hasFilledFields,
    value.setIsReviewCreated
  ]);

  const [confirmActionDialogOpen, setConfirmActionDialogOpen] = useState<boolean>(false);

  const navigateToHomePage = () => {
    navigate(AppRoute.Home);
  };

  const onSendButtonClick = () => {
    if (validateFields()) {
      createNewReview();
      setIsReviewCreated(true);
    }
  };

  const onCancelButtonClick = () => {
    const isFilled = hasFilledFields();
    clearValidationErrors();

    if (isFilled) setConfirmActionDialogOpen(true);
    else navigateToHomePage();
  };

  return (
    <FlexBox className={classes.floatingContainer}>
      <FlexBox className={classes.floatingBar}>
        <Button
          design={ButtonDesign.Emphasized}
          className={classes.sendButton}
          onClick={onSendButtonClick}
        >
          {t('floating.send')}
        </Button>
        <Button
          design={ButtonDesign.Transparent}
          className={classes.cancelButton}
          onClick={onCancelButtonClick}
        >
          {t('btn.cancel')}
        </Button>
      </FlexBox>
      <Dialog
        headerText={t('floating.confirmHeader')}
        open={confirmActionDialogOpen}
        footer={
          <FlexBox className={classes.footer}>
            <Button
              design={ButtonDesign.Emphasized}
              onClick={() => navigateToHomePage()}
              className={classes.button}
            >
              {t('floating.continue')}
            </Button>
            <Button
              design={ButtonDesign.Transparent}
              onClick={() => setConfirmActionDialogOpen(false)}
              className={classes.button}
            >
              {t('btn.cancel')}
            </Button>
          </FlexBox>
        }
      >
        <Text className={classes.text}>
          {t(
            'floating.confirmText'
          )}
        </Text>
      </Dialog>
    </FlexBox>
  );
};
