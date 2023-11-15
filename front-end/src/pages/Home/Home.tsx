import React from "react";
import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  ShellBar,
} from "@ui5/webcomponents-react";

import { useStyles } from "./Home.jss";

export const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <ShellBar primaryTitle="UniFood"></ShellBar>
      <FlexBox
        direction={FlexBoxDirection.Column}
        justifyContent={FlexBoxJustifyContent.Center}
        alignItems={FlexBoxAlignItems.Center}
        className={classes.contentContainer}
      >
        Testing
      </FlexBox>
    </>
  );
};
