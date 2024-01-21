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
  floatingContainer: {
    justifyContent: 'center'
  },
  floatingBar: {
    position: 'fixed',
    bottom: '0',
    marginLeft: '10px',
    marginRight: '10px',
    marginTop: '20px',
    marginBottom: '10px',
    width: '1200px',
    border: '1px solid transparent',
    borderRadius: '8px',
    boxShadow: 'rgba(85, 107, 130, 0.25) 0.5px 0.5px 4px',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    padding: '6px'
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
