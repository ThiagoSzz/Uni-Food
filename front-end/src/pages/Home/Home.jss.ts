/* eslint-disable @typescript-eslint/no-unused-vars */
import { createUseStyles } from 'react-jss';

type JSSStyles = { [keys: string]: React.CSSProperties | JSSStyles };

const styles: JSSStyles = {
  messageStripContainer: {
    marginTop: '5px',
    justifyContent: 'center',
    width: '100%'
  },
  messageStrip: {
    width: '1354px',
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      width: '1010px'
    }
  },
  boxesContainer: {
    gap: '20px',
    justifyContent: 'center',
    marginTop: '15px',
    marginBottom: '5px'
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '15px'
  },
  centeredContainer: {
    width: '1354px',
    gap: '10px',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    overflowY: 'auto',
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      width: '1010px'
    }
  },
  sectionText: {
    alignSelf: 'center',
    marginBottom: '12px'
  },
  busyIndicator: {
    position: 'absolute',
    alignSelf: 'center',
    left: '50%'
  },
  averageReviewsContainer: {
    gap: '17px',
    width: '1360px',
    height: '146px',
    padding: '2px',
    flexWrap: 'wrap',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    overflowY: 'auto',
    scrollbarGutter: 'stable',
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      width: '1014px',
      gap: '14px'
    },
    '&::-webkit-scrollbar': {
      width: '12px',
      backgroundColor: 'transparent'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#888888b2',
      borderRadius: '10px',
      transition: 'background-color 0.3s'
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '#888'
    },
    '&::-moz-scrollbar': {
      width: '12px',
      backgroundColor: 'transparent'
    },
    '&::-moz-scrollbar-thumb': {
      backgroundColor: '#888888b2',
      borderRadius: '10px',
      transition: 'background-color 0.3s'
    },
    '&::-moz-scrollbar-thumb:hover': {
      backgroundColor: '#888'
    },
    '&::-ms-scrollbar': {
      width: '12px',
      backgroundColor: 'transparent'
    },
    '&::-ms-scrollbar-thumb': {
      backgroundColor: '#888888b2',
      borderRadius: '10px',
      transition: 'background-color 0.3s'
    },
    '&::-ms-scrollbar-thumb:hover': {
      backgroundColor: '#888'
    }
  },
  reviewsContainer: {
    gap: '17px',
    width: '1360px',
    height: '750px',
    padding: '2px',
    flexWrap: 'wrap',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    overflowY: 'auto',
    scrollbarGutter: 'stable',
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      width: '1014px',
      gap: '14px'
    },
    '&::-webkit-scrollbar': {
      width: '12px',
      backgroundColor: 'transparent'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#888888b2',
      borderRadius: '10px',
      transition: 'background-color 0.3s'
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '#888'
    },
    '&::-moz-scrollbar': {
      width: '12px',
      backgroundColor: 'transparent'
    },
    '&::-moz-scrollbar-thumb': {
      backgroundColor: '#888888b2',
      borderRadius: '10px',
      transition: 'background-color 0.3s'
    },
    '&::-moz-scrollbar-thumb:hover': {
      backgroundColor: '#888'
    },
    '&::-ms-scrollbar': {
      width: '12px',
      backgroundColor: 'transparent'
    },
    '&::-ms-scrollbar-thumb': {
      backgroundColor: '#888888b2',
      borderRadius: '10px',
      transition: 'background-color 0.3s'
    },
    '&::-ms-scrollbar-thumb:hover': {
      backgroundColor: '#888'
    }
  },
  reviewsIllustratedMessage: {
    width: 'auto',
    height: '230px',
    alignSelf: 'auto',
    marginInline: 'auto',
    marginTop: '100px'
  }
};

export const useStyles = createUseStyles(styles, {
  name: 'Home'
});
