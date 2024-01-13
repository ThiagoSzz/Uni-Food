/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useStyles } from '../FloatingBar/FloatingBar.jss';
import { Bar, BarDesign, Button, ButtonDesign } from '@ui5/webcomponents-react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../enums/AppRoutesEnum';

export const FloatingBar = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const navigateToHomePage = () => {
    navigate(AppRoute.Home);
  };

  const onSendButtonClick = () => {
    navigateToHomePage();
  };

  const onCancelButtonClick = () => {
    navigateToHomePage();
  };

  return (
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
  );
};
