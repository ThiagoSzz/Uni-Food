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
    gap: '20.5px',
    width: '1360px',
    height: '146px',
    padding: '2px',
    flexWrap: 'wrap',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    overflowY: 'auto',
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      width: '1014px'
    }
  },
  reviewsContainer: {
    gap: '20.5px',
    width: '1360px',
    height: '750px',
    padding: '2px',
    flexWrap: 'wrap',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    overflowY: 'auto',
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      width: '1014px'
    }
  }
};

export const useStyles = createUseStyles(styles, {
  name: 'Home'
});
