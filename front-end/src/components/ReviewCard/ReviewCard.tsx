import {
  Card,
  CardHeader,
  Avatar,
  List,
  ListSeparators,
  StandardListItem,
  ListItemType,
  RatingIndicator,
  FlexBox,
  Badge,
  TitleLevel,
  Title,
  Text
} from '@ui5/webcomponents-react';
import { CardTagColors } from '../../enums/CardTagColorsEnum';

import { useStyles } from './ReviewCard.jss';
import { ReviewCardProps } from '../../interfaces/props/ReviewCardProps';

export const ReviewCard = (props: ReviewCardProps) => {
  const { ruCode, universityName, universityLocation, rating, comment, tags } = props;

  const isAvatarGreen = Math.floor(Math.random() * 100) + 1 <= 50;
  const classes = useStyles({ isAvatarGreen });

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
    <Card
      className={classes.reviewCard}
      header={
        <CardHeader
          avatar={<Avatar icon="employee" className={classes.reviewCardAvatar} />}
          titleText={ruCode + ' - ' + universityName}
          subtitleText={universityLocation}
        />
      }
    >
      <List separators={ListSeparators.None}>
        <StandardListItem type={ListItemType.Inactive}>
          <RatingIndicator readonly value={rating} className={classes.reviewCardStars} />
        </StandardListItem>
        <StandardListItem
          type={ListItemType.Inactive}
          style={{ height: 'auto', marginTop: '20px' }}
        >
          <Title level={TitleLevel.H5}>Comentários</Title>
          <Text className={classes.reviewCardComments}>{comment}</Text>
        </StandardListItem>
        <StandardListItem
          type={ListItemType.Inactive}
          style={{ height: 'auto', marginTop: '20px' }}
        >
          <Title level={TitleLevel.H5}>Tags</Title>
          <FlexBox className={classes.badgesList}>
            {tags.map((tag, index) => {
              const isTagPositive = positiveTags.includes(tag);
              const isTagNegative = negativeTags.includes(tag);

              return (
                <Badge
                  className={classes.badge}
                  key={index}
                  colorScheme={
                    isTagPositive
                      ? CardTagColors.Positive
                      : isTagNegative
                        ? CardTagColors.Negative
                        : CardTagColors.Neutral
                  }
                >
                  {tag}
                </Badge>
              );
            })}
          </FlexBox>
        </StandardListItem>
      </List>
    </Card>
  );
};
