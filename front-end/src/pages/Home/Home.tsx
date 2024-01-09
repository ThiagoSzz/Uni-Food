/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {
  Button,
  ButtonDesign,
  FlexBox,
  FlexBoxDirection,
  Icon,
  Input,
  Label,
  SegmentedButton,
  SegmentedButtonItem,
  Switch,
  Text,
  Title,
  TitleLevel,
  WrappingType
} from '@ui5/webcomponents-react';

import { useStyles } from './Home.jss';
import '@ui5/webcomponents-icons/dist/AllIcons';
import { CustomShellBar } from '../../components/ShellBar/CustomShellBar/CustomShellBar';
import { ReviewCard } from '../../components/ReviewCard/ReviewCard';
import { AverageReviewsCard } from '../../components/AverageReviewsCard/AverageReviewsCard';

export const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <FlexBox direction={FlexBoxDirection.Column} className={classes.pageContainer}>
      <CustomShellBar />

      <FlexBox direction={FlexBoxDirection.Column} className={classes.contentContainer}>
        <FlexBox direction={FlexBoxDirection.Row} className={classes.boxesContainer}>
          <FlexBox className={classes.box} direction={FlexBoxDirection.Row}>
            <FlexBox className={classes.boxTextContainer} direction={FlexBoxDirection.Column}>
              <Title level={TitleLevel.H4}>Avalie sua experiência em um RU!</Title>
              <Text className={classes.boxSubtitle}>
                Ajude outros universitários a escolher o melhor RU para frequentar.
              </Text>
            </FlexBox>
            <FlexBox className={classes.boxButtonContainer}>
              <Button
                className={classes.boxButton}
                design={ButtonDesign.Emphasized}
                icon="navigation-right-arrow"
                iconEnd
              >
                Criar avaliação
              </Button>
            </FlexBox>
          </FlexBox>
          <FlexBox className={classes.box}>
            <FlexBox className={classes.boxTextContainer} direction={FlexBoxDirection.Column}>
              <Title wrappingType={WrappingType.Normal} level={TitleLevel.H4}>
                Descubra avaliações dos RUs que você frequenta!
              </Title>
              <Text wrapping className={classes.boxSubtitle}>
                Procure por avaliações deixadas por outros usuários e filtre-as com base em diversas
                opções.
              </Text>
            </FlexBox>
          </FlexBox>
        </FlexBox>

        <FlexBox className={classes.boxesContainer}>
          <FlexBox className={classes.searchBox}>
            <Input
              className={classes.searchBar}
              placeholder="Pesquisar"
              icon={<Icon className={classes.searchBarIcon} name="search" />}
            />
            <SegmentedButton className={classes.segmentedButton}>
              <SegmentedButtonItem icon="filter">Filtrar</SegmentedButtonItem>
              <SegmentedButtonItem icon="sys-cancel">Limpar filtros</SegmentedButtonItem>
            </SegmentedButton>
            <FlexBox className={classes.switchContainer}>
              <Switch />
              <Label className={classes.switchLabelText}>Filtrar médias</Label>
              <Switch checked />
              <Label className={classes.switchLabelText}>Filtrar avaliações</Label>
            </FlexBox>
          </FlexBox>
        </FlexBox>

        <FlexBox className={classes.textContainer}>
          <FlexBox className={classes.centeredContainer}>
            <Title className={classes.sectionText} level={TitleLevel.H4}>
              Médias por Restaurante Universitário
            </Title>
            <Text className={classes.sectionText}>(14 RUs)</Text>
          </FlexBox>
        </FlexBox>

        <FlexBox className={classes.averageReviewsContainer}>
          <AverageReviewsCard
            ruCode="RU01"
            universityName="UFRGS"
            universityLocation="Porto Alegre"
            averageRating={4.4}
            reviewsAmount={230}
            isRising
            isBestReviewed
          />
          <AverageReviewsCard
            ruCode="RU03"
            universityName="UFRGS"
            universityLocation="Porto Alegre"
            averageRating={4.2}
            reviewsAmount={491}
          />
          <AverageReviewsCard
            ruCode="RU01"
            universityName="PUCRS"
            universityLocation="Porto Alegre"
            averageRating={2.1}
            reviewsAmount={1092}
            isDescending
            isWorstReviewed
          />
          <AverageReviewsCard
            ruCode="RU02"
            universityName="UFRJ"
            universityLocation="Rio de Janeiro"
            averageRating={3.3}
            reviewsAmount={112}
            isRising
          />
          <AverageReviewsCard
            ruCode="RU04"
            universityName="USP"
            universityLocation="São Paulo"
            averageRating={3.8}
            reviewsAmount={992}
            isRising
            isBestReviewed
          />
        </FlexBox>

        <FlexBox className={classes.textContainer}>
          <FlexBox className={classes.centeredContainer}>
            <Title className={classes.sectionText} level={TitleLevel.H4}>
              Avaliações por Refeição
            </Title>
            <Text className={classes.sectionText}>(2023 avaliações)</Text>
          </FlexBox>
        </FlexBox>

        <FlexBox className={classes.reviewsContainer}>
          <ReviewCard
            ruCode="RU01"
            universityName="UFRGS"
            universityLocation="Porto Alegre"
            rating={4}
            comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris."
            tags={['Proteína macia', 'Carboidrato de qualidade', 'Fila grande', 'Sem guardanapos']}
          />
          <ReviewCard
            ruCode="RU01"
            universityName="UFRGS"
            universityLocation="Porto Alegre"
            rating={4}
            comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris."
            tags={['Proteína macia', 'Carboidrato de qualidade', 'Fila grande', 'Sem guardanapos']}
          />
          <ReviewCard
            ruCode="RU01"
            universityName="UFRGS"
            universityLocation="Porto Alegre"
            rating={4}
            comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris."
            tags={['Proteína macia', 'Carboidrato de qualidade', 'Fila grande', 'Sem guardanapos']}
          />
          <ReviewCard
            ruCode="RU01"
            universityName="UFRGS"
            universityLocation="Porto Alegre"
            rating={4}
            comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris."
            tags={['Proteína macia', 'Carboidrato de qualidade', 'Fila grande', 'Sem guardanapos']}
          />
          <ReviewCard
            ruCode="RU01"
            universityName="UFRGS"
            universityLocation="Porto Alegre"
            rating={4}
            comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris."
            tags={['Proteína macia', 'Carboidrato de qualidade', 'Fila grande', 'Sem guardanapos']}
          />
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};
