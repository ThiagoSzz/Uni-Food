import {
  Button,
  ButtonDesign,
  Avatar,
  AvatarColorScheme,
  AvatarSize
} from '@ui5/webcomponents-react';

import { ShellBar } from '../ShellBar';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../../enums/AppRoutesEnum';

interface CustomShellBarProps {
  searchDisabled?: boolean;
  createReviewDisabled?: boolean;
}

export const CustomShellBar = (props: CustomShellBarProps) => {
  const { searchDisabled, createReviewDisabled } = props;

  const navigate = useNavigate();

  const navigateToHomePage = () => {
    navigate(AppRoute.Home);
  };

  const navigateToCreateReviewPage = () => {
    navigate(AppRoute.CreateReview);
  };

  return (
    <ShellBar
      image="https://static-00.iconduck.com/assets.00/fork-and-knife-with-plate-emoji-2048x2048-4e58vsav.png"
      text="UniFood"
    >
      <Button
        design={ButtonDesign.Emphasized}
        icon="search"
        disabled={searchDisabled}
        onClick={() => navigateToHomePage()}
      ></Button>
      <Button
        design={ButtonDesign.Emphasized}
        icon="add"
        disabled={createReviewDisabled}
        onClick={() => navigateToCreateReviewPage()}
      ></Button>
      <Button design={ButtonDesign.Default} icon="visits"></Button>
      <Avatar icon="employee" colorScheme={AvatarColorScheme.Accent6} size={AvatarSize.S}></Avatar>
    </ShellBar>
  );
};
