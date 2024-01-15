import { useEffect, useState } from 'react';
import { useStyles } from '../FloatingBar/FloatingBar.jss';
import {
  Bar,
  BarDesign,
  Button,
  ButtonDesign,
  FlexBox,
  FlexBoxDirection,
  MessageStrip,
  MessageStripDesign
} from '@ui5/webcomponents-react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../enums/AppRoutesEnum';
import useNewReviewStore from '../../store/NewReviewStore';

export const FloatingBar = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [createNewReview, validateFields, validationErrors, clearValidationErrors] =
    useNewReviewStore((value) => [
      value.createNewReview,
      value.validateFields,
      value.validationErrors,
      value.clearValidationErrors
    ]);

  const [showMessageStrip, setShowMessageStrip] = useState<boolean[]>([]);

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
    clearValidationErrors();
    navigateToHomePage();
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
    </FlexBox>
  );
};
