/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import {
  Avatar,
  Card,
  CardHeader,
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  List,
  MessageStrip,
  MessageStripDesign,
  ShellBar,
  StandardListItem,
} from '@ui5/webcomponents-react';

import { useStyles } from './Home.jss';
import useTestStore from '../../store/useTestStore';
import { useTestMutation } from '../../hooks/useTestMutation';
import { useTestQuery } from '../../hooks/useTestQuery';
import { useIsMutating } from 'react-query';

export const Home: React.FC = () => {
  const { testNumber, testSetNumber } = useTestStore();
  const classes = useStyles();

  const { data, refetch, isLoading, isFetching, isRefetching } = useTestQuery({
    testParam: 'teste',
  });

  const testMutation = useTestMutation();
  const isMutating = useIsMutating({ mutationKey: 'testMutation' });

  const callMutation = () => {
    if (isMutating === 0) {
      testMutation
        .mutateAsync({
          testData: 'teste',
        })
        .then((result) => {
          console.log(result.data);
        });
    } else {
      return Promise.reject(
        new Error("Mutation 'testMutation' already in progress.")
      );
    }
  };

  useEffect(() => {
    testSetNumber(testNumber + 1);
  }, []);

  return (
    <>
      <ShellBar
        logo={
          <img
            alt="UniFood Logo"
            src="https://static-00.iconduck.com/assets.00/fork-and-knife-with-plate-emoji-2048x2048-4e58vsav.png"
          />
        }
        notificationsCount="2"
        onLogoClick={function Ta() {}}
        onNotificationsClick={function Ta() {}}
        onProfileClick={function Ta() {}}
        primaryTitle="UniFood"
        profile={
          <Avatar>
            <img
              alt="Person"
              src="https://sap.github.io/ui5-webcomponents-react/assets/Person-eb847016.png"
            />
          </Avatar>
        }
        secondaryTitle="Crie avaliações e busque recomendações de restaurantes universitários"
        showNotifications
      ></ShellBar>

      <FlexBox
        direction={FlexBoxDirection.Column}
        justifyContent={FlexBoxJustifyContent.Center}
        alignItems={FlexBoxAlignItems.Center}
        className={classes.contentContainer}
      >
        {Object.values(MessageStripDesign).map((design) => {
          return (
            <MessageStrip
              key={design}
              design={design}
              onClose={function Ta() {}}
              style={{ width: '300px', marginBottom: '20px' }}
            >
              {design as String}
            </MessageStrip>
          );
        })}
        <Card
          header={
            <CardHeader
              avatar={
                <img
                  alt="Person"
                  src="https://sap.github.io/ui5-webcomponents-react/assets/Person-eb847016.png"
                />
              }
              status="3 of 3"
              subtitleText="Members"
              titleText="Scrum Team"
            />
          }
          style={{
            width: '300px',
          }}
        >
          <List>
            <StandardListItem description="PO, Scrum Master, Dev">
              Thiago Haab
            </StandardListItem>
            <StandardListItem description="UX Designer, Dev">
              Laura Speggiorin
            </StandardListItem>
            <StandardListItem description="Dev">Rui Cardozo</StandardListItem>
          </List>
        </Card>
      </FlexBox>
    </>
  );
};
