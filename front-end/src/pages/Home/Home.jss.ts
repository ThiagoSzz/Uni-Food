/* eslint-disable @typescript-eslint/no-unused-vars */
import { createUseStyles } from 'react-jss';

type JSSStyles = { [keys: string]: React.CSSProperties | JSSStyles };

const styles: JSSStyles = {
  boxesContainer: {
    gap: '20px',
    justifyContent: 'center',
    marginTop: '20px'
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px'
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
    marginRight: '10px',
    marginBottom: '20px'
  },
  busyIndicator: {
    position: 'absolute',
    alignSelf: 'center',
    left: '50%'
  },
  averageReviewsContainer: {
    gap: '20.5px',
    width: '1360px',
    height: '150px',
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
    height: '730px',
    padding: '2px',
    flexWrap: 'wrap',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    overflowY: 'auto',
    marginBottom: '40px',
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      width: '1014px'
    }
  }
};

export const useStyles = createUseStyles(styles, {
  name: 'Home'
});
