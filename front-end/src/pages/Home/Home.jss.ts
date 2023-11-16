import { createUseStyles } from 'react-jss';

const styles = {
  contentContainer: {
    width: '100vw',
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center'
  }
};

export const useStyles = createUseStyles(styles, {
  name: 'Home'
});
