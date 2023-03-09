import { FC } from 'react';

import { LoginButton, LogoutButton } from '@components';
import { useAuth } from '@hooks/useAuth';

import { useAppSelector, getAuthState } from '@redux';

import style from './AuthButtons.module.scss';

export const AuthButtons: FC = () => {
  const { isAuth, user } = useAppSelector(getAuthState);

  const { onLoginSuccess, onLoginFailure, onLogoutSuccess } = useAuth();

  return (
    <aside className={style.containder}>
      {isAuth ? (
        <LogoutButton
          imgUrl={user?.imageUrl}
          onLogoutSuccess={onLogoutSuccess}
        />
      ) : (
        <LoginButton
          isAuth={isAuth}
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
        />
      )}
    </aside>
  );
};
