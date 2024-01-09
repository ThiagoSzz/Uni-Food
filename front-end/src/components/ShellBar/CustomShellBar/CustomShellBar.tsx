import {
  Button,
  ButtonDesign,
  Avatar,
  AvatarColorScheme,
  AvatarSize
} from '@ui5/webcomponents-react';

import { ShellBar } from '../ShellBar';

interface CustomShellBarProps {
  searchDisabled?: boolean;
  createReviewDisabled?: boolean;
}

export const CustomShellBar = (props: CustomShellBarProps) => {
  const { searchDisabled, createReviewDisabled } = props;

  return (
    <ShellBar
      image="https://static-00.iconduck.com/assets.00/fork-and-knife-with-plate-emoji-2048x2048-4e58vsav.png"
      text="UniFood"
    >
      <Button design={ButtonDesign.Emphasized} icon="search" disabled={searchDisabled}></Button>
      <Button design={ButtonDesign.Emphasized} icon="add" disabled={createReviewDisabled}></Button>
      <Button design={ButtonDesign.Default} icon="visits"></Button>
      <Avatar icon="employee" colorScheme={AvatarColorScheme.Accent6} size={AvatarSize.S}></Avatar>
    </ShellBar>
  );
};
