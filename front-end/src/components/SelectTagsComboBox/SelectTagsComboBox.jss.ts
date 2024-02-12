import { createUseStyles } from 'react-jss';

export interface SelectTagsComboBoxStyles {
  positiveRange: string;
  negativeRange: string;
  neutralRange: string;
}

const styles = {
  tags: ({ positiveRange, negativeRange, neutralRange }: SelectTagsComboBoxStyles) => ({
    width: '800px',
    [`${positiveRange}`]: {
      backgroundColor: '#EBF5CB',
      color: '#256F3A',
      fontWeight: 'bold'
    },
    [`${negativeRange}`]: {
      backgroundColor: '#FFD0E7',
      color: '#AA0808',
      fontWeight: 'bold'
    },
    [`${neutralRange}`]: {
      backgroundColor: '#FFF3B8',
      color: '#A45D00',
      fontWeight: 'bold'
    }
  })
};

export const useStyles = createUseStyles<string, SelectTagsComboBoxStyles>(styles, {
  name: 'SelectTagsComboBox'
});
