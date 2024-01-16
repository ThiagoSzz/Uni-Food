/* eslint-disable react-hooks/exhaustive-deps */
import {
  FormBackgroundDesign,
  FormGroup,
  FormItem,
  Input,
  Select,
  Label,
  TextArea,
  FlexBox,
  Button,
  Badge,
  RatingIndicator,
  Option,
  Form
} from '@ui5/webcomponents-react';
import { CardTagColors } from '../../enums/CardTagColorsEnum';
import { useEffect } from 'react';
import { useStyles } from '../ReviewInfoForm/ReviewInfoForm.jss';
import { ReviewInfoFormProps } from '../../interfaces/props/ReviewInfoFormProps';
import useNewReviewStore from '../../stores/useNewReviewStore';
import { MealPeriod } from '../../enums/MealPeriodEnum';

export const ReviewInfoForm = (props: ReviewInfoFormProps) => {
  const { setIsSelectTagsDialogOpen, selectedTags, setSelectedTags } = props;
  const classes = useStyles();

  const [setRuCode, setUniversityName, setMealPeriod, setComment, setTags, setRating] =
    useNewReviewStore((value) => [
      value.setRuCode,
      value.setUniversityName,
      value.setMealPeriod,
      value.setComment,
      value.setTags,
      value.setRating
    ]);

  const handleChangeMealPeriodSelection = (mealPeriod: string) => {
    setMealPeriod(
      mealPeriod === MealPeriod.BREAKFAST
        ? MealPeriod.BREAKFAST
        : mealPeriod === MealPeriod.LUNCH
          ? MealPeriod.LUNCH
          : MealPeriod.DINNER
    );
  };

  useEffect(() => {
    setTags(selectedTags);
  }, [selectedTags]);

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
            onChange={(e) => setRuCode(e.target.value)}
            className={classes.ruInput}
            required
          ></Input>
          <Input
            placeholder="Ex.: UFRGS"
            onChange={(e) => setUniversityName(e.target.value)}
            className={classes.universityInput}
            required
          ></Input>
        </FormItem>
        <FormItem label="Período da Refeição">
          <Select
            onChange={(e) => handleChangeMealPeriodSelection(e.detail.selectedOption.dataset.id)}
            className={classes.mealPeriodSelect}
          >
            <Option data-id="Select">Selecionar</Option>
            <Option data-id={MealPeriod.BREAKFAST}>Café da manhã</Option>
            <Option data-id={MealPeriod.LUNCH}>Almoço</Option>
            <Option data-id={MealPeriod.DINNER}>Jantar</Option>
          </Select>
        </FormItem>
        <FormItem label={<Label className={classes.commentLabel}>Comentário</Label>}>
          <TextArea
            className={classes.textArea}
            placeholder="Ex.: Muito bom o restaurante!"
            rows={8}
            onChange={(e) => setComment(e.target.value)}
          />
        </FormItem>
        <FormItem label="Tags (máx. 5)">
          <FlexBox direction="Row" className={classes.tagListContainer}>
            <Button
              className={classes.tagsListButton}
              onClick={() => setIsSelectTagsDialogOpen(true)}
            >
              Selecionar tags
            </Button>
            <Button className={classes.tagsListButton} onClick={() => setSelectedTags([])}>
              Limpar
            </Button>
            <FlexBox className={classes.selectedBadgesList}>
              <FlexBox className={classes.scrollContainer}>
                {selectedTags.map((tag, index) => (
                  <Badge
                    className={classes.selectedBadgeItem}
                    key={index}
                    colorScheme={
                      tag.type === 'positive'
                        ? CardTagColors.Positive
                        : tag.type === 'negative'
                          ? CardTagColors.Negative
                          : CardTagColors.Neutral
                    }
                  >
                    {tag.name}
                  </Badge>
                ))}
              </FlexBox>
            </FlexBox>
          </FlexBox>
        </FormItem>
        <FormItem label="Nota">
          <RatingIndicator
            className={classes.ratingIndicator}
            onChange={(e) => setRating(e.target.value)}
          />
        </FormItem>
      </FormGroup>
    </Form>
  );
};
