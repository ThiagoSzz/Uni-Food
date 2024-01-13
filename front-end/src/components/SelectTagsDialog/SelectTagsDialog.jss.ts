/* eslint-disable @typescript-eslint/no-unused-vars */
import { createUseStyles } from 'react-jss';

type JSSStyles = { [keys: string]: React.CSSProperties | JSSStyles };

const styles: JSSStyles = {
  selectDialogContainer: {
    width: '100%',
    gap: '5px',
    padding: '5px'
  },
  badgesList: {
    gap: '5px',
    width: '50%',
    height: '200px',
    overflow: 'auto',
    marginBottom: '2px'
  },
  badge: {
    padding: '5px',
    height: '33px',
    width: '275px',
    cursor: 'pointer'
  },
  selectedBadge: {
    height: '27px',
    border: '2px solid'
  },
  tagListContainer: {
    border: '1px solid #CAD2D8',
    borderBottom: '1px solid black',
    borderRadius: '3px',
    padding: '4px',
    width: '800px',
    '&:hover': {
      borderLeftColor: '#B0D4FC',
      borderRightColor: '#B0D4FC',
      borderTopColor: '#B0D4FC',
      borderBottomColor: '#3084EC'
    }
  },
  messageStrip: {
    padding: '5px',
    marginTop: '5px'
  },
  tagsListButton: {
    height: '30px',
    marginLeft: '8px'
  },
  selectedBadgesList: {
    marginLeft: '8px',
    gap: '5px',
    alignItems: 'center',
    width: '588px',
    overflowX: 'auto'
  },
  scrollContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    gap: '5px'
  },
  selectedBadgeItem: {
    height: '30px',
    padding: '8px',
    width: 'fit-content'
  }
};

export const useStyles = createUseStyles(styles, {
  name: 'SelectTagsDialog'
});
