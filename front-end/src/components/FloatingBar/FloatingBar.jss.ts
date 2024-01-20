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
  },
  messageStripContainer: {
    position: 'fixed',
    top: '0',
    marginTop: '60px',
    overflowX: 'hidden',
    overflowY: 'auto',
    margin: '10px',
    width: 'calc(100vw - 20px)',
    alignItems: 'center'
  },
  messageStrip: {
    margin: '2px',
    height: '33px',
    width: '100%'
  },
  footer: {
    gap: '10px',
    margin: '7px',
    width: '100%',
    height: '30px',
    justifyContent: 'flex-end'
  },
  button: {
    height: '30px'
  },
  text: {
    fontSize: '15px'
  }
};

export const useStyles = createUseStyles(styles, {
  name: 'FloatingBar'
});
