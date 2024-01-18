/* eslint-disable @typescript-eslint/no-unused-vars */
import { createUseStyles } from 'react-jss';

type JSSStyles = { [keys: string]: React.CSSProperties | JSSStyles };

const styles: JSSStyles = {
  searchBox: {
    backgroundColor: 'white',
    width: '1354px',
    height: '50px',
    boxShadow: 'rgba(85, 107, 130, 0.25) 0.5px 0.5px 4px',
    borderRadius: '8px',
    alignItems: 'center',
    gap: '30px',
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      width: '1010px'
    }
  },
  searchBar: {
    width: '650px',
    marginLeft: '25px',
    borderRadius: '8px'
  },
  searchBarIcon: {
    alignItems: 'center',
    alignSelf: 'center',
    fill: '#0064D9'
  },
  switchContainer: {
    alignItems: 'center'
  },
  switchLabelText: {
    color: '#0064D9',
    fontSize: '14px',
    fontWeight: 'bold',
    marginRight: '10px'
  },
  valueStateMessageText: {
    fontSize: '13px'
  }
};

export const useStyles = createUseStyles(styles, {
  name: 'ReviewsSearchBar'
});
