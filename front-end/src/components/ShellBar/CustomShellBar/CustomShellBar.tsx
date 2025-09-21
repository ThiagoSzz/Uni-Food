import {
  Button,
  ButtonDesign,
  Avatar,
  AvatarColorScheme,
  AvatarSize,
  MessageStrip,
  MessageStripDesign
} from '@ui5/webcomponents-react';

import { ShellBar } from '../ShellBar';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../../enums/AppRoutesEnum';
import { CustomShellBarProps } from '../../../interfaces/props/CustomShellBarProps';
import { useAuth } from '../../../contexts/AuthContext';
import { AuthPopover } from '../../AuthPopover/AuthPopover';
import { useState } from 'react';
import { Tooltip } from 'react-tippy';
import { useTranslation } from 'react-i18next';
import { useMessageStrip } from '../../../hooks/useMessageStrip';

export const CustomShellBar = (props: CustomShellBarProps) => {
  const { t } = useTranslation();

  const { searchDisabled, createReviewDisabled } = props;
  const { isAuthenticated, user, logout } = useAuth();
  const [isAuthPopoverOpen, setIsAuthPopoverOpen] = useState(false);
  const { message, showInfoMessage, hideMessage } = useMessageStrip(5000);

  const navigate = useNavigate();

  const navigateToHomePage = () => {
    navigate(AppRoute.Home);
  };

  const navigateToCreateReviewPage = () => {
    if (!isAuthenticated) {
      showInfoMessage(t('auth.loginRequired'));
      return;
    }
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
      {message && (
        <MessageStrip
          design={MessageStripDesign.Information}
          onClose={hideMessage}
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            zIndex: 1000,
            margin: '0'
          }}
        >
          {message.text}
        </MessageStrip>
      )}
      <ShellBar
        image="https://static-00.iconduck.com/assets.00/fork-and-knife-with-plate-emoji-2048x2048-4e58vsav.png"
        text={t('nav.appName')}
      >
        <Tooltip title={t('nav.searchReviews')} arrow arrowSize="small">
          <Button
            design={ButtonDesign.Emphasized}
            icon="search"
            disabled={searchDisabled}
            onClick={() => navigateToHomePage()}
            tooltip=" "
          />
        </Tooltip>
        <Tooltip title={t('nav.createReview')} arrow arrowSize="small">
          <Button
            design={ButtonDesign.Emphasized}
            icon="add"
            disabled={createReviewDisabled}
            onClick={() => navigateToCreateReviewPage()}
            tooltip=" "
          />
        </Tooltip>

        {isAuthenticated ? (
          <>
            <Tooltip title={t('nav.logout')} arrow arrowSize="small">
              <Button design={ButtonDesign.Default} icon="log" onClick={handleLogout} tooltip=" " />
            </Tooltip>
            <Tooltip title={`Olá, ${user?.nome || 'Usuário'}`} arrow arrowSize="small">
              <Avatar icon="employee" colorScheme={AvatarColorScheme.Accent6} size={AvatarSize.S} />
            </Tooltip>
          </>
        ) : (
          <>
            <Tooltip title={t('nav.login')} arrow arrowSize="small">
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
