/* eslint-disable @typescript-eslint/no-unused-vars */
import { createUseStyles } from 'react-jss';

type JSSStyles = { [keys: string]: React.CSSProperties | JSSStyles };

const styles: JSSStyles = {
  boxesContainer: {
    gap: '20px',
    justifyContent: 'center',
    marginTop: '20px'
  },
  box: {
    padding: '25px',
    backgroundColor: 'white',
    width: '1354px',
    gap: '30px',
    height: 'fit-content',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    boxShadow: 'rgba(85, 107, 130, 0.25) 0.5px 0.5px 4px',
    borderRadius: '8px',
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      width: '495px'
    }
  },
  formBox: {
    padding: '25px',
    backgroundColor: 'white',
    width: '1354px',
    gap: '30px',
    height: 'fit-content',
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
  boxButtonContainer: {
    width: '25%',
    height: '45px',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      height: '80px'
    }
  },
  boxSubtitle: {
    fontSize: '16px',
    marginTop: 'auto'
  },
  boxButton: {
    height: '25px',
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      width: '100%'
    }
  },
  searchBox: {
    backgroundColor: 'white',
    width: '1354px',
    height: '50px',
    boxShadow: 'rgba(85, 107, 130, 0.25) 0.5px 0.5px 4px',
    borderRadius: '8px',
    alignItems: 'center',
    gap: '30px',
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      width: '1010px'
    }
  },
  searchBar: {
    width: '650px',
    marginLeft: '25px',
    borderRadius: '8px'
  },
  searchBarIcon: {
    alignItems: 'center',
    alignSelf: 'center',
    fill: '#0064D9'
  },
  switchContainer: {
    alignItems: 'center'
  },
  switchLabelText: {
    color: '#0064D9',
    fontSize: '14px',
    fontWeight: 'bold',
    marginRight: '10px'
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
    height: '800px',
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
  name: 'CreateReview'
});
