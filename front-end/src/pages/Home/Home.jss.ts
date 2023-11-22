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
  floating: {
    position: 'fixed',
    height: '100%',
    width: '100%'
  },
  sidebar: {
    height: '100%'
  },
  navbar: {
    height: 'min-content'
  },
  firstSection: {
    paddingLeft: '285px',
    height: '100vh',
    width: '100%',
    allignItems: 'center',
    justifyContent: 'center'
  },
  mainContainer: {
    width: '70%'
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
    width: '60%'
  },
  secondSection: {
    paddingLeft: '285px',
    height: '100vh',
    width: '100%'
  },
  thirdSection: {
    paddingLeft: '285px',
    height: '100vh',
    width: '100%'
  },
  footer: {
    background: colors.colorBoxBase,
    paddingLeft: '285px',
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
