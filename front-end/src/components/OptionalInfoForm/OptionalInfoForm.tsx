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

  const [setCourseName, setCoursePeriod, setDietaryPreference, setCity] = useNewReviewStore(
    (value) => [
      value.setCourseName,
      value.setCoursePeriod,
      value.setDietaryPreference,
      value.setCity
    ]
  );

  const handleChangeDietaryPreferenceSelection = (dietaryPreference: string) => {
    setDietaryPreference(
      dietaryPreference === DietaryPreference.OMNIVORE
        ? DietaryPreference.OMNIVORE
        : dietaryPreference === DietaryPreference.VEGETARIAN
          ? DietaryPreference.VEGETARIAN
          : DietaryPreference.VEGAN
    );
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
            onChange={(e) =>
              handleChangeDietaryPreferenceSelection(e.detail.selectedOption.dataset.id)
            }
            className={classes.dietaryPreferenceSelect}
          >
            <Option data-id="Select">Selecionar</Option>
            <Option data-id={DietaryPreference.OMNIVORE}>{DietaryPreference.OMNIVORE}</Option>
            <Option data-id={DietaryPreference.VEGETARIAN}>{DietaryPreference.VEGETARIAN}</Option>
            <Option data-id={DietaryPreference.VEGAN}>{DietaryPreference.VEGAN}</Option>
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
