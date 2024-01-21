import { useState } from 'react';
import { useStyles } from '../FloatingBar/FloatingBar.jss';
import { Button, ButtonDesign, Dialog, FlexBox, Text } from '@ui5/webcomponents-react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../enums/AppRoutesEnum';
import useNewReviewStore from '../../stores/useNewReviewStore';

export const FloatingBar = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [createNewReview, validateFields, clearValidationErrors, hasFilledFields] =
    useNewReviewStore((value) => [
      value.createNewReview,
      value.validateFields,
      value.clearValidationErrors,
      value.hasFilledFields
    ]);

  const [confirmActionDialogOpen, setConfirmActionDialogOpen] = useState<boolean>(false);

  const navigateToHomePage = () => {
    navigate(AppRoute.Home);
  };

  const onSendButtonClick = () => {
    if (validateFields()) {
      createNewReview();
      navigateToHomePage();
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
          Enviar
        </Button>
        <Button
          design={ButtonDesign.Transparent}
          className={classes.cancelButton}
          onClick={onCancelButtonClick}
        >
          Cancelar
        </Button>
      </FlexBox>
      <Dialog
        headerText="Confirmar ação"
        open={confirmActionDialogOpen}
        footer={
          <FlexBox className={classes.footer}>
            <Button
              design={ButtonDesign.Emphasized}
              onClick={() => navigateToHomePage()}
              className={classes.button}
            >
              Continuar
            </Button>
            <Button
              design={ButtonDesign.Transparent}
              onClick={() => setConfirmActionDialogOpen(false)}
              className={classes.button}
            >
              Cancelar
            </Button>
          </FlexBox>
        }
      >
        <Text className={classes.text}>
          Caso prossiga, os campos preenchidos serão desconsiderados. Deseja continuar?
        </Text>
      </Dialog>
    </FlexBox>
  );
};
