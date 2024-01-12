/* eslint-disable @typescript-eslint/no-unused-vars */
import { createUseStyles } from 'react-jss';

type JSSStyles = { [keys: string]: React.CSSProperties | JSSStyles };

const styles: JSSStyles = {
  popover: {
    width: '300px'
  },
  listItem: {
    width: '100%',
    marginBottom: '5px',
    border: 'solid 1px',
    borderRadius: '8px',
    borderColor: '#CAD2D8'
  },
  lineFlexBox: {
    alignItems: 'center'
  },
  input: {
    width: '215px',
    height: '44px',
    marginBottom: '5px'
  },
  dietaryPreferenceSelect: {
    width: '215px',
    height: '44px',
    marginBottom: '5px'
  },
  mealPeriodSelect: {
    width: '215px',
    height: '44px',
    marginBottom: '5px'
  },
  footer: {
    gap: '10px',
    margin: '7px',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  button: {
    height: '30px'
  },
  closeButton: {
    height: '30px',
    marginBottom: '5px',
    marginLeft: '10px'
  },
  searchBarIcon: {
    alignItems: 'center',
    alignSelf: 'center'
  }
};

export const useStyles = createUseStyles(styles, {
  name: 'FilterPopover'
});
