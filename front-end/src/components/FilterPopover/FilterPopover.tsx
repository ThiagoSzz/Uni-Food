/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-eval */
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
import { FilterPopoverProps } from '../../interfaces/props/FilterPopoverProps';

export const FilterPopover = (props: FilterPopoverProps) => {
  const { isPopoverOpen, setIsPopoverOpen } = props;

  const classes = useStyles();
  const [isCourseNameFilterActive, setisCourseNameFilterActive] = useState<boolean>(false);
  const [isDietaryPreferenceFilterActive, setisDietaryPreferenceFilterActive] =
    useState<boolean>(false);
  const [isMealPeriodFilterActive, setisMealPeriodFilterActive] = useState<boolean>(false);

  const filterOptions = [
    {
      activeState: 'isCourseNameFilterActive',
      label: 'Nome do curso',
      placeholder: 'Nome do curso'
    },
    {
      activeState: 'isDietaryPreferenceFilterActive',
      label: 'Preferência alimentar',
      placeholder: 'Preferência alimentar'
    },
    {
      activeState: 'isMealPeriodFilterActive',
      label: 'Turno da refeição',
      placeholder: 'Turno da refeição'
    }
  ];

  const handlePopoverClose = () => {
    setIsPopoverOpen(false);

    filterOptions.forEach((option) => {
      option.activeState && eval(`set${option.activeState}(false)`);
    });
  };

  const handleFilterInputToggle = (option: any) => {
    const { activeState, label, placeholder } = option;

    if (eval(activeState)) {
      eval(`set${activeState}(false)`);
    } else {
      eval(`set${activeState}(true)`);
    }
  };

  return (
    <ResponsivePopover
      opener={'openPopoverBtn'}
      open={isPopoverOpen}
      className={classes.popover}
      onAfterClose={handlePopoverClose}
      placementType={PopoverPlacementType.Right}
      headerText={'Filtrar por'}
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
              {!eval(option.activeState) ? (
                <StandardListItem
                  icon="navigation-right-arrow"
                  iconEnd
                  onClick={() => handleFilterInputToggle(option)}
                  className={classes.listItem}
                >
                  {option.label}
                </StandardListItem>
              ) : option.activeState === 'isCourseNameFilterActive' ? (
                <FlexBox className={classes.lineFlexBox}>
                  <Input className={classes.input} placeholder={option.placeholder} />
                  <Button
                    icon="decline"
                    className={classes.closeButton}
                    onClick={() => handleFilterInputToggle(option)}
                  />
                </FlexBox>
              ) : option.activeState === 'isDietaryPreferenceFilterActive' ? (
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
                    <Option data-id="Café da manhã">Café da manhã</Option>
                    <Option data-id="Almoço">Almoço</Option>
                    <Option data-id="Jantar">Jantar</Option>
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
