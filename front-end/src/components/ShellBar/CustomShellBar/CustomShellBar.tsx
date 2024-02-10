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
import { CustomShellBarProps } from '../../../interfaces/props/CustomShellBarProps';
import { Tooltip } from 'react-tippy';

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
      <Tooltip title="Pesquisar avaliações" arrow arrowSize="small">
        <Button
          design={ButtonDesign.Emphasized}
          icon="search"
          disabled={searchDisabled}
          onClick={() => navigateToHomePage()}
          tooltip=" "
        />
      </Tooltip>
      <Tooltip title="Criar nova avaliação" arrow arrowSize="small">
        <Button
          design={ButtonDesign.Emphasized}
          icon="add"
          disabled={createReviewDisabled}
          onClick={() => navigateToCreateReviewPage()}
          tooltip=" "
        />
      </Tooltip>
      <Tooltip title="Entrar" arrow arrowSize="small">
        <Button design={ButtonDesign.Default} disabled icon="visits" tooltip=" " />
      </Tooltip>
      <Avatar icon="employee" colorScheme={AvatarColorScheme.Accent6} size={AvatarSize.S}></Avatar>
    </ShellBar>
  );
};
