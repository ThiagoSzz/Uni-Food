/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useStyles } from './ReviewsSearchBar.jss';
import '@ui5/webcomponents-icons/dist/AllIcons';
import {
  FlexBox,
  Icon,
  Input,
  Label,
  SegmentedButton,
  SegmentedButtonItem,
  Switch
} from '@ui5/webcomponents-react';
import useSearchStore from '../../store/SearchStore';

export const ReviewsSearchBar = () => {
  const classes = useStyles();

  const [isPopoverOpen, setIsPopoverOpen] = useSearchStore((value) => [
    value.filterPopoverState,
    value.setFilterPopoverState
  ]);

  return (
    <FlexBox className={classes.searchBox}>
      <Input
        className={classes.searchBar}
        placeholder="Pesquisar"
        icon={<Icon className={classes.searchBarIcon} name="search" />}
      />
      <SegmentedButton className={classes.segmentedButton}>
        <SegmentedButtonItem
          icon="filter"
          id={'openPopoverBtn'}
          onClick={() => setIsPopoverOpen(!isPopoverOpen)}
        >
          Filtrar
        </SegmentedButtonItem>
        <SegmentedButtonItem icon="sys-cancel">Limpar filtros</SegmentedButtonItem>
      </SegmentedButton>
      <FlexBox className={classes.switchContainer}>
        <Switch />
        <Label className={classes.switchLabelText}>Filtrar médias</Label>
        <Switch checked />
        <Label className={classes.switchLabelText}>Filtrar avaliações</Label>
      </FlexBox>
    </FlexBox>
  );
};
