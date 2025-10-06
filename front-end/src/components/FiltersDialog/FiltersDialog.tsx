/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  ButtonDesign,
  FlexBox,
  Dialog,
  FlexBoxDirection,
  ObjectPage,
  ObjectPageSection,
  Input,
  ObjectPageMode,
  Select,
  Option,
  Icon
} from '@ui5/webcomponents-react';
import { useStyles } from './FiltersDialog.jss';
import { MealPeriod } from '../../enums/MealPeriodEnum';
import useReviewsStore from '../../stores/useReviewsStore';
import useSearchFilterStore, { FilterCriteria } from '../../stores/useSearchFilterStore';
import { useEffect, useState } from 'react';
import { DietaryPreference } from '../../enums/DietaryPreferenceEnum';
import { useTranslation } from 'react-i18next';

interface FilterDialogProps {
  filterCriteria: FilterCriteria;
}

export const FilterDialog = ({ filterCriteria }: FilterDialogProps) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [isDialogOpen, setIsDialogOpen] = useReviewsStore((value) => [
    value.filterDialogState,
    value.setFilterDialogState
  ]);

  const { setFilterCriteria } = useSearchFilterStore();

  const activeFiltersCount = [
    filterCriteria.courseName.trim() !== '',
    filterCriteria.dietaryPreference !== DietaryPreference.UNDEFINED,
    filterCriteria.mealPeriod !== MealPeriod.UNDEFINED
  ].filter(Boolean).length;

  const [courseNameValue, setCourseNameValue] = useState<string>(filterCriteria.courseName);
  const [dietaryPreferenceValue, setDietaryPreferenceValue] = useState<DietaryPreference>(
    filterCriteria.dietaryPreference
  );
  const [mealPeriodValue, setMealPeriodValue] = useState<MealPeriod>(filterCriteria.mealPeriod);

  // Update local state when filterCriteria prop changes
  useEffect(() => {
    setCourseNameValue(filterCriteria.courseName);
    setDietaryPreferenceValue(filterCriteria.dietaryPreference);
    setMealPeriodValue(filterCriteria.mealPeriod);
  }, [filterCriteria]);

  const handleCourseNameValueChange = (event) => {
    const { value } = event.target;
    setCourseNameValue(value);
  };

  const handleDietaryPreferenceValueChange = (value) => {
    setDietaryPreferenceValue(value);
  };

  const handleMealPeriodValueChange = (value) => {
    setMealPeriodValue(value);
  };

  const handleDialogAfterClose = () => {
    // Reset local state to current filterCriteria when dialog closes
    setCourseNameValue(filterCriteria.courseName);
    setDietaryPreferenceValue(filterCriteria.dietaryPreference);
    setMealPeriodValue(filterCriteria.mealPeriod);
  };

  const handleApplyButtonClick = () => {
    setFilterCriteria({
      courseName: courseNameValue,
      dietaryPreference: dietaryPreferenceValue,
      mealPeriod: mealPeriodValue
    });
    setIsDialogOpen(false);
  };

  return (
    <Dialog
      open={isDialogOpen}
      className={classes.dialog}
      headerText={t('filters.header')}
      footer={
        <FlexBox className={classes.footer}>
          <Button
            design={ButtonDesign.Emphasized}
            className={classes.button}
            onClick={handleApplyButtonClick}
          >
            {t('filters.apply')} ({activeFiltersCount})
          </Button>
          <Button
            design={ButtonDesign.Transparent}
            onClick={() => setIsDialogOpen(false)}
            className={classes.button}
          >
            {t('btn.cancel')}
          </Button>
        </FlexBox>
      }
      onAfterClose={handleDialogAfterClose}
    >
      <FlexBox direction={FlexBoxDirection.Column}>
        <ObjectPage
          selectedSectionId="courseName"
          mode={ObjectPageMode.IconTabBar}
          className={classes.objectPage}
          footer={<FlexBox className={classes.objectPageFooter}>{t('filters.footerNote')}</FlexBox>}
        >
          <ObjectPageSection id="courseName" titleText={t('filters.courseName')}>
            <Input
              className={classes.input}
              value={courseNameValue}
              placeholder={t('auth.coursePlaceholder')}
              icon={<Icon className={classes.inputIcon} name="search" />}
              onInputCapture={handleCourseNameValueChange}
              spellCheck={false}
            />
          </ObjectPageSection>
          <ObjectPageSection id="dietaryPreference" titleText={t('filters.dietaryPreference')}>
            <Select
              className={classes.dietaryPreferenceSelect}
              onChange={(event) =>
                handleDietaryPreferenceValueChange(event.detail.selectedOption.dataset.id)
              }
            >
              <Option data-id="Select">{t('auth.select')}</Option>
              <Option
                selected={dietaryPreferenceValue === DietaryPreference.OMNIVORE}
                data-id={DietaryPreference.OMNIVORE}
              >
                {t('diet.onívoro')}
              </Option>
              <Option
                selected={dietaryPreferenceValue === DietaryPreference.VEGETARIAN}
                data-id={DietaryPreference.VEGETARIAN}
              >
                {t('diet.vegetariano')}
              </Option>
              <Option
                selected={dietaryPreferenceValue === DietaryPreference.VEGAN}
                data-id={DietaryPreference.VEGAN}
              >
                {t('diet.vegano')}
              </Option>
            </Select>
          </ObjectPageSection>
          <ObjectPageSection id="mealPeriod" titleText={t('filters.mealPeriod')}>
            <Select
              className={classes.mealPeriodSelect}
              onChange={(event) =>
                handleMealPeriodValueChange(event.detail.selectedOption.dataset.id)
              }
            >
              <Option data-id="Select">{t('auth.select')}</Option>
              <Option
                selected={mealPeriodValue === MealPeriod.BREAKFAST}
                data-id={MealPeriod.BREAKFAST}
              >
                {t('meal.breakfast')}
              </Option>
              <Option selected={mealPeriodValue === MealPeriod.LUNCH} data-id={MealPeriod.LUNCH}>
                {t('meal.lunch')}
              </Option>
              <Option selected={mealPeriodValue === MealPeriod.DINNER} data-id={MealPeriod.DINNER}>
                {t('meal.dinner')}
              </Option>
            </Select>
          </ObjectPageSection>
        </ObjectPage>
      </FlexBox>
    </Dialog>
  );
};
