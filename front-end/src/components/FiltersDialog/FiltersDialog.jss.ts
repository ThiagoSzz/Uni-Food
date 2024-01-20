/* eslint-disable @typescript-eslint/no-unused-vars */
import { createUseStyles } from 'react-jss';

type JSSStyles = { [keys: string]: React.CSSProperties | JSSStyles };

const styles: JSSStyles = {
  dialog: {
    width: '525px',
    height: 'fit-content'
  },
  objectPage: {
    border: '1px solid',
    borderColor: '#CAD2D8',
    borderRadius: '8px'
  },
  input: {
    width: '100%',
    height: '44px',
    marginBottom: '5px'
  },
  inputIcon: {
    alignItems: 'center',
    alignSelf: 'center',
    fill: '#0064D9',
    marginRight: '10px'
  },
  dietaryPreferenceSelect: {
    width: '100%',
    height: '44px',
    marginBottom: '5px'
  },
  mealPeriodSelect: {
    width: '100%',
    height: '44px',
    marginBottom: '5px'
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
  }
};

export const useStyles = createUseStyles(styles, {
  name: 'FilterDialog'
});
