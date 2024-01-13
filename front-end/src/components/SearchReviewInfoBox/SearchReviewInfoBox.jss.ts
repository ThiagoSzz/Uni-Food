/* eslint-disable @typescript-eslint/no-unused-vars */
import { createUseStyles } from 'react-jss';

type JSSStyles = { [keys: string]: React.CSSProperties | JSSStyles };

const styles: JSSStyles = {
  box: {
    padding: '25px',
    backgroundColor: 'white',
    width: '667px',
    gap: '30px',
    height: 'fit-content',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    boxShadow: 'rgba(85, 107, 130, 0.25) 0.5px 0.5px 4px',
    borderRadius: '8px',
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      width: '495px'
    }
  },
  boxTextContainer: {
    height: '45px',
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      height: '80px'
    }
  },
  boxSubtitle: {
    marginTop: 'auto'
  }
};

export const useStyles = createUseStyles(styles, {
  name: 'SearchReviewInfoBox'
});
