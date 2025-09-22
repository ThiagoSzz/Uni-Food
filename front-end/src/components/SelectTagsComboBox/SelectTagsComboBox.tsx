import {
  ComboBoxFilter,
  MultiComboBox,
  MultiComboBoxDomRef,
  MultiComboBoxGroupItem,
  MultiComboBoxItem,
  Ui5CustomEvent,
  ValueState
} from '@ui5/webcomponents-react';
import { getNegativeTags, getNeutralTags, getPositiveTags } from '../../fixtures/TagStatesFixture';
import { useStyles } from './SelectTagsComboBox.jss';
import useNewReviewStore from '../../stores/useNewReviewStore';
import { MultiComboBoxSelectionChangeEventDetail } from '@ui5/webcomponents/dist/MultiComboBox';
import { TagTypes } from '../../enums/TagTypes';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const SelectTagsComboBox = () => {
  const [tags, setTags] = useNewReviewStore((value) => [value.tags, value.setTags]);

  const [valueState, setValueState] = useState<ValueState>(ValueState.None);

  const positiveTags = getPositiveTags();
  const negativeTags = getNegativeTags();
  const neutralTags = getNeutralTags();

  // this is to create the string for the selectors of the
  // token parts and style them according to their semantic
  const positiveRange = positiveTags.map((tag, index) => `&::part(token-${index + 1})`).join(', ');
  const negativeRange = negativeTags
    .map((tag, index) => `&::part(token-${index + 2 + positiveTags.length})`)
    .join(', ');
  const neutralRange = neutralTags
    .map((tag, index) => `&::part(token-${index + 3 + positiveTags.length + negativeTags.length})`)
    .join(', ');

  const classes = useStyles({ positiveRange, negativeRange, neutralRange });
  const { t } = useTranslation();

  const onChangeSelectedTags = (
    event: Ui5CustomEvent<MultiComboBoxDomRef, MultiComboBoxSelectionChangeEventDetail>
  ) => {
    setTags(
      event.detail.items.map((tag) => ({
        name: tag.text,
        type: tag.id as TagTypes
      }))
    );

    if (event.detail.items.length > 5) {
      setValueState(ValueState.Error);
    } else {
      setValueState(ValueState.None);
    }
  };

  return (
    <MultiComboBox
      className={classes.tags}
      placeholder={t('tags.placeholder')}
      filter={ComboBoxFilter.Contains}
      onSelectionChange={onChangeSelectedTags}
      valueState={valueState}
      valueStateMessage={t('tags.valueState')}
    >
      <MultiComboBoxGroupItem text={t('tags.positiveGroup')} />
      {[...positiveTags].map((tag) => (
        <MultiComboBoxItem
          id={TagTypes.Positive}
          text={tag}
          key={tag}
          selected={tags.some(
            (selectedTag) => selectedTag.name === tag && selectedTag.type === TagTypes.Positive
          )}
        />
      ))}
      <MultiComboBoxGroupItem text={t('tags.negativeGroup')} />
      {[...negativeTags].map((tag) => (
        <MultiComboBoxItem
          id={TagTypes.Negative}
          text={tag}
          key={tag}
          selected={tags.some(
            (selectedTag) => selectedTag.name === tag && selectedTag.type === TagTypes.Negative
          )}
        />
      ))}
      <MultiComboBoxGroupItem text={t('tags.neutralGroup')} />
      {[...neutralTags].map((tag) => (
        <MultiComboBoxItem
          id={TagTypes.Neutral}
          text={tag}
          key={tag}
          selected={tags.some(
            (selectedTag) => selectedTag.name === tag && selectedTag.type === TagTypes.Neutral
          )}
        />
      ))}
    </MultiComboBox>
  );
};
