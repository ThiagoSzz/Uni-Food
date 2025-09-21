import { FlexBox, Title, TitleLevel } from '@ui5/webcomponents-react';
import { useStyles } from './ShellBar.jss';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../enums/AppRoutesEnum';
import { ShellBarProps } from '../../interfaces/props/ShellBarProps';
import { useTranslation } from 'react-i18next';

export const ShellBar = (props: ShellBarProps) => {
  const { image, text, children } = props;
  const classes = useStyles();
  const { t } = useTranslation();

  const navigate = useNavigate();

  const navigateToHomePage = () => {
    navigate(AppRoute.Home);
  };

  return (
    <FlexBox className={classes.shellbar}>
      <FlexBox className={classes.logoContainer}>
        <img
          src={image}
          alt="Logo"
          className={classes.logoImage}
          onClick={() => navigateToHomePage()}
        />
        <Title level={TitleLevel.H5}>{text || t('nav.home')}</Title>
      </FlexBox>
      <FlexBox className={classes.itemsContainer}>{children}</FlexBox>
    </FlexBox>
  );
};
