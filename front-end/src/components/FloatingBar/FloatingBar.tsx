import { useEffect, useState } from 'react';
import { useStyles } from '../FloatingBar/FloatingBar.jss';
import {
  Bar,
  BarDesign,
  Button,
  ButtonDesign,
  Dialog,
  FlexBox,
  FlexBoxDirection,
  MessageStrip,
  MessageStripDesign,
  Text
} from '@ui5/webcomponents-react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../enums/AppRoutesEnum';
import useNewReviewStore from '../../stores/useNewReviewStore';

export const FloatingBar = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [
    createNewReview,
    validateFields,
    validationErrors,
    clearValidationErrors,
    hasFilledFields
  ] = useNewReviewStore((value) => [
    value.createNewReview,
    value.validateFields,
    value.validationErrors,
    value.clearValidationErrors,
    value.hasFilledFields
  ]);

  const [showMessageStrip, setShowMessageStrip] = useState<boolean[]>([]);
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

  const onCloseMessageStrip = (index) => {
    setShowMessageStrip((prev) => prev.map((value, i) => (i === index ? false : value)));
  };

  useEffect(() => {
    if (validationErrors) {
      setShowMessageStrip(validationErrors.map(() => true));

      const timeoutIds = validationErrors.map((_, index) => {
        return setTimeout(
          () => {
            onCloseMessageStrip(index);
          },
          4000 + index * 1000
        );
      });

      return () => {
        timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
      };
    }
  }, [validationErrors]);

  return (
    <FlexBox>
      <Bar
        design={BarDesign.FloatingFooter}
        endContent={
          <>
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
          </>
        }
        className={classes.floatingBar}
      />
      <FlexBox
        id="messageStripContainer"
        className={classes.messageStripContainer}
        direction={FlexBoxDirection.Column}
      >
        {validationErrors &&
          validationErrors.map((error, index) =>
            showMessageStrip[index] ? (
              <MessageStrip
                key={index}
                design={MessageStripDesign.Negative}
                className={classes.messageStrip}
                onClose={() => onCloseMessageStrip(index)}
              >
                {error}
              </MessageStrip>
            ) : (
              <></>
            )
          )}
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
