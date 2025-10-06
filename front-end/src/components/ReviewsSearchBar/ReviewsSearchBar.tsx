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
import useSearchFilterStore from '../../stores/useSearchFilterStore';
import { useCallback, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { debounce } from 'lodash';

interface ReviewsSearchBarProps {
  searchQuery: string;
}

export const ReviewsSearchBar = ({ searchQuery }: ReviewsSearchBarProps) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [isDialogOpen, setIsDialogOpen] = useReviewsStore((value) => [
    value.filterDialogState,
    value.setFilterDialogState
  ]);

  const {
    shouldFilterReviews,
    shouldFilterAverageReviews,
    setSearchQuery,
    setShouldFilterReviews,
    setShouldFilterAverageReviews,
    clearAllFilters
  } = useSearchFilterStore();

  const debouncedSearchRef = useRef(
    debounce((query: string) => {
      setSearchQuery(query);
    }, 300)
  );

  useEffect(() => {
    debouncedSearchRef.current = debounce((query: string) => {
      setSearchQuery(query);
    }, 300);
  }, [setSearchQuery]);

  useEffect(() => {
    return () => {
      debouncedSearchRef.current.cancel();
    };
  }, []);

  const handleInputChange = useCallback((event: any) => {
    const { value } = event.target;
    debouncedSearchRef.current(value);
  }, []);

  const handleToggleFilterReviews = useCallback(() => {
    setShouldFilterReviews(!shouldFilterReviews);
  }, [shouldFilterReviews, setShouldFilterReviews]);

  const handleToggleFilterAverageReviews = useCallback(() => {
    setShouldFilterAverageReviews(!shouldFilterAverageReviews);
  }, [shouldFilterAverageReviews, setShouldFilterAverageReviews]);

  return (
    <FlexBox className={classes.searchBox}>
      <Input
        className={classes.searchBar}
        placeholder={t('search.placeholder')}
        icon={<Icon className={classes.searchBarIcon} name="search" />}
        onInputCapture={handleInputChange}
        defaultValue={searchQuery}
        spellCheck={false}
      />
      <SegmentedButton className={classes.segmentedButton}>
        <SegmentedButtonItem icon="filter" onClick={() => setIsDialogOpen(!isDialogOpen)}>
          {t('search.filter')}
        </SegmentedButtonItem>
        <SegmentedButtonItem onClick={clearAllFilters} icon="sys-cancel">
          {t('search.clearFilters')}
        </SegmentedButtonItem>
      </SegmentedButton>
      <FlexBox className={classes.switchContainer}>
        <Switch checked={shouldFilterAverageReviews} onChange={handleToggleFilterAverageReviews} />
        <Label className={classes.switchLabelText}>{t('search.filterAverages')}</Label>
        <Switch checked={shouldFilterReviews} onChange={handleToggleFilterReviews} />
        <Label className={classes.switchLabelText}>{t('search.filterReviews')}</Label>
      </FlexBox>
    </FlexBox>
  );
};
