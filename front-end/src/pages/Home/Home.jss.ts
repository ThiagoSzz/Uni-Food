/* eslint-disable @typescript-eslint/no-unused-vars */
import { createUseStyles } from 'react-jss';

type JSSStyles = { [keys: string]: React.CSSProperties | JSSStyles };

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
  colorBoxFooter: '#fafafc',
  colorWhite: '#ffffff',
  colorBlack: '#000000'
};

const styles: JSSStyles = {
  firstSection: {
    height: 'calc(100vh - 52px)',
    width: '100%',
    gap: '80px',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainContainer: {
    width: '50%',
    height: 'min-content'
  },
  secondaryContainer: {
    width: '30%',
    justifyContent: 'center',
    height: 'min-content'
  },
  firstSectionMainText: {
    fontSize: '54px',
    fontWeight: '700',
    letterSpacing: '-3px'
  },
  firstSectionSecondaryText: {
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
    width: '180px'
  },
  secondSection: {
    padding: '100px',
    height: '100vh',
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.colorBoxBase
  },
  secondSectionMainText: {
    fontSize: '54px',
    fontWeight: '700',
    letterSpacing: '-3px'
  },
  secondSectionSecondaryText: {
    fontSize: '22px',
    fontWeight: '600',
    letterSpacing: '-1px',
    marginTop: '20px'
  },
  reviewCard: {
    width: '80%',
    height: 'min-content'
  },
  reviewCardComments: {
    marginTop: '10px',
    maxHeight: '100px',
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
    whiteSpace: 'pre-wrap',
    overflowY: 'scroll'
  },
  badgesList: {
    marginTop: '10px',
    flexWrap: 'wrap',
    gap: '8px',
    maxHeight: '100px',
    overflow: 'auto',
    marginBottom: '20px'
  },
  badge: {
    padding: '5px'
  },
  thirdSection: {
    padding: '100px',
    height: '100vh',
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.colorBackground
  },
  thirdSectionMainText: {
    marginTop: '20px',
    fontSize: '54px',
    fontWeight: '700',
    letterSpacing: '-3px'
  },
  thirdSectionSecondaryText: {
    fontSize: '22px',
    fontWeight: '600',
    letterSpacing: '-1px',
    marginTop: '20px'
  },
  fourthSection: {
    padding: '100px',
    height: 'auto',
    width: '100%',
    backgroundColor: colors.colorBoxBase
  },
  fourthSectionMainContainer: {
    alignItems: 'center',
    gap: '20px'
  },
  fourthSectionMainText: {
    fontSize: '54px',
    fontWeight: '700',
    letterSpacing: '-3px'
  },
  fourthSectionSecondaryText: {
    fontSize: '22px',
    fontWeight: '600',
    letterSpacing: '-1px'
  },
  questionText: {
    fontSize: '20px',
    fontWeight: '700',
    letterSpacing: '-1px'
  },
  answerText: {
    marginTop: '10px',
    fontSize: '18px',
    fontWeight: '500',
    letterSpacing: '-0.5px'
  },
  footer: {
    backgroundColor: colors.colorBlack,
    height: '30vh',
    width: '100%',
    alignItems: 'center',
    gap: '100px'
  },
  footerText: {
    color: colors.colorWhite,
    fontSize: '18px',
    fontWeight: '500',
    letterSpacing: '-0.5px',
    width: '40%',
    marginLeft: '50px'
  },
  footerContactHeader: {
    color: colors.colorWhite,
    fontSize: '18px',
    fontWeight: '600',
    letterSpacing: '-0.5px'
  },
  footerContact: {
    color: colors.colorWhite,
    fontSize: '18px',
    fontWeight: '500',
    letterSpacing: '-0.5px',
    marginTop: '10px'
  }
};

export const useStyles = createUseStyles(styles, {
  name: 'Home'
});
