/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import {
  Avatar,
  FlexBox,
  FlexBoxDirection,
  ShellBar,
  SideNavigation,
  SideNavigationItem,
  SideNavigationSubItem,
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
      <FlexBox className={classes.floating}>
        <SideNavigation
          className={classes.sidebar}
          fixedItems={
            <>
              <SideNavigationItem expanded wholeItemToggleable icon="visits" text="Entrar" />
              <SideNavigationItem
                expanded
                wholeItemToggleable
                icon="add-employee"
                text="Cadastrar-se"
              />
            </>
          }
        >
          <SideNavigationItem icon="home" text="Home" />
          <SideNavigationItem expanded wholeItemToggleable icon="activity-2" text="Avaliações">
            <SideNavigationSubItem icon="add" text="Criar" />
            <SideNavigationItem icon="bar-chart" text="Notas médias" />
            <SideNavigationSubItem icon="search" text="Pesquisar" />
          </SideNavigationItem>
          <SideNavigationItem icon="travel-request" text="FAQ" />
          <SideNavigationItem icon="letter" text="Contato" />
        </SideNavigation>

        <ShellBar
          className={classes.navbar}
          logo={
            <img
              alt="UniFood Logo"
              src="https://static-00.iconduck.com/assets.00/fork-and-knife-with-plate-emoji-2048x2048-4e58vsav.png"
            />
          }
          primaryTitle="UniFood"
          showNotifications
          notificationsCount="2"
          profile={
            <Avatar>
              <img src="https://sap.github.io/ui5-webcomponents-react/assets/Person-eb847016.png" />
            </Avatar>
          }
        />
      </FlexBox>

      <FlexBox direction={FlexBoxDirection.Column} className={classes.firstSection}>
        <FlexBox direction={FlexBoxDirection.Column} className={classes.mainContainer}>
          <Text className={classes.mainText}>
            Compartilhe suas experiências gastronômicas em restaurantes universitários!
          </Text>
          <Text className={classes.secondaryText}>
            Sua opinião importa! Junte-se a nós e ajude a transformar a experiência gastronômica
            estudantil nas universidades brasileiras.
          </Text>
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
