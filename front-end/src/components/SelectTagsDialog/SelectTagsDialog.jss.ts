/* eslint-disable @typescript-eslint/no-unused-vars */
import { createUseStyles } from 'react-jss';

type JSSStyles = { [keys: string]: React.CSSProperties | JSSStyles };

const styles: JSSStyles = {
  selectDialogContainer: {
    width: '100%',
    height: '290px',
    gap: '5px',
    padding: '5px',
  },
  badgesList: {
    gap: '5px',
    width: '33%',
    height: 'fit-content',
    overflow: 'auto'
  },
  badge: {
    padding: '5px',
    height: '33px',
    width: '275px',
    cursor: 'pointer'
  },
  selectedBadge: {
    height: '33px',
    border: '2px solid',
    boxSizing: 'border-box'
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
  },
  noTagsFilteredContainer: {
    textAlign: 'center',
    width: '275px',
    justifyContent: 'center'
  },
  noTagsFilteredText: {
    fontSize: '15px',
    width: '200px'
  }
};

export const useStyles = createUseStyles(styles, {
  name: 'SelectTagsDialog'
});
