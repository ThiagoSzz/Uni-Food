/* eslint-disable react-hooks/exhaustive-deps */
import {
  FormBackgroundDesign,
  FormGroup,
  FormItem,
  Input,
  Select,
  Label,
  TextArea,
  RatingIndicator,
  Option,
  Form
} from '@ui5/webcomponents-react';
import { useStyles } from '../ReviewInfoForm/ReviewInfoForm.jss';
import useNewReviewStore from '../../stores/useNewReviewStore';
import { MealPeriod } from '../../enums/MealPeriodEnum';
import { SelectTagsComboBox } from '../SelectTagsComboBox/SelectTagsComboBox';
import { useTranslation } from 'react-i18next';

export const ReviewInfoForm = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [
    ruCode,
    universityName,
    mealPeriod,
    comment,
    rating,
    setRuCode,
    setUniversityName,
    setMealPeriod,
    setComment,
    setRating
  ] = useNewReviewStore((value) => [
    value.ruCode,
    value.universityName,
    value.mealPeriod,
    value.comment,
    value.rating,
    value.setRuCode,
    value.setUniversityName,
    value.setMealPeriod,
    value.setComment,
    value.setRating
  ]);

  const handleRuCodeValueChange = (event) => {
    const { value } = event.target;
    setRuCode(value);
  };

  const handleUniversityNameValueChange = (event) => {
    const { value } = event.target;
    setUniversityName(value);
  };

  const handleCommentValueChange = (event) => {
    const { value } = event.target;
    setComment(value);
  };

  const handleChangeMealPeriodSelection = (mealPeriod: string) => {
    setMealPeriod(
      mealPeriod === MealPeriod.BREAKFAST
        ? MealPeriod.BREAKFAST
        : mealPeriod === MealPeriod.LUNCH
          ? MealPeriod.LUNCH
          : MealPeriod.DINNER
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
        <FormItem label={t('review.form.codeAndUniversity')}>
          <Input
            placeholder={t('review.form.ruPlaceholder')}
            onInputCapture={handleRuCodeValueChange}
            className={classes.ruInput}
            value={ruCode}
            required
            spellCheck={false}
          ></Input>
          <Input
            placeholder={t('review.form.universityPlaceholder')}
            onChange={handleUniversityNameValueChange}
            className={classes.universityInput}
            value={universityName}
            required
            spellCheck={false}
          ></Input>
        </FormItem>
        <FormItem label={t('review.form.mealPeriodLabel')}>
          <Select
            onChange={(e) => handleChangeMealPeriodSelection(e.detail.selectedOption.dataset.id)}
            className={classes.mealPeriodSelect}
          >
            <Option data-id="Select">{t('auth.select')}</Option>
            <Option selected={mealPeriod === MealPeriod.BREAKFAST} data-id={MealPeriod.BREAKFAST}>
              {t('meal.breakfast')}
            </Option>
            <Option selected={mealPeriod === MealPeriod.LUNCH} data-id={MealPeriod.LUNCH}>
              {t('meal.lunch')}
            </Option>
            <Option selected={mealPeriod === MealPeriod.DINNER} data-id={MealPeriod.DINNER}>
              {t('meal.dinner')}
            </Option>
          </Select>
        </FormItem>
        <FormItem
          label={<Label className={classes.commentLabel}>{t('review.form.commentLabel')}</Label>}
        >
          <TextArea
            className={classes.textArea}
            placeholder={t('review.form.commentPlaceholder')}
            value={comment}
            rows={8}
            onInputCapture={handleCommentValueChange}
            spellCheck={false}
          />
        </FormItem>
        <FormItem label={t('review.form.tagsLabel')}>
          <SelectTagsComboBox />
        </FormItem>
        <FormItem label={t('review.form.ratingLabel')}>
          <RatingIndicator
            className={classes.ratingIndicator}
            onChange={(e) => setRating(e.target.value)}
            value={rating}
          />
        </FormItem>
      </FormGroup>
    </Form>
  );
};
