/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  ShellBar,
  Text,
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
      <ShellBar primaryTitle="UniFood"></ShellBar>
      <FlexBox
        direction={FlexBoxDirection.Column}
        justifyContent={FlexBoxJustifyContent.Center}
        alignItems={FlexBoxAlignItems.Center}
        className={classes.contentContainer}
      >
        <Text data-testid="home-flexbox">Testing</Text>
      </FlexBox>
    </>
  );
};
