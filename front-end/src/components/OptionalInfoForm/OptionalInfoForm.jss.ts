/* eslint-disable @typescript-eslint/no-unused-vars */
import { createUseStyles } from 'react-jss';

type JSSStyles = { [keys: string]: React.CSSProperties | JSSStyles };

const styles: JSSStyles = {
  courseNameInput: {
    width: '350px',
    marginRight: '5px'
  },
  coursePeriodInput: {
    width: '75px'
  },
  dietaryPreferenceSelect: {
    width: '430px'
  },
  cityInput: {
    width: '430px'
  }
};

export const useStyles = createUseStyles(styles, {
  name: 'OptionalInfoForm'
});
