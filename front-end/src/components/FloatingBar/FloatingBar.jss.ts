/* eslint-disable @typescript-eslint/no-unused-vars */
import { createUseStyles } from 'react-jss';

type JSSStyles = { [keys: string]: React.CSSProperties | JSSStyles };

const styles: JSSStyles = {
  cancelButton: {
    height: '30px'
  },
  sendButton: {
    height: '30px',
    marginRight: '10px'
  },
  floatingBar: {
    position: 'fixed',
    bottom: '0',
    marginLeft: '10px',
    marginRight: '10px',
    marginTop: '20px',
    marginBottom: '10px',
    width: 'calc(100vw - 20px)'
  }
};

export const useStyles = createUseStyles(styles, {
  name: 'FloatingBar'
});
