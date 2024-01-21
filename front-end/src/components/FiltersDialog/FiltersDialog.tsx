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

export const FilterDialog = () => {
  const classes = useStyles();

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
    dietaryPreferenceValue !== '' && numberOfFilters++;
    mealPeriodValue !== '' && numberOfFilters++;

    setNumberOfActiveFilters(numberOfFilters);
  };

  useEffect(() => {
    setActiveFilters();
  }, [courseNameValue, dietaryPreferenceValue, mealPeriodValue]);

  return (
    <Dialog
      open={isDialogOpen}
      className={classes.dialog}
      headerText="Filtrar por"
      footer={
        <FlexBox className={classes.footer}>
          <Button
            design={ButtonDesign.Emphasized}
            className={classes.button}
            onClick={handleApplyButtonClick}
          >
            Aplicar ({numberOfActiveFilters})
          </Button>
          <Button
            design={ButtonDesign.Transparent}
            onClick={() => setIsDialogOpen(false)}
            className={classes.button}
          >
            Cancelar
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
          footer={
            <FlexBox className={classes.objectPageFooter}>
              Estes filtros não serão aplicados às médias por restaurante universitário
            </FlexBox>
          }
        >
          <ObjectPageSection id="courseName" titleText="Nome do curso">
            <Input
              className={classes.input}
              value={courseNameValue}
              placeholder="Ex.: Ciência da Computação"
              icon={<Icon className={classes.inputIcon} name="search" />}
              onInputCapture={handleCourseNameValueChange}
            />
          </ObjectPageSection>
          <ObjectPageSection id="dietaryPreference" titleText="Preferência alimentar">
            <Select
              className={classes.dietaryPreferenceSelect}
              onChange={(event) =>
                handleDietaryPreferenceValueChange(event.detail.selectedOption.dataset.id)
              }
            >
              <Option data-id="Select">Selecionar</Option>
              <Option
                selected={dietaryPreferenceValue === DietaryPreference.OMNIVORE}
                data-id={DietaryPreference.OMNIVORE}
              >
                {DietaryPreference.OMNIVORE}
              </Option>
              <Option
                selected={dietaryPreferenceValue === DietaryPreference.VEGETARIAN}
                data-id={DietaryPreference.VEGETARIAN}
              >
                {DietaryPreference.VEGETARIAN}
              </Option>
              <Option
                selected={dietaryPreferenceValue === DietaryPreference.VEGAN}
                data-id={DietaryPreference.VEGAN}
              >
                {DietaryPreference.VEGAN}
              </Option>
            </Select>
          </ObjectPageSection>
          <ObjectPageSection id="mealPeriod" titleText="Período da refeição">
            <Select
              className={classes.mealPeriodSelect}
              onChange={(event) =>
                handleMealPeriodValueChange(event.detail.selectedOption.dataset.id)
              }
            >
              <Option data-id="Select">Selecionar</Option>
              <Option
                selected={mealPeriodValue === MealPeriod.BREAKFAST}
                data-id={MealPeriod.BREAKFAST}
              >
                {MealPeriod.BREAKFAST}
              </Option>
              <Option selected={mealPeriodValue === MealPeriod.LUNCH} data-id={MealPeriod.LUNCH}>
                {MealPeriod.LUNCH}
              </Option>
              <Option selected={mealPeriodValue === MealPeriod.DINNER} data-id={MealPeriod.DINNER}>
                {MealPeriod.DINNER}
              </Option>
            </Select>
          </ObjectPageSection>
        </ObjectPage>
      </FlexBox>
    </Dialog>
  );
};
