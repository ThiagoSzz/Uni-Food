/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import {
  Avatar,
  AvatarColorScheme,
  Button,
  ButtonDesign,
  Card,
  CardHeader,
  Carousel,
  FlexBox,
  FlexBoxDirection,
  Icon,
  List,
  ShellBar,
  ShellBarItem,
  StandardListItem,
  Text
} from '@ui5/webcomponents-react';

import { useStyles } from './Home.jss';
import useTestStore from '../../store/useTestStore';
import { useTestMutation } from '../../hooks/useTestMutation';
import { useTestQuery } from '../../hooks/useTestQuery';
import { useIsMutating } from 'react-query';
import '@ui5/webcomponents-icons/dist/AllIcons';

export const Home: React.FC = () => {
  const { testNumber, testSetNumber } = useTestStore();
  const classes = useStyles();

  const { data, refetch, isLoading, isFetching, isRefetching } = useTestQuery({
    testParam: 'teste'
  });

  const testMutation = useTestMutation();
  const isMutating = useIsMutating({ mutationKey: 'testMutation' });

  const callMutation = () => {
    if (isMutating === 0) {
      testMutation
        .mutateAsync({
          testData: 'teste'
        })
        .then((result) => {
          console.log(result.data);
        });
    } else {
      return Promise.reject(new Error("Mutation 'testMutation' already in progress."));
    }
  };

  useEffect(() => {
    testSetNumber(testNumber + 1);
  }, []);

  return (
    <FlexBox direction={FlexBoxDirection.Column}>
      <ShellBar
        className={classes.navbar}
        logo={
          <img
            alt="UniFood Logo"
            src="https://static-00.iconduck.com/assets.00/fork-and-knife-with-plate-emoji-2048x2048-4e58vsav.png"
          />
        }
        primaryTitle="UniFood"
        profile={<Avatar colorScheme={AvatarColorScheme.Accent6} initials="TH"></Avatar>}
      >
        <ShellBarItem icon="visits" text="Entrar" />
        <ShellBarItem icon="add-employee" text="Cadastrar-se" />
        <ShellBarItem icon="home" text="Home" />
        <ShellBarItem icon="activity-2" text="Avaliações" />
        <ShellBarItem icon="add" text="Criar" />
        <ShellBarItem icon="bar-chart" text="Notas médias" />
        <ShellBarItem icon="search" text="Pesquisar" />
        <ShellBarItem icon="travel-request" text="FAQ" />
        <ShellBarItem icon="letter" text="Contato" />
      </ShellBar>

      <FlexBox direction={FlexBoxDirection.Row} className={classes.firstSection}>
        <FlexBox direction={FlexBoxDirection.Column} className={classes.mainContainer}>
          <Text className={classes.mainText}>
            Compartilhe suas experiências gastronômicas em restaurantes universitários!
          </Text>
          <Text className={classes.secondaryText}>
            Sua opinião importa! Junte-se a nós e ajude a transformar a experiência gastronômica
            estudantil nas universidades brasileiras.
          </Text>
          <FlexBox direction={FlexBoxDirection.Row} className={classes.buttonsFlexBox}>
            <Button design={ButtonDesign.Transparent} className={classes.newReviewButton}>
              Deixar Avaliação
            </Button>
            <Button design={ButtonDesign.Emphasized} className={classes.searchReviewsButton}>
              Pesquisar Avaliações
            </Button>
          </FlexBox>
        </FlexBox>

        <FlexBox className={classes.secondaryContainer}>
          <Carousel className={classes.carousel}>
            <Card
              header={<CardHeader avatar={<Icon name="card" />} titleText="Placeholder card" />}
              className={classes.carouselCards}
            >
              <List>
                <StandardListItem description="Teste">Teste</StandardListItem>
                <StandardListItem description="Teste">Teste</StandardListItem>
              </List>
            </Card>
            <Card
              header={<CardHeader avatar={<Icon name="card" />} titleText="Placeholder card" />}
              className={classes.carouselCards}
            >
              <List>
                <StandardListItem description="Teste">Teste</StandardListItem>
                <StandardListItem description="Teste">Teste</StandardListItem>
              </List>
            </Card>
            <Card
              header={<CardHeader avatar={<Icon name="card" />} titleText="Placeholder card" />}
              className={classes.carouselCards}
            >
              <List>
                <StandardListItem description="Teste">Teste</StandardListItem>
                <StandardListItem description="Teste">Teste</StandardListItem>
              </List>
            </Card>
          </Carousel>
        </FlexBox>
      </FlexBox>

      <FlexBox direction={FlexBoxDirection.Column} className={classes.secondSection}></FlexBox>
      <FlexBox direction={FlexBoxDirection.Column} className={classes.thirdSection}></FlexBox>
      <FlexBox direction={FlexBoxDirection.Row} className={classes.footer}>
        {/* <Text className={classes.footerText}>
          A missão da plataforma UniFood é tornar a experiência gastronômica universitária ainda
          mais especial e prática. Nossa proposta é simples: fornecer um espaço onde você possa
          avaliar os restaurantes universitários (RUs) com facilidade e compartilhar suas
          experiências. Suas avaliações podem contribuir para melhorar a experiência de todos que
          utilizam os mesmos RUs que você!
        </Text> */}
      </FlexBox>
    </FlexBox>
  );
};
