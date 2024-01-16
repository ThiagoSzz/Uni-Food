import {
  Button,
  ButtonDesign,
  FlexBox,
  Input,
  List,
  PopoverPlacementType,
  ResponsivePopover,
  Select,
  StandardListItem,
  Option
} from '@ui5/webcomponents-react';
import React, { useState } from 'react';
import { useStyles } from './FilterPopover.jss';
import { MealPeriod } from '../../enums/MealPeriodEnum';
import useSearchStore from '../../stores/useSearchStore';

export const FilterPopover = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useSearchStore((value) => [
    value.filterPopoverState,
    value.setFilterPopoverState
  ]);

  const classes = useStyles();
  const [isCourseNameFilterActive, setIsCourseNameFilterActive] = useState<boolean>(false);
  const [isDietaryPreferenceFilterActive, setIsDietaryPreferenceFilterActive] =
    useState<boolean>(false);
  const [isMealPeriodFilterActive, setIsMealPeriodFilterActive] = useState<boolean>(false);

  const filterOptions = [
    {
      name: 'courseName',
      label: 'Nome do curso',
      placeholder: 'Nome do curso'
    },
    {
      name: 'dietaryPreference',
      label: 'Preferência alimentar',
      placeholder: 'Preferência alimentar'
    },
    {
      name: 'mealPeriod',
      label: 'Turno da refeição',
      placeholder: 'Turno da refeição'
    }
  ];

  const handlePopoverClose = () => {
    setIsPopoverOpen(false);

    setIsCourseNameFilterActive(false);
    setIsDietaryPreferenceFilterActive(false);
    setIsMealPeriodFilterActive(false);
  };

  const handleFilterInputToggle = (option) => {
    const { name } = option;

    name === 'courseName' && setIsCourseNameFilterActive((prevState) => !prevState);
    name === 'dietaryPreference' && setIsDietaryPreferenceFilterActive((prevState) => !prevState);
    name === 'mealPeriod' && setIsMealPeriodFilterActive((prevState) => !prevState);
  };

  const isFilterActive = (option) => {
    const { name } = option;

    return (
      (name === 'courseName' && !isCourseNameFilterActive) ||
      (name === 'dietaryPreference' && !isDietaryPreferenceFilterActive) ||
      (name === 'mealPeriod' && !isMealPeriodFilterActive)
    );
  };

  return (
    <ResponsivePopover
      opener={'openPopoverBtn'}
      open={isPopoverOpen}
      className={classes.popover}
      onAfterClose={handlePopoverClose}
      placementType={PopoverPlacementType.Right}
      headerText="Filtrar por"
      footer={
        <FlexBox className={classes.footer}>
          <Button design={ButtonDesign.Emphasized} className={classes.button}>
            Aplicar
          </Button>
          <Button onClick={() => setIsPopoverOpen(false)} className={classes.button}>
            Cancelar
          </Button>
        </FlexBox>
      }
    >
      <List>
        {filterOptions.map((option) => (
          <React.Fragment key={option.label}>
            <FlexBox>
              {isFilterActive(option) ? (
                <StandardListItem
                  icon="navigation-right-arrow"
                  iconEnd
                  onClick={() => handleFilterInputToggle(option)}
                  className={classes.listItem}
                >
                  {option.label}
                </StandardListItem>
              ) : option.name === 'courseName' ? (
                <FlexBox className={classes.lineFlexBox}>
                  <Input className={classes.input} placeholder={option.placeholder} />
                  <Button
                    icon="decline"
                    className={classes.closeButton}
                    onClick={() => handleFilterInputToggle(option)}
                  />
                </FlexBox>
              ) : option.name === 'dietaryPreference' ? (
                <FlexBox className={classes.lineFlexBox}>
                  <Select className={classes.dietaryPreferenceSelect}>
                    <Option data-id="Select">Preferência alimentar</Option>
                    <Option data-id="Onívora">Onívora</Option>
                    <Option data-id="Vegetariana">Vegetariana</Option>
                    <Option data-id="Vegana">Vegana</Option>
                  </Select>
                  <Button
                    icon="decline"
                    className={classes.closeButton}
                    onClick={() => handleFilterInputToggle(option)}
                  />
                </FlexBox>
              ) : (
                <FlexBox className={classes.lineFlexBox}>
                  <Select className={classes.mealPeriodSelect}>
                    <Option data-id="Select">Turno da refeição</Option>
                    <Option data-id={MealPeriod.BREAKFAST}>Café da manhã</Option>
                    <Option data-id={MealPeriod.LUNCH}>Almoço</Option>
                    <Option data-id={MealPeriod.DINNER}>Jantar</Option>
                  </Select>
                  <Button
                    icon="decline"
                    className={classes.closeButton}
                    onClick={() => handleFilterInputToggle(option)}
                  />
                </FlexBox>
              )}
            </FlexBox>
          </React.Fragment>
        ))}
      </List>
    </ResponsivePopover>
  );
};
