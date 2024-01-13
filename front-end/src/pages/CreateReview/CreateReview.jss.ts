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
    borderRadius: '8px'
  },
  formBox: {
    padding: '25px',
    backgroundColor: 'white',
    width: '1354px',
    gap: '30px',
    height: 'fit-content',
    position: 'relative',
    boxShadow: 'rgba(85, 107, 130, 0.25) 0.5px 0.5px 4px',
    borderRadius: '8px'
  },
  boxTextContainer: {
    height: '45px'
  },
  boxSubtitle: {
    fontSize: '16px',
    marginTop: 'auto'
  },
  text: {
    paddingLeft: '22px',
    marginTop: '20px',
    marginBottom: '20px'
  }
};

export const useStyles = createUseStyles(styles, {
  name: 'CreateReview'
});
