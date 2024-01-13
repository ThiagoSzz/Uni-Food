/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  FormBackgroundDesign,
  FormGroup,
  FormItem,
  Input,
  Select,
  Option,
  Form
} from '@ui5/webcomponents-react';
import { useState } from 'react';
import { useStyles } from '../OptionalInfoForm/OptionalInfoForm.jss';

export const OptionalInfoForm = () => {
  const classes = useStyles();

  const [courseName, setCourseName] = useState<string>();
  const [coursePeriod, setCoursePeriod] = useState<string>();
  const [dietaryPreference, setDietaryPreference] = useState<string>();
  const [city, setCity] = useState<string>();

  return (
    <Form
      backgroundDesign={FormBackgroundDesign.Transparent}
      columnsL={1}
      columnsM={1}
      columnsS={1}
      columnsXL={2}
      labelSpanL={3}
      labelSpanM={2}
      labelSpanS={12}
      labelSpanXL={4}
    >
      <FormGroup>
        <FormItem label="Curso e Período">
          <Input
            placeholder="Ex.: Ciência da Computação"
            onChange={(e) => setCourseName(e.target.value)}
            className={classes.courseNameInput}
          ></Input>
          <Input
            placeholder="Ex.: 6"
            onChange={(e) => setCoursePeriod(e.target.value)}
            className={classes.coursePeriodInput}
          ></Input>
        </FormItem>
        <FormItem label="Preferência Alimentar">
          <Select
            onChange={(e) => setDietaryPreference(e.detail.selectedOption.dataset.id)}
            className={classes.dietaryPreferenceSelect}
          >
            <Option data-id="Select">Selecionar</Option>
            <Option data-id="Onívora">Onívora</Option>
            <Option data-id="Vegetariana">Vegetariana</Option>
            <Option data-id="Vegana">Vegana</Option>
          </Select>
        </FormItem>
        <FormItem label="Cidade">
          <Input
            placeholder="Ex.: Porto Alegre"
            onChange={(e) => setCity(e.target.value)}
            className={classes.cityInput}
          ></Input>
        </FormItem>
      </FormGroup>
    </Form>
  );
};
