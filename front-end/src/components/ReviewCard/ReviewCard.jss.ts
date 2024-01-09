/* eslint-disable @typescript-eslint/no-unused-vars */
import { createUseStyles } from 'react-jss';

type JSSStyles = { [keys: string]: React.CSSProperties | JSSStyles };

const styles: JSSStyles = {
  reviewCard: {
    width: '323px',
    marginTop: '2px',
    marginBottom: '4px'
  },
  reviewCardComments: {
    fontSize: '15px',
    marginTop: '10px',
    maxHeight: '100px',
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
    whiteSpace: 'pre-wrap',
    overflowY: 'scroll'
  },
  badgesList: {
    marginTop: '10px',
    flexWrap: 'wrap',
    gap: '5px',
    height: '55px',
    overflow: 'auto',
    marginBottom: '20px'
  },
  badge: {
    padding: '5px'
  }
};

export const useStyles = createUseStyles(styles, {
  name: 'ReviewCard'
});
