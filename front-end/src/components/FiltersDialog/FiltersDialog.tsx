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
import { useEffect, useState } from 'react';
import { DietaryPreference } from '../../enums/DietaryPreferenceEnum';
import { useTranslation } from 'react-i18next';

export const FilterDialog = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [isDialogOpen, setIsDialogOpen, addFilters] = useReviewsStore((value) => [
    value.filterDialogState,
    value.setFilterDialogState,
    value.addFilters
  ]);
  const [courseNameValue, setCourseNameValue] = useState<string>('');
  const [dietaryPreferenceValue, setDietaryPreferenceValue] = useState<DietaryPreference>(
    DietaryPreference.UNDEFINED
  );
  const [mealPeriodValue, setMealPeriodValue] = useState<MealPeriod>(MealPeriod.UNDEFINED);
  const [numberOfActiveFilters, setNumberOfActiveFilters] = useState<number>(0);

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
    setCourseNameValue('');
    setDietaryPreferenceValue(DietaryPreference.UNDEFINED);
    setMealPeriodValue(MealPeriod.UNDEFINED);
  };

  const handleApplyButtonClick = () => {
    addFilters(courseNameValue, dietaryPreferenceValue, mealPeriodValue);
    setIsDialogOpen(false);
  };

  const setActiveFilters = () => {
    let numberOfFilters = 0;

    courseNameValue !== '' && numberOfFilters++;
    dietaryPreferenceValue !== DietaryPreference.UNDEFINED && numberOfFilters++;
    mealPeriodValue !== MealPeriod.UNDEFINED && numberOfFilters++;

    setNumberOfActiveFilters(numberOfFilters);
  };

  useEffect(() => {
    setActiveFilters();
  }, [courseNameValue, dietaryPreferenceValue, mealPeriodValue]);

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
            {t('filters.apply')} ({numberOfActiveFilters})
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
          <ObjectPageSection
            id="dietaryPreference"
            titleText={t('filters.dietaryPreference')}
          >
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
          <ObjectPageSection
            id="mealPeriod"
            titleText={t('filters.mealPeriod')}
          >
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
