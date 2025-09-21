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
import { useAuth } from '../../../contexts/AuthContext';
import { AuthPopover } from '../../AuthPopover/AuthPopover';
import { useState } from 'react';
import { Tooltip } from 'react-tippy';

export const CustomShellBar = (props: CustomShellBarProps) => {
  const { searchDisabled, createReviewDisabled } = props;
  const { isAuthenticated, user, logout } = useAuth();
  const [isAuthPopoverOpen, setIsAuthPopoverOpen] = useState(false);

  const navigate = useNavigate();

  const navigateToHomePage = () => {
    navigate(AppRoute.Home);
  };

  const navigateToCreateReviewPage = () => {
    navigate(AppRoute.CreateReview);
  };

  const handleLoginButtonClick = () => {
    setIsAuthPopoverOpen(true);
  };

  const handleAuthPopoverClose = () => {
    setIsAuthPopoverOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate(AppRoute.Home);
  };

  return (
    <>
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
            disabled={createReviewDisabled || !isAuthenticated}
            onClick={() => navigateToCreateReviewPage()}
            tooltip=" "
          />
        </Tooltip>

        {isAuthenticated ? (
          <>
            <Tooltip title="Sair" arrow arrowSize="small">
              <Button design={ButtonDesign.Default} icon="log" onClick={handleLogout} tooltip=" " />
            </Tooltip>
            <Tooltip title={`Olá, ${user?.nome || 'Usuário'}`} arrow arrowSize="small">
              <Avatar icon="employee" colorScheme={AvatarColorScheme.Accent6} size={AvatarSize.S} />
            </Tooltip>
          </>
        ) : (
          <>
            <Tooltip title="Entrar" arrow arrowSize="small">
              <Button
                id="login-button"
                design={ButtonDesign.Default}
                icon="visits"
                onClick={handleLoginButtonClick}
                tooltip=" "
              />
            </Tooltip>
            <Avatar icon="employee" colorScheme={AvatarColorScheme.Accent1} size={AvatarSize.S} />
          </>
        )}
      </ShellBar>

      <AuthPopover
        opener="login-button"
        open={isAuthPopoverOpen}
        onClose={handleAuthPopoverClose}
      />
    </>
  );
};
