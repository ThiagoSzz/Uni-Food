/* eslint-disable @typescript-eslint/no-unused-vars */
import { createUseStyles } from 'react-jss';

type JSSStyles = { [keys: string]: React.CSSProperties | JSSStyles };

const styles: JSSStyles = {
  shellbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '50px',
    paddingRight: '50px',
    backgroundColor: 'white',
    color: 'black',
    height: '52px',
    boxShadow: 'rgba(85, 107, 130, 0.25) 0.5px 0.5px 4px'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  logoImage: {
    width: '30px',
    marginRight: '10px'
  },
  logoText: {
    fontSize: '16px',
    fontWeight: 'bold'
  },
  itemsContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0px',
    '& > *': {
      transform: 'scale(0.85)',
      transformOrigin: 'center',
      display: 'inline-block'
    }
  }
};

export const useStyles = createUseStyles(styles, {
  name: 'ShellBar'
});
