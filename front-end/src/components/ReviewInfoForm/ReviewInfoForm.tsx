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

export const ReviewInfoForm = () => {
  const classes = useStyles();

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
        <FormItem label="Código do RU e Sigla da Universidade">
          <Input
            placeholder="Ex.: RU01"
            onInputCapture={handleRuCodeValueChange}
            className={classes.ruInput}
            value={ruCode}
            required
            spellCheck={false}
          ></Input>
          <Input
            placeholder="Ex.: UFRGS"
            onChange={handleUniversityNameValueChange}
            className={classes.universityInput}
            value={universityName}
            required
            spellCheck={false}
          ></Input>
        </FormItem>
        <FormItem label="Período da Refeição">
          <Select
            onChange={(e) => handleChangeMealPeriodSelection(e.detail.selectedOption.dataset.id)}
            className={classes.mealPeriodSelect}
          >
            <Option data-id="Select">Selecionar</Option>
            <Option selected={mealPeriod === MealPeriod.BREAKFAST} data-id={MealPeriod.BREAKFAST}>
              {MealPeriod.BREAKFAST}
            </Option>
            <Option selected={mealPeriod === MealPeriod.LUNCH} data-id={MealPeriod.LUNCH}>
              {MealPeriod.LUNCH}
            </Option>
            <Option selected={mealPeriod === MealPeriod.DINNER} data-id={MealPeriod.DINNER}>
              {MealPeriod.DINNER}
            </Option>
          </Select>
        </FormItem>
        <FormItem label={<Label className={classes.commentLabel}>Comentário</Label>}>
          <TextArea
            className={classes.textArea}
            placeholder="Ex.: Muito bom o restaurante!"
            value={comment}
            rows={8}
            onInputCapture={handleCommentValueChange}
            spellCheck={false}
          />
        </FormItem>
        <FormItem label="Tags (2 a 5)">
          <SelectTagsComboBox />
        </FormItem>
        <FormItem label="Nota">
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
