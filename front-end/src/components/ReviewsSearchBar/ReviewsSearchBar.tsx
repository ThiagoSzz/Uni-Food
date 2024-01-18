/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useStyles } from './ReviewsSearchBar.jss';
import '@ui5/webcomponents-icons/dist/AllIcons';
import {
  FlexBox,
  Icon,
  Text,
  Input,
  Label,
  SegmentedButton,
  SegmentedButtonItem,
  Switch,
  ValueState
} from '@ui5/webcomponents-react';
import useReviewsStore from '../../stores/useReviewsStore';
import useAverageReviewsStore from '../../stores/useAverageReviewsStore';
import { useEffect } from 'react';

export const ReviewsSearchBar = () => {
  const classes = useStyles();

  const [
    isPopoverOpen,
    setIsPopoverOpen,
    setReviewsSearchQuery,
    getFilteredReviews,
    shouldFilterReviews,
    setShouldFilterReviews,
    shouldShowNoFilteredReviewsMessage
  ] = useReviewsStore((value) => [
    value.filterPopoverState,
    value.setFilterPopoverState,
    value.setSearchQuery,
    value.getFilteredReviews,
    value.shouldFilterReviews,
    value.setShouldFilterReviews,
    value.shouldShowNoFilteredReviewsMessage
  ]);
  const [
    setAverageReviewsSearchQuery,
    getFilteredAverageReviews,
    shouldFilterAverageReviews,
    setShouldFilterAverageReviews
  ] = useAverageReviewsStore((value) => [
    value.setSearchQuery,
    value.getFilteredAverageReviews,
    value.shouldFilterAverageReviews,
    value.setShouldFilterAverageReviews
  ]);

  const debounce = (func: Function, delay: number) => {
    let timeout: NodeJS.Timeout;

    return (...args: any[]) => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleApplyFilters = debounce((searchQuery: string) => {
    setReviewsSearchQuery(searchQuery);
    setAverageReviewsSearchQuery(searchQuery);

    getFilteredReviews();
    getFilteredAverageReviews();
  }, 500);

  const handleInputChange = (event) => {
    const { value } = event.target;
    handleApplyFilters(value);
  };

  const handleToggleFilterReviewsSwitch = () => {
    setShouldFilterReviews(!shouldFilterReviews);
  };

  const handleToggleFilterAverageReviewsSwitch = () => {
    setShouldFilterAverageReviews(!shouldFilterAverageReviews);
  };

  useEffect(() => {
    getFilteredAverageReviews();
  }, [shouldFilterAverageReviews]);

  useEffect(() => {
    getFilteredReviews();
  }, [shouldFilterReviews]);

  return (
    <FlexBox className={classes.searchBox}>
      <Input
        className={classes.searchBar}
        placeholder="Pesquisar"
        icon={<Icon className={classes.searchBarIcon} name="search" />}
        onInputCapture={handleInputChange}
        valueState={shouldShowNoFilteredReviewsMessage ? ValueState.Information : ValueState.None}
        valueStateMessage={
          <Text className={classes.valueStateMessageText}>Nenhuma avaliação foi filtrada com sua pesquisa</Text>
        }
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
        <Switch
          checked={shouldFilterAverageReviews}
          onChange={handleToggleFilterAverageReviewsSwitch}
        />
        <Label className={classes.switchLabelText}>Filtrar médias</Label>
        <Switch checked={shouldFilterReviews} onChange={handleToggleFilterReviewsSwitch} />
        <Label className={classes.switchLabelText}>Filtrar avaliações</Label>
      </FlexBox>
    </FlexBox>
  );
};
