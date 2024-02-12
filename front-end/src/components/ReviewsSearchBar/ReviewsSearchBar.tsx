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
import useReviewsStore from '../../stores/useReviewsStore';
import useAverageReviewsStore from '../../stores/useAverageReviewsStore';
import { useEffect } from 'react';

export const ReviewsSearchBar = () => {
  const classes = useStyles();

  const [
    isDialogOpen,
    setIsDialogOpen,
    searchQuery,
    setReviewsSearchQuery,
    getFilteredReviews,
    shouldFilterReviews,
    setShouldFilterReviews,
    resetFilters
  ] = useReviewsStore((value) => [
    value.filterDialogState,
    value.setFilterDialogState,
    value.searchQuery,
    value.setSearchQuery,
    value.getFilteredReviews,
    value.shouldFilterReviews,
    value.setShouldFilterReviews,
    value.resetFilters
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
        placeholder="Pesquisar (código do RU, nome da universidade, cidade, tags)"
        icon={<Icon className={classes.searchBarIcon} name="search" />}
        onInputCapture={handleInputChange}
        value={searchQuery}
        spellCheck={false}
      />
      <SegmentedButton className={classes.segmentedButton}>
        <SegmentedButtonItem icon="filter" onClick={() => setIsDialogOpen(!isDialogOpen)}>
          Filtrar
        </SegmentedButtonItem>
        <SegmentedButtonItem onClick={() => resetFilters()} icon="sys-cancel">
          Limpar filtros
        </SegmentedButtonItem>
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
