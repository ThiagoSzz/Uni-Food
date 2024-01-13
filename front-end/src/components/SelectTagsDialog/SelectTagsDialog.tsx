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
  Badge
} from '@ui5/webcomponents-react';
import { CardTagColors } from '../../enums/CardTagColorsEnum';
import { SelectTagsDialogProps } from '../../interfaces/props/SelectTagsDialogProps';

export const SelectTagsDialog = (props: SelectTagsDialogProps) => {
  const { isSelectTagsDialogOpen, setIsSelectTagsDialogOpen, selectedTags, setSelectedTags } =
    props;
  const classes = useStyles();

  const hasRightAmountOfTags = selectedTags.length > 5;

  const handleBadgeClick = (tag: string, type: 'positive' | 'negative') => {
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

  const positiveTags = [
    'Proteína macia',
    'Carboidrato de qualidade',
    'Leguminosa saborosa',
    'Variedade de saladas',
    'Com opção de sobremesa',
    'Ambiente harmonioso',
    'Bom cozimento dos alimentos',
    'Comida saborosa',
    'Boa temperatura dos pratos',
    'Bom atendimento',
    'Fila curta'
  ];

  const negativeTags = [
    'Proteína dura',
    'Carboidrato de baixa qualidade',
    'Leguminosa sem sabor',
    'Poucas opções de saladas',
    'Sem opção de sobremesa',
    'Ambiente barulhento',
    'Mau cozimento dos alimentos',
    'Comida de baixa qualidade',
    'Temperatura inadequada dos pratos',
    'Mau atendimento',
    'Fila grande'
  ];

  return (
    <SelectDialog
      headerText="Selecione até 5 tags"
      open={isSelectTagsDialogOpen}
      onAfterClose={handleCloseSelectTagsDialog}
      onTouchCancel={() => console.log('teste')}
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
          {positiveTags.map((tag, index) => {
            const isSelected = selectedTags.some(
              ({ name, type }) => name === tag && type === 'positive'
            );
            return (
              <Badge
                key={index}
                className={`${classes.badge} ${isSelected ? classes.selectedBadge : ''}`}
                colorScheme={CardTagColors.Positive}
                onClick={() => handleBadgeClick(tag, 'positive')}
              >
                {tag}
              </Badge>
            );
          })}
        </FlexBox>
        <FlexBox direction={FlexBoxDirection.Column} className={classes.badgesList}>
          {negativeTags.map((tag, index) => {
            const isSelected = selectedTags.some(
              ({ name, type }) => name === tag && type === 'negative'
            );
            return (
              <Badge
                key={index}
                className={`${classes.badge} ${isSelected ? classes.selectedBadge : ''}`}
                colorScheme={CardTagColors.Negative}
                onClick={() => handleBadgeClick(tag, 'negative')}
              >
                {tag}
              </Badge>
            );
          })}
        </FlexBox>
      </FlexBox>
    </SelectDialog>
  );
};
