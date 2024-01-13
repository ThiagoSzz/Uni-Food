/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useStyles } from '../SelectTagsDialog/SelectTagsDialog.jss';
import {
  SelectDialog,
  MessageStrip,
  MessageStripDesign,
  FlexBox,
  FlexBoxDirection,
  Badge,
  Text
} from '@ui5/webcomponents-react';
import { CardTagColors } from '../../enums/CardTagColorsEnum';
import { SelectTagsDialogProps } from '../../interfaces/props/SelectTagsDialogProps';
import { useState } from 'react';
import { getNegativeTags, getNeutralTags, getPositiveTags } from '../../fixtures/TagStatesFixture';

export const SelectTagsDialog = (props: SelectTagsDialogProps) => {
  const { isSelectTagsDialogOpen, setIsSelectTagsDialogOpen, selectedTags, setSelectedTags } =
    props;
  const classes = useStyles();

  const positiveTags = getPositiveTags();
  const negativeTags = getNegativeTags();
  const neutralTags = getNeutralTags();
  const hasRightAmountOfTags = selectedTags.length > 5;

  const [searchText, setSearchText] = useState('');

  const handleSearch = (event: CustomEvent) => {
    const newSearchText = event.detail?.value?.toLowerCase() || '';
    setSearchText(newSearchText);
  };

  const handleBadgeClick = (tag: string, type: 'positive' | 'negative' | 'neutral') => {
    setSelectedTags((prevSelectedTags) => {
      const tagIndex = prevSelectedTags.findIndex(({ name }) => name === tag);
      const isTagSelected = tagIndex !== -1;

      if (isTagSelected) {
        const updatedTags = [...prevSelectedTags];
        updatedTags.splice(tagIndex, 1);
        return updatedTags;
      } else {
        const otherType = type === 'positive' ? 'negative' : 'positive';
        const correspondingTagIndex =
          type === 'positive' ? positiveTags.indexOf(tag) : negativeTags.indexOf(tag);
        const correspondingTag =
          otherType === 'positive'
            ? positiveTags[correspondingTagIndex]
            : negativeTags[correspondingTagIndex];

        const updatedOtherList = prevSelectedTags.filter(({ name }) => name !== correspondingTag);

        return [...updatedOtherList, { name: tag, type }];
      }
    });
  };

  const handleCloseSelectTagsDialog = () => {
    setIsSelectTagsDialogOpen(false);
  };

  const renderTags = (tags: string[], type: string) => {
    const filteredTags = tags.filter((tag) => tag.toLowerCase().includes(searchText));

    if (filteredTags.length === 0) {
      return (
        <FlexBox className={classes.noTagsFilteredContainer}>
          <Text className={classes.noTagsFilteredText}>
            Nenhuma tag{' '}
            {type === 'positive' ? 'positiva' : type === 'negative' ? 'negativa' : 'neutra'} foi
            filtrada com a pesquisa.
          </Text>
        </FlexBox>
      );
    }

    return filteredTags.map((tag, index) => {
      const isSelected = selectedTags.some(
        ({ name, type: selectedType }) => name === tag && type === selectedType
      );
      return (
        <Badge
          key={index}
          className={`${classes.badge} ${isSelected ? classes.selectedBadge : ''}`}
          colorScheme={
            type === 'positive'
              ? CardTagColors.Positive
              : type === 'negative'
                ? CardTagColors.Negative
                : CardTagColors.Neutral
          }
          onClick={() => handleBadgeClick(tag, type as 'positive' | 'negative' | 'neutral')}
        >
          {tag}
        </Badge>
      );
    });
  };

  return (
    <SelectDialog
      headerText="Selecione até 5 tags"
      open={isSelectTagsDialogOpen}
      onAfterClose={handleCloseSelectTagsDialog}
      onSearch={handleSearch}
    >
      {hasRightAmountOfTags ? (
        <MessageStrip
          hideCloseButton
          design={MessageStripDesign.Negative}
          className={classes.messageStrip}
        >
          Você deve selecionar no máximo 5 tags.
        </MessageStrip>
      ) : (
        <></>
      )}
      <FlexBox className={classes.selectDialogContainer} direction={FlexBoxDirection.Row}>
        <FlexBox direction={FlexBoxDirection.Column} className={classes.badgesList}>
          {renderTags(positiveTags, 'positive')}
        </FlexBox>
        <FlexBox direction={FlexBoxDirection.Column} className={classes.badgesList}>
          {renderTags(negativeTags, 'negative')}
        </FlexBox>
        <FlexBox direction={FlexBoxDirection.Column} className={classes.badgesList}>
          {renderTags(neutralTags, 'neutral')}
        </FlexBox>
      </FlexBox>
    </SelectDialog>
  );
};
