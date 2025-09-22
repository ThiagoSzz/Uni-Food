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
import { useTranslation } from 'react-i18next';

export const OptionalInfoForm = () => {
  const classes = useStyles();
  const { t } = useTranslation();

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
    setDietaryPreference(dietaryPreference as DietaryPreference);
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
        <FormItem label={t('optional.courseAndPeriod')}>
          <Input
            placeholder={t('auth.coursePlaceholder')}
            onInputCapture={handleCourseNameChange}
            className={classes.courseNameInput}
            value={courseName}
            spellCheck={false}
          ></Input>
          <Input
            placeholder={t('optional.coursePeriodPlaceholder')}
            onInputCapture={handleCoursePeriodChange}
            className={classes.coursePeriodInput}
            value={coursePeriod}
            spellCheck={false}
          ></Input>
        </FormItem>
        <FormItem label={t('optional.dietLabel')}>
          <Select
            onChange={(e) =>
              handleChangeDietaryPreferenceSelection(e.detail.selectedOption.dataset.id)
            }
            className={classes.dietaryPreferenceSelect}
          >
            <Option data-id="Select">{t('auth.select')}</Option>
            <Option
              selected={dietaryPreference === DietaryPreference.OMNIVORE}
              data-id={DietaryPreference.OMNIVORE}
            >
              {t('diet.onívoro')}
            </Option>
            <Option
              selected={dietaryPreference === DietaryPreference.VEGETARIAN}
              data-id={DietaryPreference.VEGETARIAN}
            >
              {t('diet.vegetariano')}
            </Option>
            <Option
              selected={dietaryPreference === DietaryPreference.VEGAN}
              data-id={DietaryPreference.VEGAN}
            >
              {t('diet.vegano')}
            </Option>
          </Select>
        </FormItem>
        <FormItem label={t('optional.city')}>
          <Input
            placeholder={t('optional.cityPlaceholder')}
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
