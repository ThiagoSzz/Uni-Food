import {
  FormBackgroundDesign,
  FormGroup,
  FormItem,
  Input,
  Select,
  Option,
  Form
} from '@ui5/webcomponents-react';
import { useStyles } from '../OptionalInfoForm/OptionalInfoForm.jss';
import useNewReviewStore from '../../stores/useNewReviewStore';
import { DietaryPreference } from '../../enums/DietaryPreferenceEnum';

export const OptionalInfoForm = () => {
  const classes = useStyles();

  const [
    courseName,
    coursePeriod,
    dietaryPreference,
    city,
    setCourseName,
    setCoursePeriod,
    setDietaryPreference,
    setCity
  ] = useNewReviewStore((value) => [
    value.courseName,
    value.coursePeriod,
    value.dietaryPreference,
    value.city,
    value.setCourseName,
    value.setCoursePeriod,
    value.setDietaryPreference,
    value.setCity
  ]);

  const handleCourseNameChange = (event) => {
    const { value } = event.target;
    setCourseName(value);
  };

  const handleCoursePeriodChange = (event) => {
    const { value } = event.target;
    setCoursePeriod(value);
  };

  const handleChangeDietaryPreferenceSelection = (dietaryPreference: string) => {
    setDietaryPreference(
      dietaryPreference === 'Onívora'
        ? DietaryPreference.OMNIVORE
        : dietaryPreference === 'Vegetariana'
          ? DietaryPreference.VEGETARIAN
          : DietaryPreference.VEGAN
    );
  };

  const handleCityChange = (event) => {
    const { value } = event.target;
    setCity(value);
  };

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
            onInputCapture={handleCourseNameChange}
            className={classes.courseNameInput}
            value={courseName}
            spellCheck={false}
          ></Input>
          <Input
            placeholder="Ex.: 6"
            onInputCapture={handleCoursePeriodChange}
            className={classes.coursePeriodInput}
            value={coursePeriod}
            spellCheck={false}
          ></Input>
        </FormItem>
        <FormItem label="Preferência Alimentar">
          <Select
            onChange={(e) =>
              handleChangeDietaryPreferenceSelection(e.detail.selectedOption.dataset.id)
            }
            className={classes.dietaryPreferenceSelect}
          >
            <Option data-id="Select">Selecionar</Option>
            <Option
              selected={dietaryPreference === DietaryPreference.OMNIVORE}
              data-id={DietaryPreference.OMNIVORE}
            >
              {DietaryPreference.OMNIVORE}
            </Option>
            <Option
              selected={dietaryPreference === DietaryPreference.VEGETARIAN}
              data-id={DietaryPreference.VEGETARIAN}
            >
              {DietaryPreference.VEGETARIAN}
            </Option>
            <Option
              selected={dietaryPreference === DietaryPreference.VEGAN}
              data-id={DietaryPreference.VEGAN}
            >
              {DietaryPreference.VEGAN}
            </Option>
          </Select>
        </FormItem>
        <FormItem label="Cidade">
          <Input
            placeholder="Ex.: Porto Alegre"
            onInputCapture={handleCityChange}
            className={classes.cityInput}
            value={city}
            spellCheck={false}
          ></Input>
        </FormItem>
      </FormGroup>
    </Form>
  );
};
