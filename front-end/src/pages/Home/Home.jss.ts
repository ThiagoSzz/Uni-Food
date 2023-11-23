/* eslint-disable @typescript-eslint/no-unused-vars */
import { createUseStyles } from 'react-jss';

const colors = {
  colorBackground: '#f0f0f7',
  colorPrimaryLighter: '#9871f5',
  colorPrimaryLight: '#916bea',
  colorPrimary: '#8257e5',
  colorPrimaryDark: '#774dd6',
  colorPrimaryDarker: '#6842c2',
  colorSecundary: '#04d361',
  colorSecundaryDark: '#04bf58',
  colorTitleInPrimary: '#ffffff',
  colorTextInPrimary: '#d4c2ff',
  colorTextTitle: '#32264d',
  colorTextComplement: '#9c98a6',
  colorTextBase: '#6a6180',
  colorLineInWhite: '#e6e6f0',
  colorInputBackground: '#f8f8fc',
  colorButtonText: '#ffffff',
  colorBoxBase: '#ffffff',
  colorBoxFooter: '#fafafc'
};

const styles = {
  navbar: {},
  firstSection: {
    height: '100vh',
    width: '100%',
    allignItems: 'center',
    justifyContent: 'center',
    gap: '80px',
    position: 'relative',
    top: '50%',
    transform: 'translateY(20%)'
  },
  mainContainer: {
    width: '50%'
  },
  secondaryContainer: {
    width: '30%'
  },
  carousel: {
    width: 'auto',
    height: '350px'
  },
  carouselCards: {
    width: '70%',
    height: 'auto'
  },
  mainText: {
    fontSize: '54px',
    fontWeight: '700',
    letterSpacing: '-3px'
  },
  secondaryText: {
    fontSize: '22px',
    fontWeight: '600',
    letterSpacing: '-1px',
    marginTop: '20px',
    width: '70%'
  },
  buttonsFlexBox: {
    marginTop: '20px',
    gap: '20px'
  },
  newReviewButton: {
    width: '150px'
  },
  searchReviewsButton: {
    width: '200px'
  },
  secondSection: {
    height: '100vh',
    width: '100%'
  },
  thirdSection: {
    height: '100vh',
    width: '100%'
  },
  footer: {
    background: colors.colorBoxBase,
    height: '20vh',
    width: '100%'
  },
  footerText: {
    fontSize: '15px',
    letterSpacing: '-1px',
    allignItems: 'center',
    justifyContent: 'center',
    width: '50%'
  }
};

export const useStyles = createUseStyles(styles, {
  name: 'Home'
});
