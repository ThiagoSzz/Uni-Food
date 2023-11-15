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
  Icon,
  List,
  MessageStrip,
  ShellBar,
  StandardListItem,
} from '@ui5/webcomponents-react';

import { useStyles } from './Home.jss';
import useTestStore from '../../store/useTestStore';

export const Home: React.FC = () => {
  const { testNumber, testSetNumber } = useTestStore();
  const classes = useStyles();

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
        <MessageStrip onClose={function Ta() {}}>
          MessageStrip Text
        </MessageStrip>
        <Card
          header={
            <CardHeader
              avatar={<Icon name="person-placeholder" />}
              status="3 of 5"
              subtitleText="Direct Reports"
              titleText="TeamSpace"
            />
          }
          style={{
            width: '300px',
          }}
        >
          <List>
            <StandardListItem description="Software Architect">
              Richard Wilson
            </StandardListItem>
            <StandardListItem description="Visual Designer">
              Elena Petrova
            </StandardListItem>
            <StandardListItem description="Quality Specialist">
              John Miller
            </StandardListItem>
          </List>
        </Card>
      </FlexBox>
    </>
  );
};
